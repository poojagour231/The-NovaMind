// =======================================
// ChatGPT 2006
// Windows XP Boot Loader
// Part 1
// =======================================

const progressBar = document.getElementById("progress-bar");
const percentage = document.getElementById("percentage");
const progressText = document.getElementById("progress-text");

const cpu = document.getElementById("cpu");
const ram = document.getElementById("ram");
const network = document.getElementById("network");

let progress = 0;

const bootMessages = [

    "Loading Windows XP Components...",

    "Initializing AI Engine...",

    "Checking Memory...",

    "Loading Neural Modules...",

    "Connecting Hardware...",

    "Preparing ChatGPT Core...",

    "Loading User Interface...",

    "Finalizing Startup..."

];

let messageIndex = 0;

function bootLoader(){

    progress++;

    progressBar.style.width = progress + "%";

    percentage.innerHTML = progress + "%";

    if(progress % 12 === 0){

        progressText.innerHTML =
        bootMessages[messageIndex];

        messageIndex++;

        if(messageIndex >= bootMessages.length){

            messageIndex = bootMessages.length - 1;

        }

    }

    cpu.innerHTML =
    Math.floor(Math.random()*35+15)+" %";

    ram.innerHTML =
    Math.floor(Math.random()*120+220)+" MB";

}
// =======================================
// Boot Animation Controller
// Part 2
// =======================================

const bootTimer = setInterval(function () {

    bootLoader();

    if (progress >= 100) {

        clearInterval(bootTimer);

        progressText.innerHTML = "Boot Completed";

        network.innerHTML = "Online";

        cpu.innerHTML = "Ready";

        setTimeout(showDialup, 1200);

    }

}, 80);


function showDialup() {

    document.getElementById("boot-screen").style.display = "none";

    document.getElementById("dialup-screen").classList.remove("hidden");

    let dialBar =
        document.getElementById("dial-progress-bar");

    let dialStatus =
        document.getElementById("dialup-status");

    let value = 0;

    const dialTimer = setInterval(function () {

        value += 2;

        dialBar.style.width = value + "%";

        if (value < 20) {

            dialStatus.innerHTML =
                "Dialing...";

        }

        else if (value < 45) {

            dialStatus.innerHTML =
                "Verifying Username & Password...";

        }

        else if (value < 70) {

            dialStatus.innerHTML =
                "Authenticating...";

        }

        else if (value < 100) {

            dialStatus.innerHTML =
                "Connecting to OpenAI Server...";

        }

        else {

            clearInterval(dialTimer);

            dialStatus.innerHTML =
                "Connected Successfully";

            setTimeout(openLogin, 1500);

        }

    }, 90);

}
// =======================================
// ChatGPT 2006
// Boot Loader Part 3 (Final)
// =======================================

function openLogin() {

    const notify =
        document.getElementById("notification-area");

    notify.classList.remove("hidden");

    setTimeout(function () {

        notify.classList.add("hidden");

    }, 3000);

    setTimeout(function () {

        window.location.href = "/login";

    }, 3500);

}


// =======================================
// Fake Virus Popup
// =======================================

setTimeout(function () {

    const popup =
        document.getElementById("virus-popup");

    popup.classList.remove("hidden");

}, 18000);


const popupBtn =
document.getElementById("popup-btn");

if(popupBtn){

popupBtn.addEventListener("click",function(){

document.getElementById("virus-popup")
.classList.add("hidden");

});

}


// =======================================
// Fake System Usage
// =======================================

setInterval(function(){

const cpuBar=
document.getElementById("cpu-bar");

const ramBar=
document.getElementById("ram-bar");

const aiBar=
document.getElementById("ai-bar");

if(cpuBar){

cpuBar.style.width=
(Math.random()*70+20)+"%";

}

if(ramBar){

ramBar.style.width=
(Math.random()*50+35)+"%";

}

if(aiBar){

aiBar.style.width=
(Math.random()*80+10)+"%";

}

},1200);


// =======================================
// AI Status Animation
// =======================================

const aiStatus=[
"Offline",
"Connecting...",
"Authenticating...",
"Online"
];

let statusIndex=0;

setInterval(function(){

const network=
document.getElementById("network");

if(network){

network.innerHTML=
aiStatus[statusIndex];

statusIndex++;

if(statusIndex>=aiStatus.length){

statusIndex=aiStatus.length-1;

}

}

},2000);


// =======================================
// Startup Sound
// =======================================

window.onload=function(){

const startup=
document.getElementById("startup-audio");

if(startup){

startup.volume=.35;

startup.play().catch(()=>{});

}

};