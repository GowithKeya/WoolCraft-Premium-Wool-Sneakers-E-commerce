// Wool Sneakers E-commerce - Main JavaScript
// Handles cart management, product filtering, animations, and interactive features

class WoolSneakersApp {
    constructor() {
        this.cart = JSON.parse(localStorage.getItem('woolCart')) || [];
        this.products = this.initializeProducts();
        this.filters = {
            woolType: [],
            color: [],
            size: [],
            priceRange: [0, 300],
            style: []
        };
        this.init();
    }

    init() {
        this.updateCartCounter();
        this.initializeAnimations();
        this.bindEvents();
        this.initializeFilters();
        this.loadProducts();
    }

    initializeProducts() {
        return [
            {
                id: 1,
                name: "Merino Classic",
                color: "Oat",
                price: 165,
                woolType: "Merino",
                style: "Casual",
                sizes: [7, 8, 9, 10, 11],
                image: "resources/product-1.jpg",
                description: "Timeless comfort meets modern style with our premium merino wool classic.",
                features: ["Temperature regulating", "Moisture wicking", "Odor resistant"]
            },
            {
                id: 2,
                name: "Merino Classic",
                color: "Fog Gray",
                price: 165,
                woolType: "Merino",
                style: "Casual",
                sizes: [6, 7, 8, 9, 10],
                image: "resources/product-2.jpg",
                description: "Sophisticated gray tones in our signature merino wool construction.",
                features: ["Temperature regulating", "Moisture wicking", "Odor resistant"]
            },
            {
                id: 3,
                name: "Urban Runner",
                color: "Charcoal",
                price: 185,
                woolType: "Merino",
                style: "Athletic",
                sizes: [7, 8, 9, 10, 11, 12],
                image: "resources/product-3.jpg",
                description: "Performance meets comfort in our athletic wool runner.",
                features: ["Enhanced cushioning", "Breathable mesh", "Durable outsole"]
            },
            {
                id: 4,
                name: "Urban Runner",
                color: "Cream",
                price: 185,
                woolType: "Merino",
                style: "Athletic",
                sizes: [6, 7, 8, 9, 10, 11],
                image: "resources/product-4.jpg",
                description: "Clean athletic style with natural wool comfort.",
                features: ["Enhanced cushioning", "Breathable mesh", "Durable outsole"]
            },
            {
                id: 5,
                name: "Cashmere Luxe",
                color: "Taupe",
                price: 285,
                woolType: "Cashmere",
                style: "Luxury",
                sizes: [7, 8, 9, 10],
                image: "resources/product-5.jpg",
                description: "Ultimate luxury with premium cashmere wool construction.",
                features: ["Premium cashmere", "Handcrafted details", "Luxury comfort"]
            },
            {
                id: 6,
                name: "Cashmere Luxe",
                color: "Sage",
                price: 285,
                woolType: "Cashmere",
                style: "Luxury",
                sizes: [6, 7, 8, 9, 10, 11],
                image: "resources/product-6.jpg",
                description: "Sophisticated sage green in our luxury cashmere line.",
                features: ["Premium cashmere", "Handcrafted details", "Luxury comfort"]
            },
            {
                id: 7,
                name: "Alpine Trail",
                color: "Forest",
                price: 195,
                woolType: "Alpaca",
                style: "Athletic",
                sizes: [8, 9, 10, 11, 12],
                image: "resources/product-7.jpg",
                description: "Rugged outdoor performance with natural alpaca wool.",
                features: ["Weather resistant", "Enhanced grip", "Alpaca warmth"]
            },
            {
                id: 8,
                name: "Alpine Trail",
                color: "Stone",
                price: 195,
                woolType: "Alpaca",
                style: "Athletic",
                sizes: [7, 8, 9, 10, 11],
                image: "resources/product-8.jpg",
                description: "Light stone gray alpine wool sneaker for outdoor adventures.",
                features: ["Weather resistant", "Enhanced grip", "Alpaca warmth"]
            },
            {
                id: 9,
                name: "City Walker",
                color: "Midnight",
                price: 155,
                woolType: "Merino",
                style: "Casual",
                sizes: [7, 8, 9, 10, 11],
                image: "resources/product-9.jpg",
                description: "Sophisticated slip-on design for urban commuting.",
                features: ["Slip-on convenience", "Urban tread", "All-day comfort"]
            },
            {
                id: 10,
                name: "City Walker",
                color: "Dusk",
                price: 155,
                woolType: "Merino",
                style: "Casual",
                sizes: [6, 7, 8, 9, 10],
                image: "resources/product-10.jpg",
                description: "Soft dusk gray slip-on for effortless city style.",
                features: ["Slip-on convenience", "Urban tread", "All-day comfort"]
            },
            {
                id: 11,
                name: "Weekend Slip-On",
                color: "Sand",
                price: 145,
                woolType: "Merino",
                style: "Casual",
                sizes: [7, 8, 9, 10, 11, 12],
                image: "resources/product-11.jpg",
                description: "Relaxed weekend style with natural wool comfort.",
                features: ["Easy slip-on", "Weekend comfort", "Natural warmth"]
            },
            {
                id: 12,
                name: "Weekend Slip-On",
                color: "Clay",
                price: 145,
                woolType: "Merino",
                style: "Casual",
                sizes: [6, 7, 8, 9, 10, 11],
                image: "resources/product-12.jpg",
                description: "Earthy clay tone in our comfortable weekend slip-on.",
                features: ["Easy slip-on", "Weekend comfort", "Natural warmth"]
            }
        ];
    }

    // Cart Management
    addToCart(productId, size = 9) {
        const product = this.products.find(p => p.id === productId);
        if (!product) return;

        const existingItem = this.cart.find(item => item.id === productId && item.size === size);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.cart.push({
                ...product,
                size: size,
                quantity: 1
            });
        }

        this.saveCart();
        this.updateCartCounter();
        this.showAddToCartAnimation();
    }

    removeFromCart(productId, size) {
        this.cart = this.cart.filter(item => !(item.id === productId && item.size === size));
        this.saveCart();
        this.updateCartCounter();
        this.renderCart();
    }

    updateQuantity(productId, size, newQuantity) {
        if (newQuantity <= 0) {
            this.removeFromCart(productId, size);
            return;
        }

        const item = this.cart.find(item => item.id === productId && item.size === size);
        if (item) {
            item.quantity = newQuantity;
            this.saveCart();
            this.updateCartCounter();
            this.renderCart();
        }
    }

    clearCart() {
        this.cart = [];
        this.saveCart();
        this.updateCartCounter();
        this.renderCart();
    }

    saveCart() {
        localStorage.setItem('woolCart', JSON.stringify(this.cart));
    }

    updateCartCounter() {
        const counter = document.querySelector('.cart-counter');
        const totalItems = this.cart.reduce((sum, item) => sum + item.quantity, 0);
        if (counter) {
            counter.textContent = totalItems;
            counter.style.display = totalItems > 0 ? 'block' : 'none';
        }
    }

    // Product Filtering
    applyFilters() {
        let filteredProducts = [...this.products];

        if (this.filters.woolType.length > 0) {
            filteredProducts = filteredProducts.filter(p => 
                this.filters.woolType.includes(p.woolType)
            );
        }

        if (this.filters.color.length > 0) {
            filteredProducts = filteredProducts.filter(p => 
                this.filters.color.includes(p.color)
            );
        }

        if (this.filters.style.length > 0) {
            filteredProducts = filteredProducts.filter(p => 
                this.filters.style.includes(p.style)
            );
        }

        filteredProducts = filteredProducts.filter(p => 
            p.price >= this.filters.priceRange[0] && p.price <= this.filters.priceRange[1]
        );

        this.renderProducts(filteredProducts);
        this.updateResultsCounter(filteredProducts.length);
    }

    updateResultsCounter(count) {
        const counter = document.querySelector('.results-counter');
        if (counter) {
            counter.textContent = `${count} products found`;
        }
    }

    // Rendering Functions
    renderProducts(products = this.products) {
        const container = document.querySelector('.products-grid');
        if (!container) return;

        container.innerHTML = products.map(product => `
            <div class="product-card" data-product-id="${product.id}">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                    <div class="product-overlay">
                        <button class="quick-view-btn" onclick="app.openProductModal(${product.id})">
                            Quick View
                        </button>
                    </div>
                </div>
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-color">${product.color}</p>
                    <p class="product-price">$${product.price}</p>
                    <div class="product-actions">
                        <select class="size-select" data-product-id="${product.id}">
                            ${product.sizes.map(size => `<option value="${size}">Size ${size}</option>`).join('')}
                        </select>
                        <button class="add-to-cart-btn" onclick="app.addToCart(${product.id}, document.querySelector('[data-product-id=\\'${product.id}\\']').value)">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        `).join('');

        this.initializeProductAnimations();
    }

    renderCart() {
        const container = document.querySelector('.cart-items');
        if (!container) return;

        if (this.cart.length === 0) {
            container.innerHTML = `
                <div class="empty-cart">
                    <p>Your cart is empty</p>
                    <a href="products.html" class="continue-shopping-btn">Continue Shopping</a>
                </div>
            `;
            return;
        }

        container.innerHTML = this.cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <p>Color: ${item.color}</p>
                    <p>Size: ${item.size}</p>
                    <p class="price">$${item.price}</p>
                </div>
                <div class="cart-item-controls">
                    <div class="quantity-controls">
                        <button onclick="app.updateQuantity(${item.id}, ${item.size}, ${item.quantity - 1})">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="app.updateQuantity(${item.id}, ${item.size}, ${item.quantity + 1})">+</button>
                    </div>
                    <button class="remove-item" onclick="app.removeFromCart(${item.id}, ${item.size})">Remove</button>
                </div>
            </div>
        `).join('');

        this.updateCartTotal();
    }

    updateCartTotal() {
        const subtotal = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const tax = subtotal * 0.08; // 8% tax
        const shipping = subtotal > 150 ? 0 : 15; // Free shipping over $150
        const total = subtotal + tax + shipping;

        const totalsContainer = document.querySelector('.cart-totals');
        if (totalsContainer) {
            totalsContainer.innerHTML = `
                <div class="totals-row">
                    <span>Subtotal:</span>
                    <span>$${subtotal.toFixed(2)}</span>
                </div>
                <div class="totals-row">
                    <span>Tax:</span>
                    <span>$${tax.toFixed(2)}</span>
                </div>
                <div class="totals-row">
                    <span>Shipping:</span>
                    <span>${shipping === 0 ? 'FREE' : '$' + shipping.toFixed(2)}</span>
                </div>
                <div class="totals-row total">
                    <span>Total:</span>
                    <span>$${total.toFixed(2)}</span>
                </div>
            `;
        }
    }

    // Modal Functions
    openProductModal(productId) {
        const product = this.products.find(p => p.id === productId);
        if (!product) return;

        const modal = document.createElement('div');
        modal.className = 'product-modal';
        modal.innerHTML = `
            <div class="modal-overlay" onclick="app.closeProductModal()"></div>
            <div class="modal-content">
                <button class="modal-close" onclick="app.closeProductModal()">&times;</button>
                <div class="modal-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="modal-details">
                    <h2>${product.name}</h2>
                    <p class="modal-color">${product.color}</p>
                    <p class="modal-price">$${product.price}</p>
                    <p class="modal-description">${product.description}</p>
                    <div class="modal-features">
                        ${product.features.map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
                    </div>
                    <div class="modal-actions">
                        <select class="modal-size-select">
                            ${product.sizes.map(size => `<option value="${size}">Size ${size}</option>`).join('')}
                        </select>
                        <button class="modal-add-to-cart" onclick="app.addToCart(${product.id}, document.querySelector('.modal-size-select').value); app.closeProductModal();">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
        setTimeout(() => modal.classList.add('active'), 10);
    }

    closeProductModal() {
        const modal = document.querySelector('.product-modal');
        if (modal) {
            modal.classList.remove('active');
            setTimeout(() => modal.remove(), 300);
        }
    }

    // Animations
    initializeAnimations() {
        // Initialize scroll animations
        this.initScrollAnimations();
        
        // Initialize hover effects
        this.initHoverEffects();
    }

    initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });
    }

    initHoverEffects() {
        document.querySelectorAll('.product-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-8px) rotateX(5deg)';
                card.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) rotateX(0deg)';
                card.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
            });
        });
    }

    initializeProductAnimations() {
        const productCards = document.querySelectorAll('.product-card');
        productCards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
            card.classList.add('animate-in');
        });
    }

    showAddToCartAnimation() {
        const counter = document.querySelector('.cart-counter');
        if (counter) {
            counter.classList.add('pulse');
            setTimeout(() => counter.classList.remove('pulse'), 600);
        }
    }

    // Event Binding
    bindEvents() {
        // Filter events
        document.addEventListener('change', (e) => {
            if (e.target.classList.contains('filter-checkbox')) {
                this.handleFilterChange(e.target);
            }
        });

        // Search events
        const searchInput = document.querySelector('.search-input');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.handleSearch(e.target.value);
            });
        }

        // Clear filters
        const clearFiltersBtn = document.querySelector('.clear-filters');
        if (clearFiltersBtn) {
            clearFiltersBtn.addEventListener('click', () => {
                this.clearAllFilters();
            });
        }
    }

    handleFilterChange(checkbox) {
        const filterType = checkbox.dataset.filterType;
        const value = checkbox.value;

        if (checkbox.checked) {
            if (!this.filters[filterType].includes(value)) {
                this.filters[filterType].push(value);
            }
        } else {
            this.filters[filterType] = this.filters[filterType].filter(v => v !== value);
        }

        this.applyFilters();
    }

    handleSearch(query) {
        const filteredProducts = this.products.filter(product =>
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            product.color.toLowerCase().includes(query.toLowerCase()) ||
            product.description.toLowerCase().includes(query.toLowerCase())
        );

        this.renderProducts(filteredProducts);
        this.updateResultsCounter(filteredProducts.length);
    }

    clearAllFilters() {
        this.filters = {
            woolType: [],
            color: [],
            size: [],
            priceRange: [0, 300],
            style: []
        };

        document.querySelectorAll('.filter-checkbox').forEach(checkbox => {
            checkbox.checked = false;
        });

        this.applyFilters();
    }

    initializeFilters() {
        // Initialize price range slider
        const priceRange = document.querySelector('.price-range-slider');
        if (priceRange) {
            priceRange.addEventListener('input', (e) => {
                this.filters.priceRange[1] = parseInt(e.target.value);
                this.applyFilters();
            });
        }
    }

    loadProducts() {
        if (document.querySelector('.products-grid')) {
            this.renderProducts();
        }
        if (document.querySelector('.cart-items')) {
            this.renderCart();
        }
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new WoolSneakersApp();
});

// Utility functions
function formatPrice(price) {
    return `$${price.toFixed(2)}`;
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}