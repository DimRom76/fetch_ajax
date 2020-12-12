import 'basiclightbox/dist/basicLightbox.min.css';
import * as basicLightbox from 'basiclightbox';

function onClickCard(event) {
  const bigImg = event.target.dataset.big_img;
  const instance = basicLightbox.create(`
        <img src="${bigImg}" />
      `);
  instance.show();
}

export default onClickCard;
