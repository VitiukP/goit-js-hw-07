import { galleryItems } from './gallery-items.js';

// Function to render the gallery items
function renderGallery() {
    const galleryList = document.querySelector('.gallery');
    const galleryItemsMarkup = galleryItems.map(item => `
     <li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img
          class="gallery__image"
          src="${item.preview}"
          alt="${item.description}"
        />
      </a>
    </li>
    `).join('');
    galleryList.innerHTML = galleryItemsMarkup;
}

document.addEventListener('DOMContentLoaded', () => {
    renderGallery();
    const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
    });
})