import React, { Fragment, useEffect } from 'react';
import classes from './MyModal.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const MyModal = () => {
  const { modalObject } = useSelector((state: RootState) => state.search);

  useEffect(() => {}, []);
  return (
    <Fragment>
      <div className={classes.modalWindowLayout}>
        <div
          className={classes.modalWindowImg}
          style={{
            backgroundImage: `url(${modalObject.primaryImage})`,
          }}
        ></div>
        <ul className={classes.modalWindowList}>
          <li>
            <span>Object name:</span> {modalObject.title}
          </li>
          <li>
            <span>Object type:</span> {modalObject.objectName}
          </li>
          <li>
            <span>Artist name:</span> {modalObject.artistDisplayName}
          </li>
          <li>
            <span>Artist nationality:</span> {modalObject.artistNationality}
          </li>
          <li>
            <span>Artist years of life:</span> {modalObject.artistBeginDate}-
            {modalObject.artistEndDate}
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default MyModal;
