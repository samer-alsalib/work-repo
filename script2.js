window.onload = function () {
    let cartItemsUlCheckout = document.querySelector("#cart-items-ul");


    cartItemsUlCheckout.innerHTML = sessionStorage.getItem("ulItems");
};