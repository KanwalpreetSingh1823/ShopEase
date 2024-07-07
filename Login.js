const body = document.querySelector("body");
const showLoader = () => {
    body.style.backgroundColor = "white";
    document.querySelector(".container").style.display = 'none';
    document.querySelector(".spin").style.display = 'flex';
    setTimeout(()=>{
        window.location.href = 'dashboard.html';
    },2000);
}