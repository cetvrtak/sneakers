function displayProductDetails() {
  const name = `Article: ${localStorage.getItem("name")}`;
  const price = `Price: ${localStorage.getItem("price")}`;
  const quantity = `Quantity: ${localStorage.getItem("quantity")}`;
  document.querySelector(".name").textContent = name;
  document.querySelector(".price").textContent = price;
  document.querySelector(".quantity").textContent = quantity;
}
displayProductDetails();
