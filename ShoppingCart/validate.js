function validate() {
    var  x = document.forms["form1"]["fname"].value;
    var num = document.forms["form1"]["phone"].value;
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var email = document.forms["form1"]["email"].value;
    var date = document.forms["form1"]["dob"].value;
    var year = date.slice(0,4);
    var month = date.slice(5,7);
    var day = date.slice(8,10);
    var dob = day + "-" + month + "-" + year ;
    var city = document.forms["form1"]["cname"].value;
    var pin = document.forms["form1"]["pincode"].value;
    var hno = document.forms["form1"]["hno"].value;
    var state = document.forms["form1"]["state"].value;
     if (isNaN(x) === false) {
       alert("Name entered is not correct");  
       return false; 
     }
     else if (year > 2020 || year < 1980) { 
       alert("Year enetered must be between 1980-2005");
       return false;     
     }
     else if (regex.test(email) === false) {
       alert("Email address is not valid");
       return false; 
       
     } 
      else if (num.length != 10) {
       alert("Phone number is not valid");
       return false;   
     }
      else if (isNaN(pin) === true) {
      alert("PINCODE IS NOT VALID");
      return false;   
    }
     else {
       var address = hno + "," + city.toUpperCase() + "," + state + "," + pin;
       let pd = [x.toUpperCase(),num,email,dob,address];
       localStorage.setItem("details",JSON.stringify(pd));
       return true;
     }
   }