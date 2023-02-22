import products from './products.json' assert {type: 'json'};


  let cart = [ ]

    renderCart()




  function showProducts()
  {

    let productsRef = document.getElementById('products-container');

    products.products.forEach((product) => {
      productsRef.innerHTML += `
      <div class="cart-one">
        <div class="product-box">
        <img src=${product.image} alt="" class="product-img">
        <h2 class="product-title">${product.name}</h2>
        <span class="price">${product.price}$</span>
        <i class='bx bx-shopping-bag add-cart'></i> 
        </div>
      </div>`
    })

    setListeners();
  }

function  addToCart(event){
  let button = event.target;
  let shopProducts = button.parentElement;

  let product = {
    name:  shopProducts.getElementsByClassName("product-title")[0].innerText,
    image: shopProducts.getElementsByClassName("product-img")[0].src,
    price: shopProducts.getElementsByClassName("price")[0].innerText
  }
 
  cart.push(product);
  renderCart()
  console.log(cart)
}

function setListeners(){
  let addCart = document.getElementsByClassName('add-cart');
  
  for (let i = 0; i < addCart.length; i++) {
    let button = addCart[i];
    button.addEventListener('click', addToCart);
  }
}

function renderCart()
{
  let cartRef = document.getElementById("my-cart")

  cartRef.innerHTML = ''
  
  cart.forEach((product) => {
    cartRef.innerHTML += `
    <ul >
      <li class="product-box">
      <img width="80" src=${product.image} alt="">
      <h2 class="product-title">${product.name}</h2>
      <span class="price">${product.price}$</span>
      <i class='bx bx-shopping-bag add-cart'></i> 
      </li>
    </ul>`
  })

}


  showProducts();
