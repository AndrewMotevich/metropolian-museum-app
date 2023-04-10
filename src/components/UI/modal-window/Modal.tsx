import { painting } from 'types';
import classes from './Modal.module.css';
import { useEffect } from 'react';
type props = {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  elem: painting;
};

const Modal = (props: props) => {
  useEffect(() => {}, [props.elem]);
  return (
    <div
      style={props.visible ? { visibility: 'visible' } : { visibility: 'hidden' }}
      className={classes.modalWrapper}
      onClick={(e) => {
        e.stopPropagation();
        props.setVisible(false);
      }}
    >
      <div
        className={classes.modalWindow}
        onClick={(e) => {
          e.stopPropagation();
          console.log(props.elem);
        }}
      >
        <div
          className={classes.modalWindowCross}
          onClick={() => {
            props.setVisible(false);
          }}
        ></div>
        <div className={classes.modalWindowLayout}>
          <div
            className={classes.modalWindowImg}
            style={{
              backgroundImage: `url(${props.elem.primaryImage})`,
            }}
          ></div>
          <ul
            style={{
              marginLeft: '1rem',
              textAlign: 'left',
              listStyleType: 'none',
              fontSize: '2rem',
            }}
          >
            <li>Object name: {props.elem.title}</li>
            <li>Object type: {props.elem.objectName}</li>
            <li>Artist name: {props.elem.artistDisplayName}</li>
            <li>Artist nationality: {props.elem.artistNationality}</li>
            <li>
              Artist years of life: {props.elem.artistBeginDate}-{props.elem.artistEndDate}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Modal;
