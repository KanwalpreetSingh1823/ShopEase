const body = document.querySelector("body");
const userName = document.querySelector("#Username");  //here only the element is accessible
const pwd = document.querySelector("#Password");
const email = document.querySelector("#Email");
const userNameError = document.querySelector("#usernameError");
const pwdError = document.querySelector("#pwdError");
const emailError = document.querySelector("#emailError");
const Form = document.querySelector("#form");

Form.addEventListener("submit",(event)=>{
    const userLength = userName.value.length;
    const validUser = userLength>=5 && userLength<=20;
    const pwdLength = pwd.value.length;
    const validPwd = pwdLength>=8;
    const emailValue = email.value;
    const validEmail = emailValue.includes("@") && emailValue.includes(".") && emailValue.indexOf("@") < emailValue.indexOf(".");
    const isValid = true;

    userNameError.innerHTML = "";
    pwdError.innerHTML = "";
    emailError.innerHTML = "";
    
    if(!validUser){
        userNameError.innerHTML = "Username must be between 5 and 20 characters.";
        isValid = false;
    }
    if(!validPwd){
        pwdError.innerHTML = "Password must be at least 8 characters long.";
        isValid = false;
    }
    if(!validEmail){
        emailError.innerHTML = "Please enter a valid email address.";
        isValid = false;
    }
    if(!isValid){
        event.preventDefault();
    }
    else{
        showLoader();
    }
});

const showLoader = () => {
    body.style.backgroundColor = "white";
    document.querySelector(".container").style.display = 'none';
    document.querySelector(".spin").style.display = 'flex';
    setTimeout(()=>{
        window.location.href = 'dashboard.html';
    },2000);
}