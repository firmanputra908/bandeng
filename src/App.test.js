// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// Mocking child components
jest.mock('./components/Feature', () => () => <div>Feature Component</div>);
jest.mock('./components/Footer', () => () => <div>Footer Component</div>);
jest.mock('./components/Home', () => () => <div>Home Component</div>);
jest.mock('./components/Navbar', () => () => <div>Navbar Component</div>);
jest.mock('./components/Products', () => () => <div>Products Component</div>);

describe('App component', () => {
  test('renders Navbar component', () => {
    render(<App />);
    expect(screen.getByText('Navbar Component')).toBeInTheDocument();
  });

  test('renders Home component', () => {
    render(<App />);
    expect(screen.getByText('Home Component')).toBeInTheDocument();
  });

  test('renders Feature component', () => {
    render(<App />);
    expect(screen.getByText('Feature Component')).toBeInTheDocument();
  });

  test('renders Products component', () => {
    render(<App />);
    expect(screen.getByText('Products Component')).toBeInTheDocument();
  });

  test('renders Footer component', () => {
    render(<App />);
    expect(screen.getByText('Footer Component')).toBeInTheDocument();
  });
});
