import './styles.css';

import modalImage from './js/modalImg';
import refs from './js/refs';
import fetchPhoto from './js/apiService';
import updateGalleryMarkup from './js/update-galler-markup';

let pageNumber = 1;

console.log(refs.searchForm);
console.log(refs.galleryList);

refs.searchForm.addEventListener('submit', onSubmitForm);
refs.galleryList.addEventListener('click', modalImage);

function getPhoto(queryString, pageNumber) {
  console.log('qqq');
  fetchPhoto(queryString, pageNumber, getStatusRadioButton())
    .then(hits => {
      //console.log(hits);
      updateGalleryMarkup(hits);
    })
    .catch(err => console.log(err));
}

function onSubmitForm(event) {
  event.preventDefault();
  const queryString = event.target.elements[0].value;
  if (queryString === '') {
    return;
  }

  refs.galleryList.innerHTML = '';
  getPhoto(queryString, pageNumber);

  const orientation = getStatusRadioButton();
  localStorage.setItem(
    'lastQuery',
    JSON.stringify({ queryString, orientation }),
  );
}

function getStatusRadioButton() {
  for (let el of refs.rButton) {
    if (el.checked) {
      return el.value;
    }
  }
}

function setStatusRadioButton(nameCheked) {
  for (let el of refs.rButton) {
    if (nameCheked === el.value) {
      el.checked = true;
      return;
    }
  }
}

const lastQuery = localStorage.getItem('lastQuery');
if (lastQuery) {
  const { queryString, orientation } = JSON.parse(lastQuery);
  setStatusRadioButton(orientation);
  refs.searchForm.elements[0].value = queryString;
  getPhoto(queryString, pageNumber);
}
