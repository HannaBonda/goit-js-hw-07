
import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

  const createGalery = galleryItems.map(({preview, original, description}) => `<li class = "gallery__item">
  <a class = "gallery__link" href = "${original}">
  <img class = "gallery__image" src = "${preview}" alt = "${description}"/>
  </a> 
  </li>`).join('');

 galleryContainer.insertAdjacentHTML('beforeend', createGalery);

 var lightbox = new SimpleLightbox('.gallery a', {

    captionDelay: 250,
    captionsData: "alt",
});

 console.log(galleryItems);

