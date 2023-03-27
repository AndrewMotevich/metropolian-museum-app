import React from 'react';
import { render, screen } from '@testing-library/react';
import MyInput from '../components/UI/input-search/MyInput';
import MyInputWithHooks from '../components/UI/input-search/MyInput-useHooks';

describe('MyInputs', () => {
  it('render MyInput component', () => {
    render(<MyInput query-name="search" placeholder="Search" />);
    expect(screen.getByPlaceholderText(/Search/i)).toBeDefined();
  });

  it('render MyInputHook component', () => {
    render(<MyInputWithHooks query-name="search" placeholder="Search2" />);
    expect(screen.getByPlaceholderText(/Search2/i)).toBeDefined();
  });
});
