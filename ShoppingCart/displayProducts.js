
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.overrideMimeType("application/json");
    xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    products = JSON.parse(this.responseText);
    const productsList = document.getElementById('productsList');
    Object.keys(products).forEach(item_id => {
        let card = document.createElement('div');
        card.setAttribute('class', 'card');
        

        let imageContainer = document.createElement('div');
        imageContainer.setAttribute('class','imageContainer');
        let itemImage = document.createElement('img');
        itemImage.setAttribute('class', 'image');
        itemImage.setAttribute('src', products[item_id].image.src);
        itemImage.setAttribute('alt', products[item_id].image.alt);
        imageContainer.appendChild(itemImage);
        card.appendChild(imageContainer);

        let itemName = document.createElement('h1');
        itemName.setAttribute('class', 'title');
        itemName.setAttribute('id', item_id);
        let itemtext = document.createTextNode(products[item_id].name);
        itemName.appendChild(itemtext);
        card.appendChild(itemName);

        let itemPrice = document.createElement('p');
        itemPrice.setAttribute('class', 'price');
        itemPrice.setAttribute('id', item_id);
        let itemText = document.createTextNode("$" + products[item_id].price);
        itemPrice.appendChild(itemText);
        card.appendChild(itemPrice);

        let addButton = document.createElement('button');
        addButton.setAttribute('onclick', "addtoCart('" + item_id + "')");
        let buttonText = document.createTextNode("Add to cart");
        addButton.appendChild(buttonText);
        card.appendChild(addButton);
        
        productsList.appendChild(card);
    });
  }
};
xmlhttp.open("GET", "https://api.myjson.com/bins/1dg0li", true);
xmlhttp.send(null); 
        