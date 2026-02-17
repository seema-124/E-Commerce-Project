let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartBtn = document.getElementById("cart-btn");
const cartSidebar = document.getElementById("cart-sidebar");
const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const cartTotal = document.getElementById("cart-total");

cartBtn.addEventListener("click", () => {
    cartSidebar.classList.toggle("active");
});

function addToCart(name, price) {
    cart.push({ name, price });
    updateCart();
}

function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}

function clearCart() {
    cart = [];
    updateCart();
}

function updateCart() {
    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;

        const li = document.createElement("li");
        li.innerHTML = `
            ${item.name} - $${item.price}
            <button onclick="removeItem(${index})">X</button>
        `;
        cartItems.appendChild(li);
    });

    cartCount.textContent = cart.length;
    cartTotal.textContent = total.toFixed(2);

    localStorage.setItem("cart", JSON.stringify(cart));
}

// Load cart on page refresh
updateCart();
