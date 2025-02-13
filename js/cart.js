const cartContainer = document.getElementById("cart-container");
let cart = JSON.parse(localStorage.getItem("cart")) || [];

if (cart.length === 0) {
  cartContainer.innerHTML = `
  <p>Your bag is currently empty!</p>
  <button onclick="window.location.href='/all-product-women.html'">Shop Women</button>
   <button onclick="window.location.href='/all-product-men.html'">Shop Men</button>`;
} else {
  // code written with knowledge from lectures and with inspiration from youtube; https://www.youtube.com/watch?v=bCTd1eRX7Iw, https://www.youtube.com/watch?v=pRkHOD_nkH4

  https: cart.forEach((item, index) => {
    let itemHTML = `
        <figure>
        <img src="${item.image}" alt="${item.name}" />
        <figcaption>${item.name}</figcaption>
        <figcaption>${item.price}</figcaption>
        <button onclick="removeItem(${index})">Remove</button>
           </figure>
      `;
    cartContainer.innerHTML += itemHTML;
  });

  let checkoutButton = `<button id="checkout-button" onclick="window.location.href='checkout.html'">PROCEED TO CHECKOUT</button>`; //open a new page learned from https://www.w3schools.com/js/js_window_location.asp
  cartContainer.innerHTML += checkoutButton;
}

//remove items from cart
function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}
