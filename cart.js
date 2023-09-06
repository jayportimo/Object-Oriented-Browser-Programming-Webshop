// Create (initially empty) cart

let cart = [];

// Use the local storage to get products to show in cart
const storedCart = localStorage.getItem("cart");
cart = storedCart ? JSON.parse(storedCart) : [];

// Save current cart status to local storage
function saveCartToStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Add a product to cart
function addToCart(product) {
  cart.push(product);
  console.log(`Added ${product.name} to the cart.`);
  saveCartToStorage();
  updateCartDisplay();
}

// Remove a product from cart
function removeFromCart(product) {
  const indexToRemove = cart.findIndex((item) => item.name === product.name);
  if (indexToRemove !== -1) {
    cart.splice(indexToRemove, 1);
    console.log(`Removed ${product.name} from the cart.`);
    saveCartToStorage();
    updateCartDisplay();
  }
}
