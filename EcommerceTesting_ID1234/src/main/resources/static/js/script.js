// script.js - Main JavaScript file for E-commerce application

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize components
    initializeCart();
    loadProducts();
    setupEventListeners();
});

// Cart functionality
function initializeCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    updateCartDisplay(cart);
}

function updateCartDisplay(cart) {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}

function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay(cart);
}

// Product loading
function loadProducts() {
    fetch('/api/products')
        .then(response => response.json())
        .then(products => {
            const productList = document.getElementById('product-list');
            products.forEach(product => {
                const productElement = createProductElement(product);
                productList.appendChild(productElement);
            });
        })
        .catch(error => console.error('Error loading products:', error));
}

function createProductElement(product) {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p>Price: $${product.price}</p>
        <button class="add-to-cart" data-product-id="${product.id}">Add to Cart</button>
    `;
    return div;
}

// Event listeners
function setupEventListeners() {
    document.body.addEventListener('click', function(event) {
        if (event.target.classList.contains('add-to-cart')) {
            const productId = event.target.getAttribute('data-product-id');
            addToCart(productId);
        }
    });
}

// Search functionality
function searchProducts(query) {
    fetch(`/api/products/search?q=${encodeURIComponent(query)}`)
        .then(response => response.json())
        .then(products => {
            const productList = document.getElementById('product-list');
            productList.innerHTML = '';
            products.forEach(product => {
                const productElement = createProductElement(product);
                productList.appendChild(productElement);
            });
        })
        .catch(error => console.error('Error searching products:', error));
}

// Initialize search when the page loads
const searchForm = document.getElementById('search-form');
if (searchForm) {
    searchForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const searchInput = document.getElementById('search-input');
        searchProducts(searchInput.value);
    });
}