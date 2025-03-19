document.querySelector(".js-popup").addEventListener('click', () => {
  document.querySelector(".js-share-popup").classList.toggle("show");

  document
    .querySelector(".js-share-icon")
    .classList.toggle("change-share-icon");

  document
    .querySelector(".js-share-button")
    .classList.toggle("change-share-button");

  document.querySelector(".js-text").classList.toggle("shorter-container");
})

