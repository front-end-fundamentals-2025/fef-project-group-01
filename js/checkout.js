const orderButton = document.querySelector(".order-button");
const headerElement = document.getElementById("checkout-header");
const formElement = document.getElementById("checkout-form");

orderButton.addEventListener("click", function (event) {
  headerElement.innerText = "Thank You for Your Order!";
  formElement.style.display = "none";
});
