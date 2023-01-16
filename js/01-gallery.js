import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector(".gallery")
const galleryMarkup = createGalleryMarkup()

function createGalleryMarkup() {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a></div>
        `
    }).join("")
}

galleryRef.innerHTML = galleryMarkup

galleryRef.addEventListener("click", onImageClick)

function onImageClick(e) {
    e.preventDefault()

    if (e.target.nodeName !== "IMG") {
        return
    }

    const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
    `)

    instance.show()

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            instance.close()
        }
    }, {once:true});
}
