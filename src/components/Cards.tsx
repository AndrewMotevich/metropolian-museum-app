import React, { useState, useEffect } from 'react';
import MyCard from './UI/main-card/MyCard';
import Loading from './UI/loading/Loading';
import Modal from './UI/modal-window/Modal';
import MyModal from './MyModal/MyModal';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useSearchPaintingsQuery } from '../api/RTKpaintingService';

const Cards = () => {
  const [modal, setModal] = useState(false);

  const { savedValue: savedQuery } = useSelector((state: RootState) => state.search);
  const { data: paintingIDs, error, isLoading: loadingIDs } = useSearchPaintingsQuery(savedQuery);

  useEffect(() => {}, [savedQuery]);

  return (
    <div className="flex-center">
      <div className="flex-start">
        {loadingIDs ? (
          <Loading />
        ) : error ? (
          <h2>Error to fetch CardsIDs</h2>
        ) : paintingIDs?.objectIDs?.length !== undefined ? (
          paintingIDs?.objectIDs.map((elem, index) => {
            if (index > 11) return;
            return <MyCard key={elem} elem={elem} modal={setModal} />;
          })
        ) : (
          <h2>Not found</h2>
        )}
        <Modal visible={modal} setVisible={setModal}>
          <MyModal />
        </Modal>
      </div>
    </div>
  );
};

export default Cards;
