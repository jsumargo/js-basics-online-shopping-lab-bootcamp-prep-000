var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100 + 1);
  var obj = {};
  obj[item] = price;
  cart.push(obj);
  console.log(`${item} has been added to your cart.`)
  return cart;
}

function viewCart() {
  // write your code here
  if (cart.length == 0) {
    console.log("Your shopping cart is empty.");
  } else {
    var msg = `In your cart, you have `;
    /*for(var i = 0; i < cart.length; i++){
      var item = Object.keys(cart[i]);
      var price = cart[i][item];
      msg += `${item} at ${price}`;
      if(cart.length == 1) {
        msg += `.`;
      } else {
        msg += `,`;
      }
    }*/
    console.log(msg);
  }
}

function total() {
  // write your code here
  var total = 0;
  for(var i = 0; i < cart.length; i++) {
    var item = Object.keys(cart[i]);
    total += cart[i][item];
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
