import React from 'react';
import { render, screen } from '@testing-library/react';
import MyForm from '../components/MyForm/MyForm';

describe('Form', () => {
  //check all inputs
  it('render Form component', () => {
    render(<MyForm />);
    expect(screen.getByLabelText(/name:/i)).toBeDefined();
    expect(screen.getByLabelText(/birthday:/i)).toBeDefined();
    expect(screen.getByLabelText(/country:/i)).toBeDefined();
    expect(screen.getByLabelText(/human check:/i)).toBeDefined();
  });
});
