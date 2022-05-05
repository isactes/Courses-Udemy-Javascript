'use strict'

//BOM >>>> Browser Object Model 

function getBom(){Z
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    console.log(screen.width);
    console.log(screen.height);
    console.log(window.location.location);
    console.log(window.location.href);
}
function redirect(url){
    window.location.href = url;
}
function openwindow(url){
    window.open(url);
    window.open(url,"","width=1500,heigth=500");
}
getBom();
