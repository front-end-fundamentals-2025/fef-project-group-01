const cartContainer = document.getElementById("cart-container");
let cart = JSON.parse(localStorage.getItem("cart")) || [];

if (cart.length === 0) {
  cartContainer.innerHTML = "<p>Your bag is empty</p>";
} else {
  cart.forEach((item, index) => {
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
}

//remove items from cart
function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}
