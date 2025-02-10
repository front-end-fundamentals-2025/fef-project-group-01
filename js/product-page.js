const cartButtonElement = document.querySelector(".add-to-cart");

cartButtonElement.addEventListener("click", function () {
  //store item details as an object
  let item = {
    name: document.querySelector(".item-name").innerText,
    price: document.querySelector(".item-price").innerText,
    image: "images/black-top.jpg",
  };

  //retrieve items from localStorage and add new item
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(item);

  localStorage.setItem("cart", JSON.stringify(cart)); //update localStorage
  alert("Item was added to cart!"); //alert that product has successfully been added
});
