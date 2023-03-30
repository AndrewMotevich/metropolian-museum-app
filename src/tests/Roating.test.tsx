import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

describe('Routing', () => {
  it('test router routes', async () => {
    render(<App />);
    const user = userEvent.setup();
    //check form page routing
    await user.click(screen.getByText(/forms/i));
    expect(screen.getByText(/page: forms/i)).toBeInTheDocument();
    //check main page routing
    await user.click(screen.getByText(/main/i));
    expect(screen.getByText(/page: main/i)).toBeInTheDocument();
    //check about page routing
    await user.click(screen.getByText(/about/i));
    expect(screen.getByText(/page: about/i)).toBeInTheDocument();
  });
});
