'use strict';

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}


function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}


function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = priceElement.innerText.replace('$', '')
        var quantity = quantityElement.value
        total += (price * quantity)
    }
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
    var x = document.getElementById('purchase');
    if (total != 0) {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}


function addtoCart(a) {
Object.keys(products).forEach(item_id => {  
if(a == products[item_id].id) {
var title = products[item_id].name;
var price = products[item_id].price;
var stock = products[item_id].inventory;
var imageSrc = products[item_id].image.src;
addItemToCart(imageSrc,title,price,stock)
updateCartTotal()
}
});
}



function addItemToCart(imageSrc,title, price,stock) {
    var cartRow = document.createElement('div')
    cartRow.setAttribute('class','cart-row');
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }
    var cartRowContents = ` 
        <div class="cart-item cart-column">
        <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1" min=1 max=${stock}>
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.appendChild(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}


 function billing() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    let shoproducts_price = [];
    let shoproducts_quantity = [];
    let shoproducts_title = [];
    let shoproducts_amount = [];
    let shoproducts_imagesrc = [];
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var imageSrc = document.getElementsByClassName('cart-item-image')[i].src
        shoproducts_imagesrc.push(imageSrc)
        var textElement = cartRow.getElementsByClassName('cart-item-title')[0]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var text = textElement.innerText
        shoproducts_title.push(text)
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        shoproducts_price.push(price)
        var quantity = quantityElement.value
        shoproducts_quantity.push(quantity)
        total += (price * quantity)
        shoproducts_amount.push(price * quantity)
    }  
      localStorage.setItem("imagesrc",JSON.stringify(shoproducts_imagesrc));
      localStorage.setItem("text",JSON.stringify(shoproducts_title));
      localStorage.setItem("price",JSON.stringify(shoproducts_price));
      localStorage.setItem("quantity",JSON.stringify(shoproducts_quantity));
      localStorage.setItem("amount",JSON.stringify(shoproducts_amount));
      localStorage.setItem("total",total);
       window.location.replace("Address.html")
 }

  
  
  