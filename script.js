window.onload= function (){ alert("Please leave your valuable feedback\nYou can give feedback by clicking on feedback icon");

document.getElementById("cpyrt").textContent="©" + yyyy;

}

window.arr= [];

var d = new Date(),

    h = (d.getHours()<10?'0':'') + d.getHours(),

    min = (d.getMinutes()<10?'0':'') + d.getMinutes();

window.time = h + ":" + min;

var today = new Date();

var dd = String(today.getDate()).padStart(2, '0');

var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!

window.yyyy = today.getFullYear();

window.today = mm + '/' + dd + '/' + yyyy;

function addd(){

var list = document.querySelector('#bdy');

list.addEventListener('click', function ul(ev) {

  if (ev.target.tagName === 'LI') {

    ev.target.classList.toggle('checked');

  }

}, false);

  var li = document.createElement("li");

  var inputValue = document.getElementById("inp").value;

  var t = document.createTextNode(inputValue);

  li.appendChild(t);

  if (inputValue === '') {

    alert("You must write something!");

  } else {

    document.getElementById("bdy").appendChild(li);

  }

     document.getElementById("by").hidden=true;

  var span = document.createElement("SPAN");

  var txt = document.createTextNode("close");

  span.className = "material-icons close";

  span.appendChild(txt);

  li.appendChild(span);

var close = document.getElementsByClassName("close");

var i;

  for (i = 0; i < close.length; i++) {

    close[i].onclick = function() {

      var div = this.parentElement;

      div.style.display = "none";

    }

  }

}

function alert(String){

var bdy= document.createElement("div");

    document.body.appendChild(bdy);

var div= document.createElement("div");

    bdy.appendChild(div);

var bdys= bdy.style;

    bdys.margin="auto";

    bdys.position="absolute";

    bdys.left= 0;

    bdys.top= 0;

    bdys.right= 0;

    bdys.bottom= 0;

    bdys.zIndex= "999999";

    bdys.backgroundColor="rgb(0,0,0,0.2)";

    bdys.backdropFilter="blur(1px)";

var divs= div.style;

    divs.margin="auto";

    divs.position="absolute";

    divs.left= 0;

    divs.top= "30%";

    divs.right= 0;

    //divs.bottom= 0;

    div.style.wordBreak="break-word";

    divs.width="240px";

    divs.minHeight="80px";

    divs.padding="12px";

    //divs.borderRadius="0px";

    divs.backgroundColor="rgb(240,230,255)";

    divs.boxShadow="2px 2px 7px rgb(0,0,0,0.2), -2px -2px 7px rgb(0,0,0,0.2)"

    div.textContent= String;

var btn_ok= document.createElement("button");

    div.appendChild(btn_ok);

    btn_ok.innerHTML="ok";

var btns = btn_ok.style;

    btns.position="absolute";

    btns.bottom="12px";

    btns.right="20px";

    btns.border="none";

    btns.color="rgb(255,90,190)";

    btns.backgroundColor="transparent";

    btn_ok.onclick= function() {

        bdy.remove();

    }

    bdy.onclick= function() {

        bdy.remove();

    }

    div.onclick= function() {

        event.stopPropagation();

    }

}

 function nu(){

    document.getElementById("lgn").hidden=false;

    document.getElementById("ok").hidden=false;

    document.getElementById("nu").hidden=true;

    document.getElementById("check").hidden=true;

    alert("choose a better username &password so none other than you can enter again through this id");

    var s= document.getElementById("frm").style;

    s.backgroundColor="white";

    s.transform="scale(1.2,1.2)";

}

function lgn(){

    document.getElementById("lgn").hidden=true;

    document.getElementById("ok").hidden=true;

    document.getElementById("nu").hidden=false;

  document.getElementById("check").hidden=false;

  var s= document.getElementById("frm").style;

    s.backgroundColor="";

    s.transform="scale(1,1)";

}

function eye(){

 var pass= document.getElementById("pass");

 var el= document.getElementById("el");

    if(pass.type == "password"){

    pass.type= "text";

    el.innerHTML="visibility";

    

    }

    else{

        pass.type="password";

        el.innerHTML="visibility_off";

    }

}

function mode(){

    var b= document.body;

    if(b.classList=="light"){

    b.classList="dark";

    }

    else if(b.classList=="dark"){

        b.classList="light";

    }

}
