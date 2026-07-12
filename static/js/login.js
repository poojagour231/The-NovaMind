// =========================================
// ChatGPT 2006
// Windows XP Login
// login.js
// =========================================

const loginButton = document.getElementById("login-btn");
const password = document.getElementById("password");

loginButton.addEventListener("click", loginSystem);

password.addEventListener("keypress", function(event){

    if(event.key==="Enter"){

        loginSystem();

    }

});

function loginSystem(){

    loginButton.disabled=true;

    loginButton.innerHTML="Logging In...";

    document.body.style.cursor="wait";

    setTimeout(function(){

        loginButton.innerHTML="Loading Desktop...";

    },1000);

    setTimeout(function(){

        window.location.href="/desktop";

    },2500);

}