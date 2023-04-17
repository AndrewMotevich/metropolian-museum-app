import React, { useRef } from 'react';
import MyFormCards from './cards/MyFormCards';
import MyInputCountry from './input-country/MyInputCountry';
import MyInputDate from './input-date/MyInputDate';
import MyInputCheckbox from './input-checkbox/MyInputCheckbox';
import MyInputText from './input-text/MyInputText';
import classes from './MyForm.module.css';
import MyInputRadio from './input-radio/MyInputRadio';
import MyInputFile from './input-file/MyInputFile';
import { FieldValues, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { addCard } from '../../redux/reducer';

const MyForm = () => {
  const image = useRef() as React.RefObject<HTMLImageElement>;
  const { register, reset, handleSubmit } = useForm();
  const cardsArray = useSelector((state: RootState) => state.form);
  const dispatch = useDispatch();

  const onSubmit = (data: FieldValues) => {
    const newCard = {
      title: data.title,
      bthDate: data.btnDate,
      country: data.country,
      allow: data.allow,
      sex: data.sex,
      img: '',
    };
    const file = data.img.item(0);
    if (!file) return;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      newCard.img = reader.result as string;
      dispatch(addCard(newCard));
      //clear form
      (image.current as HTMLImageElement).src = '';
      (image.current as HTMLImageElement).classList.value = 'hide';
      reset({ title: '', btnDate: '', country: '', allow: '', sex: '', img: '' });
    };
  };

  const title = register('title', { required: true });
  const btnDate = register('btnDate', { required: true });
  const country = register('country');
  const allow = register('allow');
  const sex = register('sex', { required: true });
  const img = register('img', { required: true });

  return (
    <div className={classes.myFormPage}>
      <form className={classes.myForm} onSubmit={handleSubmit(onSubmit)}>
        <h2>Contacts Form</h2>
        <MyInputText inputRef={title.ref} name={title.name} onChange={title.onChange} />
        <MyInputDate inputRef={btnDate.ref} name={btnDate.name} onChange={btnDate.onChange} />
        <MyInputCountry inputRef={country.ref} name={country.name} onChange={country.onChange} />
        <MyInputCheckbox inputRef={allow.ref} name={allow.name} onChange={allow.onChange} />
        <MyInputRadio inputRef={sex.ref} name={sex.name} onChange={sex.onChange} />
        <MyInputFile inputRef={img.ref} name={img.name} onChange={img.onChange} reference={image} />
        <input type="submit" value="Submit" />
      </form>
      <MyFormCards cardsArray={cardsArray} />
    </div>
  );
};

export default MyForm;
