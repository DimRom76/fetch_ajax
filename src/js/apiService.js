import axios from 'axios';
const KEY_API = '19471965-37c13a0c7cc27691c95ac1581';
const NumberOfPhotos = 12;

const headers = { Authorization: `Bearer ${KEY_API}` };

async function fetchPhoto(queryString, numberPage, orientation) {
  const str = encodeURIComponent(queryString);
  let url = `https://pixabay.com/api/?key=${KEY_API}&q=${str}&image_type=photo&page=${numberPage}&per_page=${NumberOfPhotos}&orientation=${orientation}`;

  const response = await axios.get(url);
  return response.data.hits;

  // const resp = await fetch(url);
  // const data = await resp.json(); // resp.json() - возвращает промис поэтому нужен авайт
  // return data.hits;

  // return fetch(url)
  //   .then(res => res.json())
  //   .then(data => data.hits)
  //   .catch(err => console.log(err));
}

export default fetchPhoto;
