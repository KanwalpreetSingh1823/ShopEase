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
    'price = ₹199', 'price = ₹299',
    'price = ₹399', 'price = ₹499',
    'price = ₹599', 'price = ₹699',
    'price = ₹799', 'price = ₹899',
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


function showPrompt(){
    const prompt = document.querySelector(".prompt");
    prompt.style.display = 'block';
    setTimeout(()=>{
        prompt.style.display = 'none';
    },1000);
}


let count = 0;   //Item-count
let selected_item = document.querySelectorAll(".select-item");
let itemCount = document.querySelector(".item-count");
itemCount.innerHTML = count;
selected_item.forEach((val) => {
   val.addEventListener("click",()=>{
    if(val.classList.contains('fa-regular')){
        showPrompt();
        val.classList.add('fa-solid');
        val.classList.remove('fa-regular');
        val.style.color = "red";
        count++;

        setTimeout(()=>{
            val.style.visibility= "hidden";
        },500)
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


const cartDisplay = document.querySelector("#cart-add");
const cartBoxDisplay = document.querySelector(".cartBox");
cartDisplay.addEventListener("click",()=>{
    if(cartBoxDisplay.style.display === 'block'){
        cartBoxDisplay.style.display = 'none';
    }
    else{
        cartBoxDisplay.style.display = 'block';
    }
})

const entireBody = document.querySelector('body');
const showLoader = () => {
    entireBody.style.backgroundColor = "white";
    document.querySelector(".product-slides").style.display = 'none';
    document.querySelector(".cloth-section").style.display = 'none';
    document.querySelector(".spin").style.display = 'flex';
    setTimeout(()=>{
        window.location.href = 'profile.html';
    },2000);
}

const myAccount = document.querySelector(".userDetails");
myAccount.addEventListener("click",()=>{
    showLoader();
})


/* Accessing the particular decription and price */

const allItems = document.querySelector(".cloth-section");
allItems.addEventListener("click",(event)=>{
    if(event.target.classList.contains('select-item')){
        const item = event.target.closest('.item');
        const description1 = item.querySelector('.disc').textContent;
        const description2 = item.querySelector('.desc2').textContent;
        const createItemDiv = document.createElement('div');
        const createItem = document.createElement('li');
        const removeBtn = document.createElement('button');
        createItemDiv.classList.add('cartItemSection');
        createItem.innerHTML = `Item price ${description2} has been added`;
        removeBtn.innerHTML = "remove";
        removeBtn.classList.add('removeButton');
        createItemDiv.append(createItem);
        createItemDiv.append(removeBtn);
        cartBoxDisplay.append(createItemDiv);
        removeBtn.addEventListener("click",()=>{
            cartBoxDisplay.removeChild(createItemDiv);
            if(event.target.classList.contains('fa-solid')){
                event.target.style.visibility = "visible";
                event.target.classList.remove('fa-solid');
                event.target.classList.add('fa-regular');
                event.target.style.color = "black";
                count --;
                itemCount.innerHTML = count;
            }
        })
    }
})