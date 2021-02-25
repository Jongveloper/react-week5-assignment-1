import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

beforeEach(() => {
  jest.clearAllMocks();

  useSelector.mockImplementation((selector) => selector({
    currentRegion: '',
    currentCategory: '',
  }));
});

describe('App', () => {
  it('renders restaurant region buttons', () => {
    const { getByText } = render(<App />);

    expect(getByText('서울')).not.toBeNull();
  });

  it('renders restaurant category buttons', () => {
    const { getByText } = render(<App />);

    expect(getByText('한식')).not.toBeNull();
  });
});
