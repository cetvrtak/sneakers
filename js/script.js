"use strict";

const mainImageEl = document.querySelector(".item-img--main");
const modalEl = document.querySelector(".modal");
const btnCloseModal = document.querySelector(".close-modal");
const overlayEl = document.querySelector(".overlay");

function openModal() {
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
for (let i = 1; i <= 4; i++) {
  const imgEl = document.querySelector(`.img-${i}`);
  imgEl.addEventListener("click", () => {
    document.querySelector(".item-img--main").src = imgEl.src;
  });
}
