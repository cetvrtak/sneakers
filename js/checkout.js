"use strict";

function displayProductDetails() {
  // const name = `Article: ${localStorage.getItem("name")}`;
  // const price = localStorage.getItem("price");
  // const quantity = localStorage.getItem("quantity");
  // console.log(price, quantity);
  // document.querySelector(".name").textContent = name;
  // document.querySelector(".price").textContent = `Price: ${price}`;
  // document.querySelector(".quantity").textContent = `Quantity: ${quantity}`;
  // document.querySelector(".total").textContent = `Total: $${quantity * price}`;

  const cartArr = localStorage.getItem("cart").split(",");
  for (let i = 0; i < cartArr.length; i += 4) {
    const article = cartArr[i];
    const price = cartArr[i + 1];
    const quantity = cartArr[i + 2];
    const total = cartArr[i + 3];

    document.querySelector(".cart .container").insertAdjacentHTML(
      "beforeend",
      `
        <div class=product-details>${article}</div>
        <div class=product-details>$${Number(price).toFixed(2)}</div>
        <div class=product-details>${quantity}</div>
        <div class=product-details>$${Number(total).toFixed(2)}</div>
        `
    );
  }
}
displayProductDetails();
