



document.addEventListener('DOMContentLoaded',()=>{
    const userName = localStorage.getItem('username');
    const pwd = localStorage.getItem('password');
    const email = localStorage.getItem('email');
    if(userName){
        document.getElementById("userNameDisplay").innerText = userName;
    }
    if(pwd){
        document.getElementById("pwdDisplay").innerText = pwd;
    }
    if(email){
        document.getElementById("emailDisplay").innerText = email;
    }
})