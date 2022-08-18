import React from 'react';
import { render, screen } from '@testing-library/react';
import AlbumCard from './AlbumCard';

test('renders Album songs', () => {
    const defaultProps = {
        item: {
            artistViewUrl: ':url',
            artworkUrl100: ':artWork',
            artistName: ':name',
            primaryGenreName: ':genre',
            trackId: 0,
            previewUrl: ''
        },
        selectedSong: '',
        setSelectedSong: jest.fn()
    }
  render(<AlbumCard {...defaultProps}/>);
  const el = screen.getByTestId('AlbumCard');
  expect(el).toBeInTheDocument();
});
