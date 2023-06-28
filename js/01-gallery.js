
import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

const imageEl = createImageEl(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', imageEl);

function createImageEl(item) {
    
    return item.map(({preview, original, description}) => {
        return `<li class = "gallery__item">
        <a class = "gallery__link" href = "${original}">
        <img class = "gallery__image" src = "${preview}" data-source = "${original}" alt = "${description}"/>
        </a> 
        </li>`
    }).join('');
};

galleryContainer.addEventListener('click', onClickImg);

function onClickImg(event) {
    event.preventDefault();
if (event.target.classList.contains('gallery')) {
    return;
    };
    const instance = basicLightbox.create(`<img src = "${event.target.dataset.source}" width = "900" height = "700">`);

    instance.show();
    console.log(event.target);
};



