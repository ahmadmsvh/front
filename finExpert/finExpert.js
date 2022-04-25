var i = 0;
var j = 0;

function sweeper(){
    document.getElementById("slide-botton").disabled = true;
    if (i % 2 == 0){
        document.getElementById("slide2").style.transitionDuration = "1s";
        document.getElementById("slide1").style.transitionDuration = "1s";
        document.getElementById("slide2").style.transform = "translateX(-1425px)";
        document.getElementById("slide1").style.transform = "translateX(0px)"; 
        setTimeout(function(){
        document.getElementById("slide2").style.transitionDuration = "0s";
        document.getElementById("slide1").style.transitionDuration = "0s";
        document.getElementById("slide2").style.transform = "translateX(1425px)";  
        document.getElementById("slide-botton").disabled = false;
        },1010);
    }
    if (i % 2 == 1){
        document.getElementById("slide2").style.transitionDuration = "1s";
        document.getElementById("slide1").style.transitionDuration = "1s";
        document.getElementById("slide1").style.transform = "translateX(-1425px)";
        document.getElementById("slide2").style.transform = "translateX(0px)"; 
        setTimeout(function(){
        document.getElementById("slide2").style.transitionDuration = "0s";
        document.getElementById("slide1").style.transitionDuration = "0s";
        document.getElementById("slide1").style.transform = "translateX(1425px)"; 
        document.getElementById("slide-botton").disabled = false;
        },1010);
    }
     i += 1;
}

var id = setInterval(sweeper,6000);

function slide(){
    clearInterval(id);
    sweeper();
    id = setInterval(sweeper,6000);
}

function inpvis(){
    document.getElementById("nav-input").style.display = "block";
}

// function slide(){  
//     i += 1
//     if (i % 2 == 0){
//         var s1x = -1450;
//         var s2x = 0;
//         i = 0;
//     }
//     if (i % 2 != 0){
//         var s2x = -1450;
//         var s1x = 0;
//     }
//     document.getElementById("slide2").style.transform = "translateX("+s1x+"px)";
//     document.getElementById("slide1").style.transform = "translateX("+s2x+"px)"; 
// }