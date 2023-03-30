import React from 'react';
import { render, screen } from '@testing-library/react';
import MyForm from '../components/MyForm/MyForm';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
const img = new File(['img'], 'https://cdn-icons-png.flaticon.com/512/1088/1088537.png', {
  type: 'image/png',
});

describe('Form', () => {
  it('render Form and add card', async () => {
    render(<MyForm />);
    //add name
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    await userEvent.type(screen.getByRole('textbox'), 'Sofia');
    expect(screen.getByRole('textbox')).toHaveValue('Sofia');
    //add date
    expect(screen.getByLabelText(/birthday:/i)).toBeInTheDocument();
    (screen.getByLabelText(/birthday:/i) as HTMLInputElement).value = '2001-01-01';
    expect(screen.getByLabelText(/birthday:/i) as HTMLInputElement).toHaveValue('2001-01-01');
    //check radio
    (screen.getByLabelText('male') as HTMLInputElement).checked;
    //add img
    expect(screen.getByLabelText('+')).toBeInTheDocument();
    await userEvent.upload(screen.getByLabelText('+'), img);
  });
});
