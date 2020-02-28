
window.addEventListener('load',display);

var x, from_id;

function display() {
var para= document.createElement('div')
para.setAttribute('id','class')
document.body.appendChild(para)
var content = `
<div class="header">
<h1 style="text-align:center">WELCOME TO CHATNOW</h1>
</div>
<div class="main" style="text-align:center">
<span class="head-block"><b>Log in to ChatNow</span>
<p id="demo"><input type="text" name="email" placeholder="Email address" required></p>
<p><button class="login" onclick="getSelectedOption()">Log In</button>
<button class="newuser" onclick="newuser()">Creat NewUser</button></p>
</div>`
 para.innerHTML = content;          
}

function getSelectedOption() {
var value = document.getElementsByName('email')[0].value;
if (value === "")
alert("Please enter email")
else{
 var xmlhttp = new XMLHttpRequest();
xmlhttp.overrideMimeType("application/json")
xmlhttp.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
        var username,flag;
        var user = JSON.parse(this.responseText);
        Object.keys(user).forEach(x => {
        if(user[x].email === value){
            flag = 1;
         username = user[x].name.toUpperCase();   
         welcomeuser(user,value,username,x); 
        }
    });
     if(flag != 1) {
        var x = document.getElementById("demo");
        var p = document.createElement('p');
        var ptext = document.createTextNode("SORRY NO SUCH USER EXIST");
        p.appendChild(ptext)
        x.appendChild(p)
        document.getElementsByClassName("login")[0].style.display = "none";
    }
    }
}
xmlhttp.open("GET","https://api.myjson.com/bins/1d97gi",true)
xmlhttp.send(null)
}
}

function welcomeuser(user,value,username,user_id) {
    var para= document.getElementsByClassName("main");
     while (para.length > 0) {
        para[0].remove();
     }
   var main = document.createElement('div')
   main.setAttribute('class','chat')
   var content = `
<div class="contacts">
<h1>CONTACTS</h1>
</div>
<div class="chat-window">
    <div class="chat-header">
        <h1>Hello ${username}</h1>
        <p id="to" style="display:none"></p>
    </div>
    <input type="text" width="50px" height="100px" name="message">
    <button id="send">
        <img src="send.png" width="30px" height="30px">
    </button>
</div>
<div class="messages">
<h1 class="message-head">MESSAGES</h1>
</div> `
   main.innerHTML = content
   document.body.appendChild(main);
   printmessage(user_id)
   const contacts = document.getElementsByClassName("contacts")[0];
   Object.keys(user).forEach(x => {
       if(user[x].email!= value){
       var p = document.createElement('p')    
       var cont = document.createElement('button')
       cont.setAttribute('onclick',"sendto('" + user[x].email+"','"+x+"','"+username+"')");
       var conttext = document.createTextNode(user[x].name)
       cont.appendChild(conttext)
       p.appendChild(cont)
       contacts.appendChild(p)
    }
});
}

var myFunction = function (){  
    var message = document.getElementsByName("message")[0].value;
    if (message != " "){
        writemesssage(x,from,message);
    }
}; 

function sendto(reciever,sendto_id,from_id) {
    var button = document.getElementById("send");
    x = sendto_id;
    from = from_id;
    var to = document.getElementById("to");
    to.innerHTML = "TO:-" +"  " + reciever;
    to.style.display = "block";
    button.addEventListener('click', myFunction);
}


function writemesssage(sendto_id,from,message) {
    localStorage.setItem("id",sendto_id);
    localStorage.setItem("'"+sendto_id+"'",message);
    localStorage.setItem("from_name",from);
    console.log(message)
    document.getElementsByName("message")[0].value = " ";
}

function printmessage(user_id) {
    setInterval(function print(){ 
    var reciever_id = localStorage.getItem("id"); 
    if(user_id === reciever_id) {   
    localStorage.removeItem("id") 
    message = localStorage.getItem("'"+reciever_id+"'")
    if(message != null) {
    var from = localStorage.getItem("from_name")
    localStorage.removeItem("from_name")
    var rows = document.getElementsByClassName('buttons')
    for (var i =0; i<rows.length;i++){
        if(rows.innerHTML === from){
            console.log(hello)
        }        
        else{
            var container = document.getElementsByClassName('messages')[0];
                var mes = document.createElement('button')
                mes.setAttribute('class',"buttons")
                mes.setAttribute('onclick',"showWindow('"+message+"','"+from+"')");
                var name = document.createTextNode(from)
                mes.appendChild(name)
                container.appendChild(mes) 
                reciever_id = "";
        }
    }
    
        }  
    }                       
    },500)
}

function showWindow(message,from) {
var window = document.createElement('div')
window.setAttribute('class',"message-window")
var contact = document.createElement('h1')
var contactname = document.createTextNode(from)
contact.appendChild(contactname)
console.log(message)
}
