import React from 'react';
import { render, screen } from '@testing-library/react';
import MyInputWithHooks from '../components/UI/input-search/MyInput-useHooks';

describe('MySearchInputs', () => {
  it('render MyInputHook component', () => {
    render(
      <MyInputWithHooks
        query-name="search"
        placeholder="Search2"
        type={''}
        handler={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
    expect(screen.getByPlaceholderText(/Search2/i)).toBeDefined();
  });
});
