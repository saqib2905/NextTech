import React from 'react';
import * as redux from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';
import {SearchForm}  from './SearchForm';

test('tests submit button and albums fetched from api', () => {
  const mockDispatch = jest.fn(() => new Promise((res, rej)=> res(true)))
  jest.spyOn(redux, 'useDispatch').mockReturnValue(mockDispatch as any);
    const defaultProps = {
        fetchAlbums: jest.fn(),
        onSubmit: jest.fn()
    }
  render(<SearchForm {...defaultProps}/>);
  const el = screen.getByTestId('searchForm');
  expect(el).toBeInTheDocument();

  const searchBtn = screen.getByTestId('searchBtn');

  fireEvent.click(searchBtn);
  
  expect(defaultProps.onSubmit).toHaveBeenCalled();
  expect(defaultProps.fetchAlbums).toHaveBeenCalled();
});
