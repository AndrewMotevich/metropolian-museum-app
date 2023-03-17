import React from 'react';
import { render, screen } from '@testing-library/react';
import MyInput from '../components/UI/input/MyInput';
import MyInputWithHooks from '../components/UI/input/MyInput-useHooks';

describe('MyInputs', () => {
  it('render MyInput component', () => {
    render(<MyInput query-name="search" />);
    screen.debug();
  });

  it('render MyInputHook component', () => {
    render(<MyInputWithHooks query-name="search" />);
    screen.debug();
  });
});
