window.onload = function () {
    let cartItemsUlCheckout = document.querySelector("#cart-items-ul");
    cartItemsUlCheckout.style.border = "5px solid black";

    cartItemsUlCheckout.innerHTML = sessionStorage.getItem("ulItems");
};
