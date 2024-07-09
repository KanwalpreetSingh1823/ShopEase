const body = document.querySelector("body");
const userName = document.querySelector("#Username");  //here only the element is accessible
const subBtn = document.querySelector("#submit-button");
const userValid = document.querySelector(".userValidate");
const passValid = document.querySelector(".pwdValidate");

userValid.classList.remove("display1");
passValid.classList.remove("display2");
subBtn.addEventListener("click",()=>{
    const userLength = userName.value.length;
    const pwdLength = passValid.value.length;
    const validUser = usesrLength>=5 && userLength<=20;
    const validPwd = pwdLength>=8 && pwdLength<=20;
    if(!validUser){
        userValid.classList.add("display1");
    }
    if(!validPwd){
        passValid.classList.add("display2");
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