"use strict";

const mainImageEl = document.querySelector(".item-img--main");
const modalEl = document.querySelector(".modal");
const btnCloseModal = document.querySelector(".close-modal");
const overlayEl = document.querySelector(".overlay");

function openModal() {
  if (window.innerWidth <= 425) return;

  modalEl.classList.remove("hidden");
  overlayEl.classList.remove("hidden");
}
mainImageEl.addEventListener("click", openModal);

function closeModal() {
  modalEl.classList.add("hidden");
  overlayEl.classList.add("hidden");
}

btnCloseModal.addEventListener("click", closeModal);
overlayEl.addEventListener("click", closeModal);

// AMOUNT CHANGING
var amount = 0;
const amountDecreaseEl = document.querySelector(".amount-decrease");
const amountIncreaseEl = document.querySelector(".amount-increase");
const amountEl = document.querySelector(".amount");

amountDecreaseEl.addEventListener("click", () => {
  if (amount != 0) amount--;
  amountEl.textContent = amount;
});
amountIncreaseEl.addEventListener("click", () => {
  amount++;
  amountEl.textContent = amount;
});

// IMAGE DISPLAY
const modalImgMainEl = document.querySelector(".modal .item-img--main");

for (let i = 1; i <= 4; i++) {
  const imgEl = document.querySelector(`.img-${i}`);
  imgEl.addEventListener("click", () => {
    document.querySelector(".item-img--main").src = imgEl.src;
  });
  // MODAL
  const modalImgEl = document.querySelector(`.modal-img-${i}`);
  modalImgEl.addEventListener("click", () => {
    modalImgMainEl.src = modalImgEl.src;
    currentImgIndex = i;
  });
}

var currentImgIndex = 1;
document.querySelector(".chevron-back-circle").addEventListener("click", () => {
  currentImgIndex = currentImgIndex == 1 ? 4 : currentImgIndex - 1;
  displayImg(currentImgIndex);
});
document
  .querySelector(".chevron-forward-circle")
  .addEventListener("click", () => {
    currentImgIndex = currentImgIndex == 4 ? 1 : currentImgIndex + 1;
    displayImg(currentImgIndex);
  });

function displayImg(img) {
  modalImgMainEl.src = `img/sneakers-${img}.png`;
}
