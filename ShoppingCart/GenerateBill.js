'use strict';

function generate() {
   var imagesrc =    JSON.parse(localStorage.getItem("imagesrc"));
   var storedprice = JSON.parse(localStorage.getItem("price"));
   var storednames = JSON.parse(localStorage.getItem("text"));
   var storedamount = JSON.parse(localStorage.getItem("amount"));
   var storedquantity = JSON.parse(localStorage.getItem("quantity"));
   var total = localStorage.getItem("total");
   var detail = JSON.parse(localStorage.getItem("details"));
   const bill = document.getElementById('bill');
    
   let form = document.createElement('div')
   form.setAttribute('class','details')

   for(var y=0;y<5;y++) {
      let details = document.createElement('p')
      let detailsText = document.createTextNode(detail[y]);
      details.appendChild(detailsText);
      form.appendChild(details);
   }
     bill.appendChild(form);
     for( var i=0; i<storedprice.length;i++) {

      let show = document.createElement('div');
      show.setAttribute('class', 'show');
      
      
      let itemImage = document.createElement('img');
      itemImage.setAttribute('class', 'image');
      itemImage.setAttribute('src',imagesrc[i]);
      show.appendChild(itemImage);

      let itemName = document.createElement('span');
      itemName.setAttribute('class', 'title');
      let itemtext = document.createTextNode(storednames[i]);
      itemName.appendChild(itemtext);  
      show.appendChild(itemName);

      let itemPrice = document.createElement('span');
      itemPrice.setAttribute('class', 'price');
      let itemText = document.createTextNode("$" + storedprice[i]);
      itemPrice.appendChild(itemText);
      show.appendChild(itemPrice);

      let itemQuantity = document.createElement('span');
      itemQuantity.setAttribute('class', 'quantity');
      let itemquant = document.createTextNode(storedquantity[i]);
      itemQuantity.appendChild(itemquant);
      show.appendChild(itemQuantity);

      let itemAmount = document.createElement('span');
      itemAmount.setAttribute('class', 'amount');
      let itemamount = document.createTextNode("$" + storedamount[i]);
      itemAmount.appendChild(itemamount);
      show.appendChild(itemAmount);

      bill.appendChild(show);
    }  
    let itemtotal = document.createElement('span')
    itemtotal.setAttribute('class','total')
    let x = document.createTextNode("Total amount to be paid=" +"       "+ "$"+ total)
    itemtotal.appendChild(x)

    bill.appendChild(itemtotal)
   }  
