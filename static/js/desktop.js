// =========================
// Live Clock
// =========================

function updateClock(){

    let now = new Date();

    document.getElementById("clock").innerHTML =
        now.toLocaleTimeString([],{
            hour:"2-digit",
            minute:"2-digit"
        });

}

setInterval(updateClock,1000);

updateClock();


// =========================
// Start Menu
// =========================

const startBtn=document.getElementById("startBtn");

const startMenu=document.getElementById("startMenu");

startBtn.onclick=function(){

    if(startMenu.style.display==="block"){

        startMenu.style.display="none";

    }

    else{

        startMenu.style.display="block";

    }

}


// Close menu on outside click

document.addEventListener("click",function(e){

    if(!startMenu.contains(e.target) &&
       e.target!==startBtn){

        startMenu.style.display="none";

    }

});


// =========================
// Desktop Icons
// =========================

function openChat(){

    window.location.href="/chat";

}


function openSettings(){

    window.location.href="/settings";

}


function openAbout(){

    window.location.href="/about";

}


function openComputer(){

    alert(
        "💻 My Computer\n\nDrive C:\\\nDrive D:\\\nWindows XP File System"
    );

}


function openInternet(){

    alert(
        "🌐 Internet Explorer\n\nInternet Explorer is not connected in Demo Mode."
    );

}


function openRecycle(){

    alert(
        "🗑 Recycle Bin is Empty."
    );

}


// =========================
// Double Click Support
// =========================

const icons=document.querySelectorAll(".desktop-icon");

icons.forEach(icon=>{

    icon.addEventListener("dblclick",()=>{

        icon.click();

    });

});


// =========================
// Windows XP Startup Sound
// =========================

window.onload=function(){

    updateClock();

    let audio=document.getElementById("startupSound");

    if(audio){

        audio.play().catch(()=>{});

    }

}