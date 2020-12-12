import cardImageTpl from '../templates/cardImage.hbs';
import refs from './refs';

function updateGalleryMarkup(hits) {
  const markup = cardImageTpl(hits);
  refs.galleryList.insertAdjacentHTML('beforeend', markup);
}

export default updateGalleryMarkup;
