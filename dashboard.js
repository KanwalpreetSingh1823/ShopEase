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
    let head2 = document.querySelector("#discover");
    let text = head.textContent;
    let text2 = head2.innerHTML;
    head.innerHTML = "";
    head2.innerHTML = "";

    let i = 0;
    let j = 0;
    function autoType1(){
        if(i<text.length){
            head.innerHTML += text.charAt(i);
            i++;
            setTimeout(autoType1,100);
        }
    }
    function autoType2(){
        if(j<text2.length){
            head2.innerHTML += text2.charAt(j);
            j++;
            setTimeout(autoType2,100);
        }
    }
    autoType1();
    autoType2();  //Initial Call to start the typing test
})

const product = document.querySelector(".item");
const clothSec = document.querySelector(".cloth-section");
const itemPic = document.querySelector(".product");
// const desc = document.querySelector(".des");  //description

const images = [
    'pic1.jpg', 'pic2.jpg',
    'pic3.jpg', 'pic4.jpg',
    'pic5.jpg', 'pic6.jpg',
    'pic7.jpg', 'pic8.jpg'
]
const description = [
    'pic1.jpg', 'pic2.jpg',
    'pic3.jpg', 'pic4.jpg',
    'pic5.jpg', 'pic6.jpg',
    'pic7.jpg', 'pic8.jpg'
]
for(let i=1; i<=images.length; i++){
    const flexItem = document.createElement('div');
    flexItem.classList.add('product');

    const image = document.createElement('img');
    image.src = images[i];
    image.classList.add('itemPic');
    flexItem.appendChild(image);

    const descrip = document.createElement('p');
    descrip.innerHTML = description[i];
    // descrip.classList.add('itemPic');
    flexItem.appendChild(descrip);
    clothSec.append(flexItem);
}