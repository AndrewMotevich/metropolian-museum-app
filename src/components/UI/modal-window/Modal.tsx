import React, { ReactNode } from 'react';
import classes from './Modal.module.css';
type props = {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  children: ReactNode;
};

const Modal = (props: props) => {
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
        }}
      >
        <div
          className={classes.modalWindowCross}
          onClick={() => {
            props.setVisible(false);
          }}
        ></div>
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
