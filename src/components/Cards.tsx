import PaintingService from '../api/PaintingService';
import React, { useState, useEffect } from 'react';
import { useFetching } from '../hooks/useFetching';
import { painting } from '../types';
import MyCard from './UI/main-card/MyCard';
import Loading from './UI/loading/Loading';
import { checkApiData } from '../utils/checkApiData';
import Modal from './UI/modal-window/Modal';

const Cards = () => {
  const paintsData: painting[] = [];
  let responseData: number[] = [];
  const [elem, setElem] = useState({} as painting);
  const [modal, setModal] = useState(false);
  const [paints, setPaints] = useState([] as painting[]);
  const [fetchPaintsId, isPaintsIdLoading] = useFetching(async () => {
    await PaintingService.searchPaintings()
      .then((response) => {
        responseData = response.data.objectIDs;
        responseData.length = 12;
      })
      .then(async () => {
        for (let i = 0; i < responseData.length; i += 1) {
          const response = await PaintingService.getPaintings(responseData[i]);
          if (checkApiData(response.data)) {
            paintsData.push(response.data);
          }
        }
        setPaints([...paintsData]);
      });
  });

  useEffect(() => {
    fetchPaintsId();
  }, []);

  const onClickHandler = (elem: painting) => {
    setElem(elem);
  };

  return (
    <div className="flex-layout">
      {isPaintsIdLoading ? (
        <Loading />
      ) : (
        paints.map((elem) => {
          return (
            <MyCard
              key={elem.objectID}
              elem={elem}
              onClickHandler={onClickHandler}
              modal={setModal}
            />
          );
        })
      )}
      <Modal visible={modal} setVisible={setModal} elem={elem} />
    </div>
  );
};

export default Cards;
