'use strict';

       function validateForm() {
        
        
     var  x = document.forms["myForm"]["fname"].value;
     var num = document.forms["myForm"]["phone"].value;
     var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
     var email = document.forms["myForm"]["email"].value;
     var date = document.forms["myForm"]["dob"].value;
     var year = date.slice(0,4);
     var month = date.slice(5,7);
     var day = date.slice(8,10);
     var dob = day + "-" + month + "-" + year ;
     var city = document.forms["myForm"]["cname"].value;
     localStorage.setItem("name", x.toUpperCase());
     localStorage.setItem("phone", num);
     localStorage.setItem("email", email);
     localStorage.setItem("dob", dob);
     localStorage.setItem("city", city.toUpperCase());
      if (isNaN(x) === false) {
        alert("Name entered is not correct");
        
      }
      else if (year > 2020 || year < 1980) { 
        alert("Year enetered must be between 1980-2005")
        
      }
      else if (regex.test(email) === false) {
        alert("Email address is not valid");
        
      } 
       else if (num.length != 10) {
        alert("Phone number is not valid");
        
      }
      else {
        
        window.location.replace("display.html");
      }
    }

