import {
  ALBUMS_LOADING,
  ALBUMS_LOAD_DATA,
  ALBUMS_SET_OFFSET,
  CLEAR_ALBUMS_DATA,
} from "./types";
import { fetchAPI } from "./services";

export function albumsSetLoading(loading: boolean) {
  return {
    type: ALBUMS_LOADING,
    payload: loading,
  };
}
export function albumsLoadData(user: any) {
  return {
    type: ALBUMS_LOAD_DATA,
    payload: user,
  };
}
export function clearAlbumsData() {
  return {
    type: CLEAR_ALBUMS_DATA,
  };
}
export function albumsSetOffset(offset: any) {
  return {
    type: ALBUMS_SET_OFFSET,
    payload: offset,
  };
}
export const fetchAlbums =
  (searchTerm: String, limit: number, offset: number) =>
  (dispatch: any, getState: any) => {
    return new Promise((resolve, reject) => {
      dispatch(albumsSetLoading(true));
      fetchAPI(searchTerm, limit, offset)
        .then((resp: any) => {
          if (resp?.resultCount) {
            dispatch(albumsLoadData(resp?.results));
            dispatch(albumsSetOffset(offset));
            resolve(resp?.results);
          } else {
            dispatch(albumsLoadData([]));
            resolve([]);
          }
        })
        .catch((err: any) => {
          reject(err);
        })
        .finally(() => {
          dispatch(albumsSetLoading(false));
        });
    });
  };
