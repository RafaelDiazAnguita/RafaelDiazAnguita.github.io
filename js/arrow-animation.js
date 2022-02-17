var button = document.getElementById("arrow-button");
var arrow_box = document.getElementById('arrow-box');

button.addEventListener("mouseover", func, false);
button.addEventListener("mouseout", func1, false);

function func()
{  // not needed since button is already global, 
   // I am assuming this is here just because it's sample code?
   // var button = document.getElementById("button"); 
   arrow_box.setAttribute("style", "transform: translateX(100%);")
}

function func1()
{  
    arrow_box.setAttribute("style", "transform: translateX(0%);")
}