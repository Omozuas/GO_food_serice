


let searchFrom = document.querySelector('.search-from');

document.querySelector('#search-btn').onclick =()=>{
    searchFrom.classList.toggle('active');
    shoopingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let shoopingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick =()=>{
    shoopingCart.classList.toggle('active');
    searchFrom.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick =()=>{
    loginForm.classList.toggle('active');
    searchFrom.classList.remove('active');
    shoopingCart.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick =()=>{
  navbar.classList.toggle('active');
  searchFrom.classList.remove('active');
  shoopingCart.classList.remove('active');
  loginForm.classList.remove('active');
}

window.onscroll =()=>{
    searchFrom.classList.remove('active');
    shoopingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
  }


//  var Swiper = new Swiper('.product-slider', {
//     loop:true,
//     spaceBetween: 20,
//     autoplay:{
//         delay: 7500,
//         disableOnInteraction: false,
//     },
//     centeredSlides:true,
//     breakpoints: {
//     0: {
//         slidesPerView: 1,
//     },
//     768: {
//         slidesPerView: 2,
//     },
//     1020: {
//         slidesPerView: 3,  
//     }
//     },
// });
// var Swiper = new Swiper('.review-slider', {
//     loop:true,
//     spaceBetween: 20,
//     autoplay:{
//         delay: 7500,
//         disableOnInteraction: false,
//     },
//     centeredSlides:true,
//     breakpoints: {
//     0: {
//         slidesPerView: 1,
//     },
//     768: {
//         slidesPerView: 2,
//     },
//     1020: {
//         slidesPerView: 3,  
//     }
//     },
// });


// let cartIcon=document.querySelector('#cart-btn')
// let cart=document.querySelector('.shopping-cart')


// cartIcon.onclick =()=>{
//     cart.classList.add('active')
// };


// if(document.readyState=='loading'){
//     document.addEventListener('DOMContentLoaded',ready)
// }else{
//     ready()
// }

function ready(){
    //remove item from cart
    var removeCartButtons= document.getElementsByClassName('fa-trash')
    console.log(removeCartButtons)
    for(var i = 0; i < removeCartButtons.length;i++){
        var button= removeCartButtons[i]
        button.addEventListener('click' ,removeCartItem)
    }}
//     //quantity change
//     var quantityinputs =document.getElementsByClassName('quantitys') 
//     console.log(quantityinputs)
//     for(var i = 0; i < quantityinputs.length;i++){
//         var input =quantityinputs[i];
//         input.addEventListener('change',quantitychanged);
//     }
//     //add to cart
//     var addCart =document.getElementsByClassName('btn-buy')
//     console.log(addCart)
//     for(var i = 0; i < addCart.length;i++){
//         var button =addCart[i];
//         button.addEventListener('click',addCartClicked);
//     }
// }
 //remove item
function removeCartItem(event){
    var buttonclicked=event.target
    buttonclicked.parentElement.remove();
    updatetotal();
} 
// //quantity changed
// function quantitychanged(event){
//     var input = event.target
//     if(isNaN(input.value) || input.value <= 0){
//         input.value = 1;
//     }
//     updatetotal();
// }
// //add to cart 
// function addCartClicked(event){
//     var button =event.target
//     var shopProducts= button.parentElement
//     var names = shopProducts.getElementsByClassName("product-name")[0].innerText
//     var price = shopProducts.getElementsByClassName("price")[0].innerText
//     var productImage = shopProducts.getElementsByClassName("product-img")[0].src
    
//     addProductToCart(names,price,productImage);
//     updatetotal();
// }

// function addProductToCart(names,price,productImage){
//     var cartShopBox =document.createElement('div')
//     cartShopBox.classList.add('box')
//     var cartItems = document.getElementsByClassName('shopping-cart')[0]
//     var cartItemsName = cartItems.getElementsByClassName('product-name')
//     for(var i = 0; i < cartItemsName.length;i++){
//         alert('you have already add this to cart');
//         return;
//     }
// }
// var cartBoxContent = `  
//                          <i class="fas fa-trash"></i>
//                          <img src="${productImage}" class="product-img">
//                          <div class="content">
//                          <h3 class="product-name">${names}</h3>
//                          <span class="price">${price}</span>
//                          <span >qty:</span><input type="number"  class="quantitys" value="1"> 
//                          </div>`;
// cartShopBox.innerHTML = cartBoxContent 
// cartItems.append(cartShopBox)
// cartShopBox
// .getElementsByClassName('fa-trash')[0]
// .addEventListener('click',removeCartItem);
// cartShopBox
// .getElementsByClassName('quantitys')[0]
// .addEventListener('change',quantitychanged);
// //update total
// function updatetotal(){
//     var cartContent= document.getElementsByClassName('product-slider')[0];
//     var cartBoxes =document.getElementsByClassName('box');
//     var total=0;
//     for(var i = 0; i < cartBoxes.length;i++){
//         var cartBox =cartBoxes[i]
//         var priceElement = cartBox.getElementsByClassName('price')[0];
//         var quantity =cartBox.getElementsByClassName('quantitys')[0];
//         //var price = parseFloat(priceElement.innerText.replace('$',''))
//         var quantityElement=quantity.value
//         total=total+(price * quantityElement);
//         //in price contains cent values
//         total = Math.round(total*100)/100;

//         document.getElementsByClassName('total')[0].innerText='$'+total;
//     }
// }

// let productsItemCart=[]
// const parentElement= document.querySelector("#cart-btn");
// const products =document.querySelectorAll('.swiper-slide box ');
// const cartSumPrice=document.querySelector('.total')

// const countTheSumPrice= function(){
//     let sumprice=0;
//     productsItemCart.forEach(product =>{
//         sumPrice += product.price
//     });
//     return sumprice;
// }
// const updateShoppingCartHtml = function(){
//     if(productsItemCart.length >0){
//        let result= productsItemCart.map(product =>{
//             return`
//             <div class="boxs" id="boxes">
//             <i class="fas fa-trash"></i>
//             <img src="${product.Image}" alt="">
//             <div class="content">
//                 <h3 class="product-name">${product.name}</h3>
//                 <span class="price">${product.price}</span>
//                 <span >qty:</span><input type="number"  data-id='${product.id}' class="quantitys" 
//                      value="1"> 
//             </div>
//         </div> 
//             `
//         });
//         parentElement.innerHTML=result.join('');
//         document.querySelector('.checkout').classList.remove('hidden');
//         cartSumPrice.innerHTML="$"+countTheSumPrice();
//         }else{
//         document.querySelector('.checkout').classList.add('hidden');
//         parentElement.innerHTML=''
//         cartSumPrice.innerHTML=""
//     }
// }


// function updateProductsInCart(product){
//     for(let i = 0; i< productsItemCart.length;i++){
//         if(productsItemCart[i].id==product.id){
//             productsItemCart[i].count +=1;
//             productsItemCart[i].price =productsItemCart[i].basePrice*productsItemCart[i].count;
//             return;
//         }
//     }
//     productsItemCart.push(product);
// }



// products.forEach(product =>{
//     product.addEventListener('click',(e)=>{
//        if(e.target.classList.contains('addToCart')){
//             const productID=e.target.dataset.productId;
//             const productName=product.querySelector('product-name').innerHTML;
//             const productPrice=product.querySelector('price').innerHTML;
//             const productImage=product.querySelector('img').src;
//             let productTocart ={
//                 name: productName,
//                 image:productImage,
//                 id:productID,
//                 count:1,
//                 price:+productPrice,
//                 basePrice:+productPrice
//             }
//             updateProductsInCart(productTocart);
//             updateShoppingCartHtml();
//        }
// });
// })

let carts = document.querySelectorAll('.add-cart');

let products =[
    {
        name:'raw chicken',
        tag:'raw-chicken-meat_1203-6759',
        price:4.92,
        inCart:0
    },
    {
        name:'onions',
        tag:'raw-onions-white-surface_144627-45173',
        price:4.93,
        inCart:0
    },
    {
        name:'watermelon',
        tag:'green-striped-ripe-watermelon-with-slice-cross-section-isolated-white-background-with-copy-space-text-images-special-kind-berry-sweet-pink-flesh-with-black-seeds-side-view',
        price:4.94,
        inCart:0
    },
    {
        name:'sea food',
        tag:'grapes-strawberries-pineapple-kiwi-apricot-banana-whole-pineapple',
        price:4.95,
        inCart:0
    },
    {
        name:'fried chicken',
        tag:'grapes-strawberries-pineapple-kiwi-apricot-banana-whole-pineapple',
        price:4.96,
        inCart:0
    },
    {
        name:'bugger',
        tag:'grapes-strawberries-pineapple-kiwi-apricot-banana-whole-pineapple',
        price:4.97,
        inCart:0
    },
    {
        name:'pizza',
        tag:'grapes-strawberries-pineapple-kiwi-apricot-banana-whole-pineapple',
        price:4.98,
        inCart:0
    },
    {
        name:'benas',
        tag:'grapes-strawberries-pineapple-kiwi-apricot-banana-whole-pineapple',
        price:4.99,
        inCart:0
    }
];

for (let i = 0; i< carts.length; i++){
    carts[i].addEventListener('click',()=>{
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}


function onLoadCartNumbers(){
    let productNumbers =localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector('.fa-shopping-cart span').textContent=productNumbers;
    }
}

function cartNumbers(product){
    
    let productNumbers =localStorage.getItem('cartNumbers');
    
    productNumbers=parseInt(productNumbers);
     if(productNumbers){
       localStorage.setItem('cartNumbers',productNumbers + 1); 
       document.querySelector('.fa-shopping-cart span').textContent=productNumbers + 1;
     }else{
        localStorage.setItem('cartNumbers',1); 
        document.querySelector('.fa-shopping-cart span').textContent=1;
     }
    setItem(product);
}


function setItem(product){
    let cartItems =localStorage.getItem('productsInCart');
    cartItems= JSON.parse(cartItems);

    if(cartItems !=null){
        if (cartItems[product.tag]== undefined) {
            cartItems= {
                ...cartItems,
                [product.tag]:product
            }
        }
      cartItems[product.tag].inCart+=1;
    }else{
    products.inCart=1;

    cartItems={
        [product.tag]:product
    }
}
   
    localStorage.setItem("productsInCart",JSON.stringify( cartItems));
}
function totalCost(product){
   // console.log('the product price is',product.price);

   let cartCost=localStorage.getItem('totalCost');
   
   console.log("my cartCost is",cartCost);
   console.log(typeof cartCost)
   if(cartCost!=null){
     cartCost = parseInt(cartCost);
     localStorage.setItem("totalCost",cartCost+ product.price)
   }else{
    localStorage.setItem("totalCost",product.price);
   }
   
}
function displayCart(){
  let cartItems=localStorage.getItem("productsInCart")
  cartItems=JSON.parse(cartItems);
   
  let productContainer = document.querySelector(".shopping-cart");
  let cartCost=localStorage.getItem('totalCost');

  console.log(cartItems)
  if (cartItems && productContainer) {
      productContainer.innerHTML='';
      Object.values(cartItems).map(item =>{
        productContainer.innerHTML+=`
        <div class="boxs" >
         <i class="fas fa-trash"></i>
         <img src="image/${item.tag}.jpg" alt="">
        <div class="content">
            <h3 class="product-name">${item.name}</h3>
            <span class="price">${item.price}</span>
            <span  class="quantitys"  >qty:${item.inCart}</span>
        </div>
    </div> 
        `
      });
    productContainer.innerHTML +=`
    <div class="total">total : $${cartCost}.00</div>
        <a href="#" class="btn checkout hidden" id="check">checkout</a>
    `;
    
  }
 

}
onLoadCartNumbers();
displayCart()

let removeBtns =document.querySelector("fa-trash")
for (let i = 0; i< removeBtns.length; i++){
   var button= removeBtns[i]
   button.addEventListener('click',removeItem)
       
    };
 function removeItem(e){
    removeBtns==e.target
    removeBtns=removeBtns.parentElement.parentElement
    removeBtns.remove()
    totalCost()
 }
 