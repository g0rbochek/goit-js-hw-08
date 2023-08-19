// Add imports above this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

const ulItems = document.querySelector('.gallery');
console.log(ulItems);

ulItems.insertAdjacentHTML('beforeend', creatMarkup(galleryItems));

function creatMarkup(obj) {
  return obj
    .map(
      ({ description, original, preview }) => `
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
    </li>`
    )
    .join('');
}

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
