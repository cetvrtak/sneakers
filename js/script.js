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
