window.onload = function () {
    let InputSearch = document.querySelector("#input-search");
    let catigories = document.querySelectorAll(".catigories");
    let itemsC = document.querySelectorAll(".items-c");
    let items = document.querySelectorAll(".items");
    let itemAdds = document.querySelectorAll(".item-add");
    let cartC = document.querySelector("#cart-c");
    let cartItemsUl = document.querySelector("#cart-items-ul");
    let cartItemsUlLis = document.querySelectorAll("#cart-items-ul li");
    let cartTotalPrice = document.querySelector("#cart-total-price");
    let cartClear = document.querySelector("#cart-clear-b");
    let cartPurchase = document.querySelector("#cart-purchase-b");
    let cartShowHide = document.querySelector("#cart-show-hide");
    let showHideSpan = document.querySelector("#show-hide-span");
    let showHideCheck = document.querySelector("#show-hide-check");
    let totalPrice = cartItemsUl.children.length;


    if (showHideCheck.checked) {
        showHideCheck.click();
    };

    itemsC.forEach((item) => {
        item.style.display = "none";
    });
    itemsC[0].style.display = "block";

    cartItemsUl.innerHTML = sessionStorage.getItem("ulItems", cartItemsUl.innerHTML);
    showHideSpan.dataset.ulItemsNum = cartItemsUl.children.length;

    catigories[0].classList.add("active-catigory");
    catigories.forEach((catigory) => {
    catigory.onclick = () => {
        catigories.forEach((catigory) => {
            catigory.classList.remove("active-catigory");
        });

            itemsC.forEach((item) => {
                item.style.display = "none";
            });

            itemsC[catigory.dataset.itemsCIndex].style.display = "block";

            catigory.classList.add("active-catigory");
        };
    });


    itemAdds.forEach((itemAdd) => {
        itemAdd.onclick = () => {
            let newLi = document.createElement("li");
            let newSpan1 = document.createElement("span");
            let newSpan2 = document.createElement("span");
            newSpan1.innerText = itemAdd.parentElement.parentElement.querySelector(".item-name-c").querySelector(".item-name").innerText;
            newSpan2.innerText = itemAdd.parentElement.parentElement.querySelector(".item-price-c").querySelector(".item-price").innerText;

            newLi.appendChild(newSpan1);
            newLi.appendChild(newSpan2);
            cartItemsUl.appendChild(newLi);

            totalPrice += +itemAdd.parentElement.parentElement.querySelector(".item-price-c").querySelector(".item-price").innerText;
            cartTotalPrice.innerText = Math.round((totalPrice + Number.EPSILON) * 100)/100;

            sessionStorage.setItem("ulItems", cartItemsUl.innerHTML);

            if (!showHideCheck.checked && cartItemsUl.children.length <= 1) {
                showHideCheck.click();
                showHideSpan.dataset.ulItemsNum = cartItemsUl.children.length;
            } else {
                showHideSpan.dataset.ulItemsNum = cartItemsUl.children.length;
            }
        };
    });

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

    InputSearch.addEventListener("input", (e) => {
        items.forEach((item) => {
            if (item.children[1].innerText.toLowerCase().includes(e.target.value.toLowerCase()) || item.children[2].innerText.toLowerCase().includes(e.target.value.toLowerCase())) {
                item.classList.toggle("hidden", false);
            } else {
                item.classList.toggle("hidden", true);
            }
        });
    });
};
