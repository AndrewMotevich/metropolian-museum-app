import React, { Fragment, useEffect } from 'react';
import classes from './MyModal.module.css';
import { painting } from 'types';
type props = {
  elem: painting;
};

const MyModal = (props: props) => {
  useEffect(() => {}, [props.elem]);
  return (
    <Fragment>
      <div className={classes.modalWindowLayout}>
        <div
          className={classes.modalWindowImg}
          style={{
            backgroundImage: `url(${props.elem.primaryImage})`,
          }}
        ></div>
        <ul className={classes.modalWindowList}>
          <li>
            <span>Object name:</span> {props.elem.title}
          </li>
          <li>
            <span>Object type:</span> {props.elem.objectName}
          </li>
          <li>
            <span>Artist name:</span> {props.elem.artistDisplayName}
          </li>
          <li>
            <span>Artist nationality:</span> {props.elem.artistNationality}
          </li>
          <li>
            <span>Artist years of life:</span> {props.elem.artistBeginDate}-
            {props.elem.artistEndDate}
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default MyModal;
