import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector(".gallery")
const galleryMarkup = createGalleryMarkup()

function createGalleryMarkup() {
    return galleryItems.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    }).join("")
}

galleryRef.insertAdjacentHTML("afterbegin", galleryMarkup)

// galleryRef.addEventListener("click", onImageClick)

// function onImageClick(e) {
//     e.preventDefault()

//     if (e.target.nodeName !== "IMG") {
//         return
//     }

//     const instance = basicLightbox.create(`
//     <img src="${e.target.dataset.source}" width="800" height="600">
//     `)

//     instance.show()

//     document.addEventListener("keydown", event => {
//         if (event.key === "Escape") {
//             instance.close()
//         }
//     });
// }