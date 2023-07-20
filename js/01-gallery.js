import { galleryItems } from './gallery-items.js';
// Change code below this line


function renderGallery() {
    const galleryList = document.querySelector('.gallery');
    const galleryItemsMarkup = galleryItems.map(item => `
     <li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img
          class="gallery__image"
          src="${item.preview}"
          data-source="${item.original}"
          alt="${item.description}"
        />
      </a>
    </li>
    `).join('');
    galleryList.innerHTML = galleryItemsMarkup;
}

document.addEventListener('DOMContentLoaded', renderGallery);  

function openLightbox(event) {
    event.preventDefault();
    if (event.target.classList.contains('gallery__image')) {
        const imageURL = event.target.dataset.source;
        const instance = basicLightbox.create(`<img src="${imageURL}" alt="Image"/>`);
        instance.show();  
    }
}

const galleryList = document.querySelector('.gallery');
galleryList.addEventListener('click', openLightbox);

console.log(galleryItems);
