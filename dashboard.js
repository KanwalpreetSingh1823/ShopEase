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
    function autoType(){
        if(i<text.length){
            head.innerHTML += text.charAt(i);
            i++;
        }
        if(j<text2.length){
            head2.innerHTML += text2.charAt(j);
            j++;
        }
        if(i<text.length || j<text2.length){
            setTimeout(autoType,100);
        }
    }
    autoType(); //Initial Call to start the typing test
})

const clothSec = document.querySelector(".cloth-section");

const images = [
    'pic1.jpg', 'pic2.jpg',
    'pic3.jpg', 'pic4.jpg',
    'pic5.jpg', 'pic6.jpg',
    'pic7.jpg', 'pic8.jpg'
]

const proPrice = [
    'price = ₹599', 'price = ₹599',
    'price = ₹599', 'price = ₹599',
    'price = ₹599', 'price = ₹599',
    'price = ₹599', 'price = ₹599'
]
const proDescription = [
    'This is the description of product', 'This is the description of product',
    'This is the description of product', 'This is the description of product',
    'This is the description of product', 'This is the description of product',
    'This is the description of product', 'This is the description of product'
]

for(let i=0; i<images.length; i++){
    const flexItem = document.createElement('div');
    flexItem.classList.add('item');

    const image = document.createElement('img');
    image.src = images[i];
    image.classList.add('product');
    flexItem.appendChild(image);

    const descrip = document.createElement('p');
    const price = document.createElement('p');
    descrip.innerHTML = proDescription[i];
    price.innerHTML = proPrice[i];
    descrip.classList.add('disc');
    price.classList.add('price');

    const descr2 = document.createElement('div');
    const selectItem = document.createElement('i');

    selectItem.classList.add('fa-regular', 'fa-heart');
    selectItem.classList.add('select-item');

    descr2.appendChild(price);
    descr2.appendChild(selectItem);
    descr2.classList.add('desc2');

    flexItem.appendChild(descrip);
    flexItem.appendChild(descr2);

    clothSec.append(flexItem);


}

let count = 0;   //Item-count
const selected_item = document.querySelectorAll(".select-item");
let itemCount = document.querySelector(".item-count");
itemCount.innerHTML = count;
selected_item.forEach((val) => {
   val.addEventListener("click",()=>{
    if(val.classList.contains('fa-regular')){
        val.classList.add('fa-solid');
        val.classList.remove('fa-regular');
        val.style.color = "red";
        count++;
       }
    else if(val.classList.contains('fa-solid')){
        val.classList.remove('fa-solid');
        val.classList.add('fa-regular');
        val.style.color = "";
        count--;
       }
       itemCount.innerHTML = count;
   })
});