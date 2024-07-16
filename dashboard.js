let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

document.addEventListener("DOMContentLoaded",()=>{
    let head = document.querySelector(".main-head");
    let text = head.textContent;
    head.innerHTML = "";

    let i = 0;
    function autoType(){
        if(i<text.length){
            head.innerHTML += text.charAt(i);
            i++;
            setTimeout(autoType,100);
        }
    }
    autoType();  //Initial Call to start the typing test
})