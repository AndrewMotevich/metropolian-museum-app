import PaintingService from '../api/PaintingService';
import React, { useState, useEffect } from 'react';
import { useFetching } from '../hooks/useFetching';
import { painting } from '../types';
import MyCard from './UI/main-card/MyCard';
import Loading from './UI/loading/Loading';
import { checkApiData } from '../utils/checkApiData';
import Modal from './UI/modal-window/Modal';
import MyModal from './MyModal/MyModal';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const Cards = () => {
  const savedQuery = useSelector((state: RootState) => state.search.savedValue);
  const [elem, setElem] = useState({} as painting);
  const [modal, setModal] = useState(false);
  const [paints, setPaints] = useState([] as painting[]);

  let responseData: number[] = [];
  const paintsData: painting[] = [];

  const [fetchPaintsId, isPaintsIdLoading] = useFetching(async () => {
    await PaintingService.searchPaintings(savedQuery)
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
        console.log('times');
        setPaints([...paintsData]);
      });
  });

  useEffect(() => {
    setPaints([]);
    fetchPaintsId();
  }, [savedQuery]);

  const onClickHandler = (elem: painting) => {
    setElem(elem);
  };

  return (
    <div className="flex-center">
      <div className="flex-start">
        {isPaintsIdLoading ? (
          <Loading />
        ) : paints.length !== 0 ? (
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
        ) : (
          <h2>Not found</h2>
        )}
        <Modal visible={modal} setVisible={setModal}>
          <MyModal elem={elem} />
        </Modal>
      </div>
    </div>
  );
};

export default Cards;
