import axios from "axios";
export function fetchAPI(searchTerm: String, limit: number, offset: number) {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `https://itunes.apple.com/search?term=${searchTerm}&limit=${limit}&offset=${offset}`
      )
      .then((resp) => {
        resolve(resp.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
