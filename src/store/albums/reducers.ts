import {
  ALBUMS_LOADING,
  ALBUMS_LOAD_DATA,
  ALBUMS_SET_OFFSET,
  CLEAR_ALBUMS_DATA,
} from "./types";
import { AlbumsActionTypes } from "./types";
const initialState: {
  albums: null | [];
  loading: boolean;
  offset: number;
  hasMore: boolean;
} = {
  albums: null,
  loading: false,
  offset: 0,
  hasMore: true,
};

export function albumsReducer(state = initialState, action: AlbumsActionTypes) {
  switch (action.type) {
    case ALBUMS_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case ALBUMS_LOAD_DATA:
      return {
        ...state,
        albums: state.albums
          ? [...state.albums, ...action.payload]
          : [...action.payload],
        hasMore: action.payload.length > 0 ? true : false,
      };
    case CLEAR_ALBUMS_DATA:
      return {
        ...state,
        albums: [],
      };
    case ALBUMS_SET_OFFSET:
      return {
        ...state,
        offset: action.payload,
      };
    default:
      return state;
  }
}
