//import axios from 'axios';
const KEY_API = '19471965-37c13a0c7cc27691c95ac1581';
const NumberOfPhotos = 12;

// const BASE_URL = `https://pixabay.com`;
// axios.defaults.baseURL = BASE_URL
// axios.defaults.headers.common['Authorization'] = KEY_API;

function fetchPhoto(queryString, numberPage, orientation) {
  const str = encodeURIComponent(queryString);
  let url = `https://pixabay.com/api?key=${KEY_API}&q=${str}&image_type=photo&page=${numberPage}&per_page=${NumberOfPhotos}&orientation=${orientation}`;

  return fetch(url)
    .then(res => res.json())
    .then(data => data.hits)
    .catch(err => console.log(err));
}

export default fetchPhoto;
