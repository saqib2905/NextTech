import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import {Home} from './Home';

export const renderWithRedux = (ui: any, initialState={}, fakeStore={}) => {
    const store = {
        loading: true,
        albums: [],
        offset: 0,
        hasMore: false,
        // couldn't install redux-mock-store hence mocking store below
        getState: jest.fn(),
        dispatch: jest.fn(),
        subscribe: jest.fn(),
        unsubscribe: jest.fn()

    };
    return {
        ...render(
            <Provider store={store}>
                {ui}
            </Provider>
        )
    }
}

test('renders home component', () => {
    const defaultProps = {
        albums: [{
            artistViewUrl: ':url',
            artworkUrl100: ':artWork',
            artistName: ':name',
            primaryGenreName: ':genre'
        }],
        loading: true,
        offset: 0,
        hasMore: false,
        fetchAlbums: jest.fn()
    }
    renderWithRedux(
        <Home {...defaultProps}/>,
        {}
    )

  const el = screen.getByTestId('AlbumCard');
  expect(el).toBeInTheDocument();
});
