const orderButton = document.querySelector(".order-button");
const headerElement = document.getElementById("checkout-header");
const formElement = document.getElementById("checkout-form");
const footerElement = document.getElementById("checkout-footer");

orderButton.addEventListener("click", function (event) {
  headerElement.innerText = "Thank You for Your Order!";
  formElement.style.display = "none";
  footerElement.style.marginTop = "600px";
  footerElement.style.borderTop = "2px solid black";
});
