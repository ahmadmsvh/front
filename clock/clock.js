var addh = 0;
var addm = 0;
var adds = 0;

function signs(){
    let frame = document.getElementById("frame") ;
    let deg = 0;
    for (let i = 0 ; i < 12 ; i++){
        let div = document.createElement("div");
        div.className = "signs";
        div.style.top = "190px";
        div.style.transform += "translate(" + (Math.sin(deg*Math.PI/180)*180)+"px, "+ (Math.cos(deg*Math.PI/180)*180)+"px) rotate(-"+deg+"deg)";
        frame.appendChild(div);
        deg += 30;
    }
}

function handles(){
    let tm = new Date();
    let hour = tm.getHours() + addh;
    let minute = tm.getMinutes() + addm;
    let second = tm.getSeconds() + adds;
    hour = hour / 12 * 360 + minute / 60 * 30 ;
    minute = 360 / 60 * minute + second / 60 * 6
    second = 360 / 60 * second

    let hhandle = document.getElementById("hhandle");
    hhandle.style.transform = "rotate("+hour+"deg)";

    let mhandle = document.getElementById("mhandle");
    mhandle.style.transform = "rotate("+minute+"deg)";

    let shandle = document.getElementById("shandle");
    shandle.style.transform = "rotate("+second+"deg)";
}

let timeupdate = setInterval(handles, 1000)  
signs();
handles();

document.getElementById("hours").onchange = function(){

    hh = document.getElementById("hours").value;
    let tm = new Date()
    let hour = tm.getHours();
    addh = hh - hour;
};   
document.getElementById("minutes").onchange = function(){

    mm = document.getElementById("minutes").value;
    let tm = new Date()
    let minute = tm.getMinutes();
    addm = mm - minute;
};   
document.getElementById("seconds").onchange = function(){

    ss = document.getElementById("seconds").value;
    let tm = new Date()
    let second = tm.getSeconds();
    adds = ss - second;
};   