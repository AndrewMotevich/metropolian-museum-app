import React, { Component, ChangeEvent } from 'react';
import classes from './MyInput.module.css';
type params = {
  [key: string]: string;
  'query-name': string;
};
type state = {
  [key: string]: string;
};

class MyInput extends Component<params> {
  params: params;
  state: state;
  constructor(params: params) {
    super(params);
    this.params = params;
    this.state = { value: '' };
  }

  componentDidMount() {
    const savedValue = localStorage.getItem(`${this.params['query-name']}`) || '';
    this.setState({ value: savedValue });
    console.log(`mount to ${this.params['query-name']}:`, savedValue);
  }

  componentWillUnmount() {
    localStorage.setItem(`${this.params['query-name']}`, `${this.state.value}`);
    console.log(`unmount to ${this.params['query-name']}:`, this.state.value);
  }

  onChange(e: ChangeEvent) {
    const newValue = (e.target as HTMLInputElement).value;
    this.setState({ value: newValue });
  }

  render() {
    return (
      <input
        {...this.params}
        onChange={(e: ChangeEvent) => this.onChange(e)}
        value={this.state.value}
        className={classes.myInput}
      />
    );
  }
}

export default MyInput;
