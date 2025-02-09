const bagButtonElement = document.getElementById("bag-button");
const itemName = document.getElementById("item-name").textContent;
const itemPrice = document.getElementById("item-price").textContent;

bagButtonElement.addEventListener("click", function () {
  let item = {
    name: itemName,
    price: itemPrice,
    quantity: 1,
  };

  localStorage.item = JSON.stringify(item);
  console.log("added to bag");
});
