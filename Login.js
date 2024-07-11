const body = document.querySelector("body");
const userName = document.querySelector("#Username");  //here only the element is accessible
const pwd = document.querySelector("#Password");
const userNameError = document.querySelector("#usernameError");
const pwdError = document.querySelector("#pwdError");
const Form = document.querySelector("#form");

Form.addEventListener("submit",(event)=>{
    const userLength = userName.value.length;
    const validUser = userLength>=5 && userLength<=20;
    const pwdLength = pwd.value.length;
    const validPwd = pwdLength>=8 && pwdLength<=20;
    const isValid = true;

    userNameError.innerHTML = "";
    pwdError.innerHTML = ""
    
    if(!validUser){
        userNameError.innerHTML = "username should be of atleast 5 characters";
        isValid = false;
    }
    if(!validPwd){
        pwdError.innerHTML = "password should be of atleast 8 characters";
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