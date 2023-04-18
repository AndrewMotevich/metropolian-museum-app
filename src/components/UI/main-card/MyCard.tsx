import React from 'react';
import classes from './MyCard.module.css';
import Loading from '../loading/Loading';
import { useGetPaintingQuery } from '../../../api/RTKpaintingService';
import { useDispatch } from 'react-redux';
import { addModalObject } from '../../../redux/searchReducer';

type props = {
  key: number;
  elem: number;
  modal: (visible: boolean) => void;
};

const MyCard = (props: props) => {
  const dispatch = useDispatch();
  const { data, error, isLoading } = useGetPaintingQuery(props.elem);

  return (
    <div
      className={classes.myCard}
      onClick={() => {
        props.modal(true);
        if (!isLoading && data !== undefined) {
          dispatch(addModalObject(data));
        }
      }}
    >
      {isLoading ? (
        <Loading />
      ) : error ? (
        <div>Error to fetch data</div>
      ) : (
        <div
          style={{
            background: 'white',
            backgroundImage: `url(${
              data?.primaryImageSmall
                ? data?.primaryImageSmall
                : '../../../../public/assets/img/no-image-icon.png'
            })`,
          }}
          className={classes.myCardImage}
        >
          <div className={classes.myCardTitle}>{data?.title}</div>
        </div>
      )}
    </div>
  );
};

export default MyCard;
