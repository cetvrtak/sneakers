"use strict";

function displayProductDetails() {
  const name = `Article: ${localStorage.getItem("name")}`;
  const price = localStorage.getItem("price");
  const quantity = localStorage.getItem("quantity");
  console.log(price, quantity);
  document.querySelector(".name").textContent = name;
  document.querySelector(".price").textContent = `Price: ${price}`;
  document.querySelector(".quantity").textContent = `Quantity: ${quantity}`;
  document.querySelector(".total").textContent = `Total: $${quantity * price}`;
}
displayProductDetails();
