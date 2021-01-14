const products = document.querySelector('.products');
const product = document.querySelectorAll('.product');
const cartProducts = document.querySelector('.cart__products');

product.forEach(element => {
    const minus = element.querySelector('.product__quantity-control_dec');
    let quantityValue = element.querySelector('.product__quantity-value');
    minus.onclick = function() {
        if(Number(quantityValue.innerText) > 1) {quantityValue.innerText = Number(quantityValue.innerText) - 1}
    };
    const plus = element.querySelector('.product__quantity-control_inc');
    plus.onclick = function() {quantityValue.innerText = Number(quantityValue.innerText) + 1};
    const productAdd = element.querySelector('.product__add');
    productAdd.onclick = function() {
if(cartProducts.querySelector(`div[data-id="${element.getAttribute("data-id")}"]`) === null) {
    cartProducts.insertAdjacentHTML("afterbegin", `<div class="cart__product" data-id="${element.getAttribute("data-id")}">
    <img class="cart__product-image" src="${element.querySelector('.product__image').getAttribute("src")}">
    <div class="cart__product-count">${element.querySelector('.product__quantity-value').innerText}</div>
</div>`)
} else {
    let cartCount = cartProducts.querySelector(`div[data-id="${element.getAttribute("data-id")}"]`).querySelector('.cart__product-count');
    cartCount.innerText = Number(cartCount.innerText) + Number(quantityValue.innerText) 
}
    }

})
