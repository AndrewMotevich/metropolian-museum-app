import React, { Component } from 'react';
import MyFormCards from './cards/MyFormCards';
import MyInputCountry from './input-country/MyInputCountry';
import MyInputDate from './input-date/MyInputDate';
import MyInputCheckbox from './input-checkbox/MyInputCheckbox';
import MyInputText from './input-text/MyInputText';
import classes from './MyForm.module.css';
import MyInputRadio from './input-radio/MyInputRadio';
import { MyInputFile } from './input-file/MyInputFile';
import { props, state } from './MyFormTypes';

export default class MyForm extends Component {
  private inputTitle: React.RefObject<HTMLInputElement>;
  private inputBthDate: React.RefObject<HTMLInputElement>;
  private inputCountry: React.RefObject<HTMLSelectElement>;
  private inputCheck: React.RefObject<HTMLInputElement>;
  private inputSwitcher: React.RefObject<HTMLInputElement>;
  private inputPhoto: React.RefObject<HTMLInputElement>;
  public state: state;

  constructor(props: props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.inputTitle = React.createRef();
    this.inputBthDate = React.createRef();
    this.inputCountry = React.createRef();
    this.inputCheck = React.createRef();
    this.inputSwitcher = React.createRef();
    this.inputPhoto = React.createRef();
    this.state = {
      cardsArray: [
        {
          title: 'Andrew',
          bthDate: '1995-10-03',
          country: 'Belarus',
          allow: true,
          sex: 'male',
          img: 'data:image/png;base64,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',
        },
        {
          title: 'Anton',
          bthDate: '1996-01-30',
          country: 'Belarus',
          allow: false,
          sex: 'male',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfycDzL-0Ir5rK6pTfrDX9ZlRopk19AllZc9YBwJ7kvkBlr_FHKwcDBO77ZB1-hZFU6n8&usqp=CAU',
        },
      ],
    };
  }

  handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    this.setState({
      cardsArray: [
        ...this.state.cardsArray,
        {
          title: (this.inputTitle.current as HTMLInputElement).value,
          bthDate: (this.inputBthDate.current as HTMLInputElement).value,
          country: (this.inputCountry.current as HTMLSelectElement).value,
          allow: (this.inputCheck.current as HTMLInputElement).checked,
          img: (this.inputPhoto.current as HTMLInputElement).value,
          sex: (this.inputSwitcher.current as HTMLInputElement).value,
        },
      ],
    });
  }

  render() {
    return (
      <div className={classes.myFormPage}>
        <form className={classes.myForm} onSubmit={this.handleSubmit}>
          <h2>Contacts Form</h2>
          <MyInputText reference={this.inputTitle} />
          <MyInputDate reference={this.inputBthDate} />
          <MyInputCountry reference={this.inputCountry} />
          <MyInputCheckbox reference={this.inputCheck} />
          <MyInputRadio reference={this.inputSwitcher} />
          <MyInputFile reference={this.inputPhoto} />
          <input type="submit" value="Submit" />
        </form>
        <MyFormCards cardsArray={this.state.cardsArray} />
      </div>
    );
  }
}
