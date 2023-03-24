import React, { Component } from 'react';
type props = { [key: string]: string };
type state = { cardsArray: { title: string; bthDate: string; country: string }[] };

export default class MyForm extends Component {
  private inputTitle: React.RefObject<HTMLInputElement>;
  private inputBthDate: React.RefObject<HTMLInputElement>;
  private inputCountry: React.RefObject<HTMLSelectElement>;
  public state: state;
  constructor(props: props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.inputTitle = React.createRef();
    this.inputBthDate = React.createRef();
    this.inputCountry = React.createRef();
    this.state = {
      cardsArray: [
        { title: 'Andrew', bthDate: '1995-10-03', country: 'Belarus' },
        { title: 'Anton', bthDate: '1996-01-30', country: 'Belarus' },
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
        },
      ],
    });
  }

  render() {
    return (
      <div>
        <h2>Contacts</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" ref={this.inputTitle} />
          </label>
          <label>
            Birthday:
            <input type="date" ref={this.inputBthDate} />
          </label>
          <label>
            Country:
            <select ref={this.inputCountry}>
              <option>Belarus</option>
              <option>Russia</option>
              <option>Poland</option>
              <option>German</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
          <div>
            {this.state.cardsArray.map((elem, index) => {
              return (
                <div key={index}>
                  {elem.title} {elem.bthDate.split('-').reverse().join('-')} {elem.country}
                </div>
              );
            })}
          </div>
        </form>
      </div>
    );
  }
}
