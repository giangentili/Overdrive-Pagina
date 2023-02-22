

function ready() {
    //remove items
    let removeCartButtons = document.getElementsByClassName('cart-remove');
    console.log(removeCartButtons);
    for (let i = 0; i < removeCartButtons.length; i++) {
      let button = removeCartButtons[i];
      button.addEventListener('click', removeCartItem);
    }
  
    // Quantity Changes
    let quantityInputs = document.getElementsByClassName('cart-quantity');
    for (let i = 0; i < quantityInputs.length; i++) {
      let input = quantityInputs[i];
      input.addEventListener('change', quantityChanged);
    }
    // Add to Cart
    let addCart = document.getElementsByClassName('add-cart');
    for (let i = 0; i < addCart.length; i++) {
      let button = addCart[i];
      button.addEventListener('click', addCartClicked);
    }
  }


  //add to cart

  function addCartClicked(event) {
    let button = event.target;
    let shopProducts = button.parentElement;
    let title = shopProducts.getElementsByClassName('product-title')[0].innerText;
    let price = shopProducts.getElementsByClassName('price')[0].innerText;
    let productImg = shopProducts.getElementsByClassName('product-img')[0].src;
  
    addProductToCart(title, price, productImg);
    updateTotal();
  }
  
  function addProductToCart(title, price, productImg) {
    productsAdded.push({ title, price, productImg });
    showCart();
  }
  
  function showCart() {
    console.log('shopping cart');
    let myCartRef = document.getElementById('my-cart');
  
    myCartRef.innerHTML = '';
  
    productsAdded.forEach((product) => {
      myCartRef.innerHTML += `
      <article class="cart-box">
      <div class="product-box">
      <img src="${product.productImg}" alt="" class="product-img">
      <h2 class="product-title">${product.title}</h2>
      <span class="price">${product.price}</span>
      <i class='bx bx-shopping-bag add-cart'></i> 
      <br>
     </div>
     </article>
          `;
    });
  }