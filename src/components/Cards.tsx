import PaintingService from '../api/PaintingService';
import React, { useState, useEffect } from 'react';
import { useFetching } from '../hooks/useFetching';
import { painting } from '../types';

const Cards = () => {
  const paintsData: painting[] = [];
  let responseData: number[] = [];
  const [paints, setPaints] = useState([] as painting[]);
  const [fetchPaintsId, isPaintsIdLoading] = useFetching(async () => {
    await PaintingService.searchPaintings()
      .then((response) => {
        responseData = response.data.objectIDs;
        responseData.length = 10;
      })
      .then(async () => {
        for (let i = 0; i < responseData.length; i += 1) {
          const response = await PaintingService.getPaintings(responseData[i]);
          paintsData.push(response.data);
        }
        setPaints([...paintsData]);
      });
  });

  useEffect(() => {
    fetchPaintsId();
  }, []);

  return (
    <div className="flex-layout">
      {isPaintsIdLoading ? (
        <div>Loading...</div>
      ) : (
        paints.map((elem, index) => {
          return (
            <div key={index} style={{ width: '200px', height: '400px', border: '1px solid black' }}>
              <img width="200" src={elem.primaryImageSmall}></img>
              <h2>{elem.title.slice(0, 20) + '...'}</h2>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Cards;
