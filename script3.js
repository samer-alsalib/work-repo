window.onload = function () {
    let itemAdd = document.querySelector(".item-add");
    let cartC = document.querySelector("#cart-c");
    let cartItemsUl = document.querySelector("#cart-items-ul");
    let cartTotalPrice = document.querySelector("#cart-total-price");
    let cartClear = document.querySelector("#cart-clear-b");
    let cartPurchase = document.querySelector("#cart-purchase-b");
    let cartShowHide = document.querySelector("#cart-show-hide");
    let showHideSpan = document.querySelector("#show-hide-span");
    let showHideCheck = document.querySelector("#show-hide-check");
    let totalPrice = 0;


    if (showHideCheck.checked) {
        showHideCheck.click();
    };

    cartItemsUl.innerHTML = sessionStorage.getItem("ulItems", cartItemsUl.innerHTML);
    showHideSpan.dataset.ulItemsNum = cartItemsUl.children.length;

    itemAdd.onclick = () => {
        let newLi = document.createElement("li");
        let newSpan1 = document.createElement("span");
        let newSpan2 = document.createElement("span");
        newSpan1.innerText = itemAdd.parentElement.parentElement.querySelector("#book-name-c").querySelector("#book-name").innerText;
        newSpan2.innerText = itemAdd.parentElement.parentElement.querySelector("#book-price-c").querySelector("#book-price").innerText;
        
        newLi.appendChild(newSpan1);
        newLi.appendChild(newSpan2);
        cartItemsUl.appendChild(newLi);

        totalPrice += +itemAdd.parentElement.parentElement.querySelector("#book-price-c").querySelector("#book-price").innerText;
        cartTotalPrice.innerText = Math.round((totalPrice + Number.EPSILON) * 100)/100;

        sessionStorage.setItem("ulItems", cartItemsUl.innerHTML);

        if (!showHideCheck.checked && cartItemsUl.children.length <= 1) {
            showHideCheck.click();
            showHideSpan.dataset.ulItemsNum = cartItemsUl.children.length;
        } else {
            showHideSpan.dataset.ulItemsNum = cartItemsUl.children.length;
        }
    };

    cartShowHide.onclick = () => {
        if (showHideCheck.checked) {
            cartC.classList.toggle("cart-showed", true);
        } else {
            cartC.classList.toggle("cart-showed", false);
        }
    };

    cartClear.onclick = () => {
        cartItemsUl.innerHTML = "";
        totalPrice = 0;
        cartTotalPrice.innerText = totalPrice;
        showHideSpan.dataset.ulItemsNum = 0;
        sessionStorage.clear();
    };

    cartPurchase.onclick = () => {
        window.location.href = "checkout.html";
    };
};
