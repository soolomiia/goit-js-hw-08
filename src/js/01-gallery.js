// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const divRef = document.querySelector(".gallery");
const addGallary = galleryCreate(galleryItems);
divRef.addEventListener("click", imageClick);
divRef.insertAdjacentHTML("beforeend", addGallary);

function galleryCreate(items) {
  return items
    .map(
      ({ preview, original, description,
      }) => `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>`
    )
    .join("");
}
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionsDelay: 250,
});
function imageClick(event) {
  event.preventDefault();
  
  if (event.target.nodeName !== "IMG") {
    return;
  }

}
lightbox.open();
