function newuser() {
    var para= document.getElementsByClassName("main");
     while (para.length > 0) {
        para[0].remove();
     }
     var user= document.createElement('div')
        user.setAttribute('id','new-user')
        user.style.textAlign = "center"
        var content = `
        <p><label>ENTER NAME</label>
        <input type="text" name="name" required></p>
        <p><label>ENTER EMAIL</label>
        <input type="text" name="new-email" required></p>
        <button onclick="newFunction()">SUBMIT</button>
        `
     user.innerHTML = content  
    document.body.appendChild(user);
}

        function newFunction() {
        var name = document.getElementsByName('name')[0].value;
        var email = document.getElementsByName('new-email')[0].value;
        var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (regex.test(email) === false)
            alert("Please Enter a valid email address");
        else
            object["name"] = name;
            object["email"] = email;
    }