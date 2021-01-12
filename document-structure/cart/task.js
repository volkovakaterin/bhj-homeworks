const quantityPlus = document.querySelectorAll('.product__quantity-control_inc');
const quantityMinus = document.querySelectorAll('.product__quantity-control_dec');
const quantityControl = document.querySelectorAll('.product__quantity-control');

quantityControl.forEach(element => {
    element.addEventListener("click", (event) => {
        let quantityNumber = Number(event.currentTarget.parentNode.querySelector('.product__quantity-value').innerText);
        if (event.currentTarget.classList.contains('product__quantity-control_dec')) {
            if (quantityNumber > 1) {event.currentTarget.parentNode.querySelector('.product__quantity-value').innerText = quantityNumber - 1}
        } else {event.currentTarget.parentNode.querySelector('.product__quantity-value').innerText = quantityNumber + 1} 
        cartProducts.querySelector(`div[data-id="${event.currentTarget.parentNode.parentNode.parentNode.parentNode.getAttribute("data-id")}"]`).querySelector('.cart__product-count').innerText = event.currentTarget.parentNode.querySelector('.product__quantity-value').innerText;
    })
})

const cartProducts = document.querySelector('.cart__products');
const productAdd = document.querySelectorAll('.product__add');

productAdd.forEach(element => {
    element.addEventListener("click", (event) => {
        if (cartProducts.querySelector(`div[data-id="${event.currentTarget.parentNode.parentNode.parentNode.getAttribute("data-id")}"]`) === null) {
            cartProducts.insertAdjacentHTML("afterbegin", `<div class="cart__product" data-id="${event.currentTarget.parentNode.parentNode.parentNode.getAttribute("data-id")}">
    <img class="cart__product-image" src="${event.currentTarget.parentNode.parentNode.parentNode.querySelector('.product__image').getAttribute("src")}">
    <div class="cart__product-count">${event.currentTarget.parentNode.querySelector('.product__quantity-value').innerText}</div>
</div>`)

        }
    })
})
