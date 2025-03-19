document.querySelector(".js-popup").addEventListener("click", () => {
  const popup = document.querySelector(".js-popup-container");

  if (popup.style.display === "block") {
    popup.style.display = "none";
  } else {
    popup.style.display = "block";
  }

  document
    .querySelector(".js-share-icon")
    .classList.toggle("change-share-icon");

  document
    .querySelector(".js-share-button")
    .classList.toggle("change-share-button");

  document.querySelector(".js-text").classList.toggle("shorter-container");
});

