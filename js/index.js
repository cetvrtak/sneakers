"use strict";
const CURRENT_PRICE = 125;

const mainImageEl = document.querySelector(".item-img--main");
const modalEl = document.querySelector(".modal");
const btnCloseModal = document.querySelector(".close-modal");
const overlayEl = document.querySelector(".overlay");
const addToCartEl = document.querySelector(".add-to-cart");

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
  updateAmount();
});
amountIncreaseEl.addEventListener("click", () => {
  amount++;
  updateAmount();
});

// ADD TO CART
let cart = localStorage.getItem("cart")
  ? localStorage.getItem("cart").split(",")
  : [];

addToCartEl.addEventListener("click", () => {
  if (amount == 0) {
    addToCartEl.href = "index.html";
    alert("Select a valid quantity");
    return;
  }

  // STORE DATA
  cart.push(
    document.querySelector(".heading-primary").textContent,
    CURRENT_PRICE,
    amount,
    CURRENT_PRICE * amount
  );
  localStorage.setItem("cart", cart);
});

// IMAGE DISPLAY
const modalImgMainEl = document.querySelector(".modal .item-img--main");
const imgMainEl = document.querySelector(".item-img--main");

for (let i = 1; i <= 4; i++) {
  const imgEl = document.querySelector(`.img-${i}`);
  imgEl.addEventListener("click", () => {
    imgMainEl.src = imgEl.src;
  });
  // MODAL
  const modalImgEl = document.querySelector(`.modal-img-${i}`);
  modalImgEl.addEventListener("click", () => {
    modalImgMainEl.src = modalImgEl.src;
    currentImgIndex = i;
  });
}

var currentImgIndex = 1;
document
  .querySelector(".chevron-back-circle")
  .addEventListener("click", showPreviousImg);
document
  .querySelector(".chevron-forward-circle")
  .addEventListener("click", showNextImg);

const prev = document.querySelector(".main-chevron--back");
const next = document.querySelector(".main-chevron--forward");
prev.addEventListener("click", showPreviousImg);
next.addEventListener("click", showNextImg);

function displayImg(img) {
  modalImgMainEl.src = imgMainEl.src = `img/sneakers-${img}.png`;
}

function showPreviousImg() {
  currentImgIndex = currentImgIndex == 1 ? 4 : currentImgIndex - 1;
  displayImg(currentImgIndex);
}

function showNextImg() {
  currentImgIndex = currentImgIndex == 4 ? 1 : currentImgIndex + 1;
  displayImg(currentImgIndex);
}

function updateAmount() {
  amountEl.textContent = amount;
  document.querySelector(".tooltip").textContent = `$${(
    CURRENT_PRICE * amount
  ).toFixed(2)}`;
}
