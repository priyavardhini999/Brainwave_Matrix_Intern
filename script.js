let cart = [];

// Scroll to Products Section
function scrollToProducts() {
    document.getElementById("products").scrollIntoView({ behavior: "smooth" });
}

// Add item to Cart
function addToCart(productName, price) {
    const item = cart.find(item => item.name === productName);
    if (item) {
        item.quantity++;
    } else {
        cart.push({ name: productName, price: price, quantity: 1 });
    }
    renderCart();
}

// Render Cart Items
function renderCart() {
    const cartItemsDiv = document.getElementById("cart-items");
    cartItemsDiv.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        cartItemsDiv.innerHTML += `
            <div>
                ${item.name} - $${item.price} x ${item.quantity} = $${itemTotal}
                <button onclick="removeFromCart('${item.name}')">Remove</button>
            </div>
        `;
    });
    document.getElementById("cart-total").innerText = total.toFixed(2);
}

// Remove item from Cart
function removeFromCart(productName) {
    cart = cart.filter(item => item.name !== productName);
    renderCart();
}

// Proceed to Checkout
function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        alert("Proceeding to checkout!");
        // Redirect to checkout page or handle checkout logic here
    }
}
