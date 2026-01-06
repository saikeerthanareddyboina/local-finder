// Dealers Data by Category
const dealersByCategory = {
    electronics: [
        {
            id: 1,
            name: "Tech Resellers Inc.",
            specialty: "Electronics & Gadgets",
            location: "New York, NY",
            distance: "2.1 miles",
            rating: 4.8,
            reviews: 342,
            years: 8,
            deals: 1250,
            phone: "(555) 123-4567",
            email: "contact@techresellers.com",
            about: "Specializing in buying electronics, smartphones, laptops, and gaming consoles. Quick cash offers.",
            categories: ["Electronics", "Gadgets", "Computers"],
            features: ["Free Pickup", "Instant Payment", "Verified"]
        },
        {
            id: 2,
            name: "Gadget Hub",
            specialty: "Smartphones & Tablets",
            location: "Brooklyn, NY",
            distance: "3.2 miles",
            rating: 4.6,
            reviews: 215,
            years: 5,
            deals: 890,
            phone: "(555) 234-5678",
            email: "buy@gadgethub.com",
            about: "Buying latest smartphones, tablets, and wearable tech. Top prices for Apple and Samsung.",
            categories: ["Electronics", "Smartphones", "Tablets"],
            features: ["Instant Payment", "Verified"]
        },
        {
            id: 3,
            name: "Audio Visual Experts",
            specialty: "TVs & Home Theater",
            location: "Manhattan, NY",
            distance: "1.5 miles",
            rating: 4.7,
            reviews: 189,
            years: 12,
            deals: 1100,
            phone: "(555) 345-6789",
            email: "av@experts.com",
            about: "Specializing in buying TVs, speakers, and home theater systems. Free pickup available.",
            categories: ["Electronics", "TVs", "Audio"],
            features: ["Free Pickup", "Verified", "Appraisal"]
        }
    ],
    clothing: [
        {
            id: 4,
            name: "Fashion Exchange",
            specialty: "Designer Clothing",
            location: "Manhattan, NY",
            distance: "0.8 miles",
            rating: 4.9,
            reviews: 521,
            years: 5,
            deals: 2100,
            phone: "(555) 456-7890",
            email: "sales@fashionexchange.com",
            about: "Luxury consignment store specializing in designer clothing, shoes, and accessories.",
            categories: ["Clothing", "Designer", "Accessories"],
            features: ["Authentication", "Premium", "Verified"]
        },
        {
            id: 5,
            name: "Vintage Threads",
            specialty: "Vintage Clothing",
            location: "Queens, NY",
            distance: "4.5 miles",
            rating: 4.5,
            reviews: 156,
            years: 7,
            deals: 850,
            phone: "(555) 567-8901",
            email: "vintage@threads.com",
            about: "Buying vintage and retro clothing from all eras. Special interest in 80s and 90s fashion.",
            categories: ["Clothing", "Vintage", "Retro"],
            features: ["Verified", "Special Collections"]
        },
        {
            id: 6,
            name: "Sportswear Buyers",
            specialty: "Athletic Apparel",
            location: "Bronx, NY",
            distance: "3.8 miles",
            rating: 4.4,
            reviews: 98,
            years: 3,
            deals: 420,
            phone: "(555) 678-9012",
            email: "buy@sportswear.com",
            about: "Buying brand name sportswear, sneakers, and athletic equipment. Nike, Adidas, Under Armour.",
            categories: ["Clothing", "Sportswear", "Sneakers"],
            features: ["Instant Payment", "Verified"]
        }
    ],
    furniture: [
        {
            id: 7,
            name: "Furniture Buyers Co.",
            specialty: "Home Furniture",
            location: "Brooklyn, NY",
            distance: "3.5 miles",
            rating: 4.6,
            reviews: 215,
            years: 12,
            deals: 890,
            phone: "(555) 789-0123",
            email: "buy@furnitureco.com",
            about: "Buying quality used furniture for resale. Free pickup for large items.",
            categories: ["Furniture", "Home Decor", "Antiques"],
            features: ["Free Pickup", "Appraisal", "Verified"]
        },
        {
            id: 8,
            name: "Office Furnishings",
            specialty: "Office Furniture",
            location: "Manhattan, NY",
            distance: "1.2 miles",
            rating: 4.3,
            reviews: 187,
            years: 8,
            deals: 650,
            phone: "(555) 890-1234",
            email: "office@furnishings.com",
            about: "Buying office chairs, desks, conference tables, and filing cabinets.",
            categories: ["Furniture", "Office", "Commercial"],
            features: ["Free Pickup", "Verified"]
        }
    ],
    automotive: [
        {
            id: 9,
            name: "Auto Traders LLC",
            specialty: "Car Parts & Tools",
            location: "Queens, NY",
            distance: "4.2 miles",
            rating: 4.5,
            reviews: 189,
            years: 15,
            deals: 3200,
            phone: "(555) 901-2345",
            email: "parts@autotraders.com",
            about: "Buying used auto parts, tools, and equipment. Same-day payment available.",
            categories: ["Automotive", "Tools", "Equipment"],
            features: ["Free Pickup", "Instant Payment", "Verified"]
        },
        {
            id: 10,
            name: "Wheel Specialists",
            specialty: "Wheels & Tires",
            location: "Staten Island, NY",
            distance: "6.1 miles",
            rating: 4.2,
            reviews: 134,
            years: 6,
            deals: 780,
            phone: "(555) 012-3456",
            email: "wheels@specialists.com",
            about: "Buying alloy wheels, tires, and wheel accessories. All makes and models.",
            categories: ["Automotive", "Wheels", "Tires"],
            features: ["Free Pickup", "Verified"]
        }
    ],
    sports: [
        {
            id: 11,
            name: "Sports Gear Hub",
            specialty: "Sports Equipment",
            location: "Staten Island, NY",
            distance: "6.3 miles",
            rating: 4.4,
            reviews: 98,
            years: 7,
            deals: 980,
            phone: "(555) 123-4567",
            email: "gear@sportshub.com",
            about: "Buying used sports equipment, fitness gear, and outdoor equipment.",
            categories: ["Sports", "Fitness", "Outdoor"],
            features: ["Free Pickup", "Verified"]
        },
        {
            id: 12,
            name: "Golf Pro Shop",
            specialty: "Golf Equipment",
            location: "Bronx, NY",
            distance: "5.2 miles",
            rating: 4.7,
            reviews: 156,
            years: 10,
            deals: 620,
            phone: "(555) 234-5678",
            email: "golf@proshop.com",
            about: "Buying golf clubs, bags, carts, and accessories. Top brands only.",
            categories: ["Sports", "Golf", "Equipment"],
            features: ["Verified", "Appraisal"]
        }
    ],
    collectibles: [
        {
            id: 13,
            name: "Collector's Corner",
            specialty: "Rare Collectibles",
            location: "Bronx, NY",
            distance: "5.7 miles",
            rating: 4.7,
            reviews: 156,
            years: 20,
            deals: 1500,
            phone: "(555) 345-6789",
            email: "collect@collectorscorner.com",
            about: "Specializing in rare collectibles, antiques, memorabilia, and vintage items.",
            categories: ["Collectibles", "Antiques", "Memorabilia"],
            features: ["Expert Appraisal", "Verified", "Rare Items"]
        },
        {
            id: 14,
            name: "Comic Book Store",
            specialty: "Comics & Toys",
            location: "Queens, NY",
            distance: "4.8 miles",
            rating: 4.8,
            reviews: 234,
            years: 15,
            deals: 1900,
            phone: "(555) 456-7890",
            email: "comics@store.com",
            about: "Buying comic books, action figures, and collectible toys. Golden Age to Modern.",
            categories: ["Collectibles", "Comics", "Toys"],
            features: ["Verified", "Grading Available"]
        }
    ]
};

// Categories Data
const categories = [
    { id: 'electronics', name: 'Electronics', icon: 'laptop', dealers: 856 },
    { id: 'clothing', name: 'Clothing & Fashion', icon: 'tshirt', dealers: 642 },
    { id: 'furniture', name: 'Furniture', icon: 'couch', dealers: 423 },
    { id: 'automotive', name: 'Automotive', icon: 'car', dealers: 318 },
    { id: 'sports', name: 'Sports Equipment', icon: 'basketball-ball', dealers: 297 },
    { id: 'collectibles', name: 'Collectibles', icon: 'gem', dealers: 189 },
    { id: 'books', name: 'Books & Media', icon: 'book', dealers: 156 },
    { id: 'tools', name: 'Tools & Equipment', icon: 'tools', dealers: 234 },
    { id: 'jewelry', name: 'Jewelry', icon: 'gem', dealers: 187 },
    { id: 'musical', name: 'Musical Instruments', icon: 'guitar', dealers: 123 }
];

// Application State
let currentUser = null;
let currentCategory = 'electronics';
let currentDealers = [];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Setup event listeners
    setupEventListeners();
    
    // Show welcome notification
    setTimeout(() => {
        showNotification('Welcome to LocalDeal! Connect with local dealers to sell your products.', 'info');
    }, 1000);
});

// Setup Event Listeners
function setupEventListeners() {
    // Navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href');
            
            // Smooth scroll to section
            if (target.startsWith('#')) {
                const element = document.querySelector(target);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
            
            // Update active nav link
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Auth buttons
    document.getElementById('login-btn').addEventListener('click', () => showModal('login'));
    document.getElementById('register-btn').addEventListener('click', () => showModal('register'));
    document.getElementById('cta-signup').addEventListener('click', () => showModal('register'));
    
    // Find dealers buttons
    document.getElementById('find-dealers-hero').addEventListener('click', showDealersPage);
    document.getElementById('cta-find-dealers').addEventListener('click', showDealersPage);
    document.getElementById('view-all-categories').addEventListener('click', showDealersPage);
    
    // Start selling button
    document.getElementById('start-selling-hero').addEventListener('click', () => {
        if (!currentUser) {
            showModal('register');
            showNotification('Create an account to start selling', 'info');
        } else {
            showNotification('Redirecting to seller dashboard...', 'info');
        }
    });
    
    // Category cards on landing page
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            showDealersPage(category);
        });
    });
    
    // Back to home button
    document.getElementById('back-to-home').addEventListener('click', showLandingPage);
    
    // Modal close buttons
    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.modal').forEach(modal => {
                modal.classList.remove('active');
            });
        });
    });
    
    // Modal switches
    document.getElementById('switch-to-register').addEventListener('click', (e) => {
        e.preventDefault();
        showModal('register');
    });
    
    document.getElementById('switch-to-login').addEventListener('click', (e) => {
        e.preventDefault();
        showModal('login');
    });
    
    // Close modal when clicking outside
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    });
    
    // Forms
    document.getElementById('login-form').addEventListener('submit', handleLogin);
    document.getElementById('register-form').addEventListener('submit', handleRegister);
}

// Show Landing Page
function showLandingPage() {
    document.getElementById('landing-page').style.display = 'block';
    document.getElementById('dealers-page').style.display = 'none';
    
    // Update nav
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    document.querySelector('.nav-link[href="#home"]').classList.add('active');
}

// Show Dealers Page
function showDealersPage(category = 'electronics') {
    document.getElementById('landing-page').style.display = 'none';
    document.getElementById('dealers-page').style.display = 'block';
    
    // Load category
    loadCategory(category);
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Load Category
function loadCategory(category) {
    currentCategory = category;
    currentDealers = dealersByCategory[category] || [];
    
    // Generate category tabs
    generateCategoryTabs();
    
    // Load dealers
    loadDealers();
    
    // Update active tab
    document.querySelectorAll('.category-tab').forEach(tab => {
        tab.classList.remove('active');
        if (tab.getAttribute('data-category') === category) {
            tab.classList.add('active');
        }
    });
}

// Generate Category Tabs
function generateCategoryTabs() {
    const tabsContainer = document.getElementById('category-tabs');
    tabsContainer.innerHTML = '';
    
    categories.forEach(category => {
        const tab = document.createElement('button');
        tab.className = `category-tab ${category.id === currentCategory ? 'active' : ''}`;
        tab.setAttribute('data-category', category.id);
        tab.innerHTML = `
            <i class="fas fa-${category.icon}"></i>
            ${category.name}
            <span style="margin-left: 8px; background: rgba(255,255,255,0.2); padding: 2px 8px; border-radius: 10px; font-size: 0.8rem;">
                ${category.dealers}
            </span>
        `;
        
        tab.addEventListener('click', () => loadCategory(category.id));
        tabsContainer.appendChild(tab);
    });
}

// Load Dealers
function loadDealers() {
    const container = document.getElementById('dealers-container');
    container.innerHTML = '';
    
    if (currentDealers.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
                <i class="fas fa-search" style="font-size: 4rem; color: var(--gray-light); margin-bottom: 20px;"></i>
                <h3 style="color: var(--dark); margin-bottom: 10px;">No Dealers Found</h3>
                <p style="color: var(--gray); max-width: 400px; margin: 0 auto;">
                    No dealers found in this category. Try another category.
                </p>
            </div>
        `;
        return;
    }
    
    currentDealers.forEach(dealer => {
        const dealerCard = document.createElement('div');
        dealerCard.className = 'dealer-card';
        dealerCard.setAttribute('data-id', dealer.id);
        
        dealerCard.innerHTML = `
            <div class="dealer-header">
                <div class="dealer-rating">
                    <i class="fas fa-star"></i> ${dealer.rating}
                    <span style="opacity: 0.7; font-size: 0.8rem;">(${dealer.reviews})</span>
                </div>
                
                <div class="dealer-avatar">
                    ${dealer.name.split(' ').map(n => n[0]).join('')}
                </div>
                
                <h3 class="dealer-name">${dealer.name}</h3>
                <p class="dealer-specialty">${dealer.specialty}</p>
                <div class="dealer-location">
                    <i class="fas fa-map-marker-alt"></i>
                    ${dealer.location} • ${dealer.distance} away
                </div>
            </div>
            
            <div class="dealer-body">
                <div class="dealer-stats">
                    <div class="stat">
                        <div class="stat-value">${dealer.years}+</div>
                        <div class="stat-label">Years</div>
                    </div>
                    <div class="stat">
                        <div class="stat-value">${formatNumber(dealer.deals)}</div>
                        <div class="stat-label">Deals</div>
                    </div>
                    <div class="stat">
                        <div class="stat-value">${dealer.rating}/5</div>
                        <div class="stat-label">Rating</div>
                    </div>
                </div>
                
                <div class="dealer-info">
                    <i class="fas fa-phone"></i>
                    <span>${dealer.phone}</span>
                </div>
                
                <div class="dealer-info">
                    <i class="fas fa-envelope"></i>
                    <span>${dealer.email}</span>
                </div>
                
                <div class="dealer-tags">
                    ${dealer.categories.map(cat => `<span class="tag">${cat}</span>`).join('')}
                    ${dealer.features.map(feature => `<span class="tag" style="background: rgba(16, 185, 129, 0.1); color: var(--secondary);">${feature}</span>`).join('')}
                </div>
                
                <p style="color: var(--gray); font-size: 0.95rem; margin: 15px 0;">
                    ${dealer.about}
                </p>
                
                <div class="dealer-actions">
                    <button class="btn btn-primary contact-dealer-btn">
                        <i class="fas fa-comment"></i> Contact
                    </button>
                    <button class="btn btn-outline view-profile-btn">
                        <i class="fas fa-eye"></i> View Profile
                    </button>
                </div>
            </div>
        `;
        
        // Add event listeners
        dealerCard.querySelector('.contact-dealer-btn').addEventListener('click', () => {
            contactDealer(dealer.id);
        });
        
        dealerCard.querySelector('.view-profile-btn').addEventListener('click', () => {
            viewDealerProfile(dealer.id);
        });
        
        container.appendChild(dealerCard);
    });
    
    // Update page header
    const categoryName = categories.find(c => c.id === currentCategory)?.name || currentCategory;
    document.querySelector('.page-header h1').textContent = `${categoryName} Dealers`;
    document.querySelector('.page-header p').textContent = `Found ${currentDealers.length} dealers in ${categoryName.toLowerCase()}`;
}

// Show Modal
function showModal(modalType) {
    // Hide all modals first
    document.querySelectorAll('.modal').forEach(modal => {
        modal.classList.remove('active');
    });
    
    // Show requested modal
    document.getElementById(`${modalType}-modal`).classList.add('active');
}

// Handle Login
function handleLogin(e) {
    e.preventDefault();
    
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    // Simple validation
    if (!email || !password) {
        showNotification('Please enter email and password', 'error');
        return;
    }
    
    const loginBtn = document.querySelector('#login-form button[type="submit"]');
    const originalText = loginBtn.innerHTML;
    
    // Show loading
    loginBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Logging in...';
    loginBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        // For demo, accept any login
        currentUser = {
            name: email.split('@')[0],
            email: email,
            type: 'seller'
        };
        
        showNotification('Login successful! Welcome back.', 'success');
        
        // Update auth buttons
        updateAuthUI();
        
        // Close modal
        document.getElementById('login-modal').classList.remove('active');
        
        // Reset form
        e.target.reset();
        
        // Reset button
        loginBtn.innerHTML = originalText;
        loginBtn.disabled = false;
    }, 1500);
}

// Handle Register
function handleRegister(e) {
    e.preventDefault();
    
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirm = document.getElementById('register-confirm').value;
    const userType = document.getElementById('user-type').value;
    
    // Validation
    if (!name || !email || !password || !confirm || !userType) {
        showNotification('Please fill in all fields', 'error');
        return;
    }
    
    if (password.length < 8) {
        showNotification('Password must be at least 8 characters', 'error');
        return;
    }
    
    if (password !== confirm) {
        showNotification('Passwords do not match', 'error');
        return;
    }
    
    const registerBtn = document.querySelector('#register-form button[type="submit"]');
    const originalText = registerBtn.innerHTML;
    
    // Show loading
    registerBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Creating account...';
    registerBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        currentUser = {
            name: name,
            email: email,
            type: userType
        };
        
        showNotification('Account created successfully! Welcome to LocalDeal.', 'success');
        
        // Update auth buttons
        updateAuthUI();
        
        // Close modal
        document.getElementById('register-modal').classList.remove('active');
        
        // Reset form
        e.target.reset();
        
        // Reset button
        registerBtn.innerHTML = originalText;
        registerBtn.disabled = false;
        
        // Show dealers page
        showDealersPage();
    }, 2000);
}

// Update Auth UI
function updateAuthUI() {
    const authButtons = document.querySelector('.auth-buttons');
    
    if (currentUser) {
        authButtons.innerHTML = `
            <div style="display: flex; align-items: center; gap: 15px;">
                <div style="text-align: right;">
                    <div style="font-weight: 600; color: var(--dark);">${currentUser.name}</div>
                    <div style="font-size: 0.85rem; color: var(--gray);">${currentUser.type === 'seller' ? 'Seller' : 'Dealer'}</div>
                </div>
                <button class="btn btn-outline" id="logout-btn">
                    <i class="fas fa-sign-out-alt"></i> Logout
                </button>
            </div>
        `;
        
        document.getElementById('logout-btn').addEventListener('click', logout);
    } else {
        authButtons.innerHTML = `
            <button class="btn btn-outline" id="login-btn">
                <i class="fas fa-sign-in-alt"></i> Login
            </button>
            <button class="btn btn-primary" id="register-btn">
                <i class="fas fa-user-plus"></i> Sign Up
            </button>
        `;
        
        // Re-attach event listeners
        document.getElementById('login-btn').addEventListener('click', () => showModal('login'));
        document.getElementById('register-btn').addEventListener('click', () => showModal('register'));
    }
}

// Logout
function logout() {
    currentUser = null;
    updateAuthUI();
    showNotification('Logged out successfully', 'info');
}

// Contact Dealer
function contactDealer(dealerId) {
    const dealer = currentDealers.find(d => d.id === dealerId);
    if (!dealer) return;
    
    if (!currentUser) {
        showModal('login');
        showNotification('Please login to contact dealers', 'info');
        return;
    }
    
    showNotification(`Contacting ${dealer.name}...`, 'info');
    
    // In a real app, this would open a chat interface
    setTimeout(() => {
        showNotification(`Connected to ${dealer.name}! You can now send messages.`, 'success');
    }, 1000);
}

// View Dealer Profile
function viewDealerProfile(dealerId) {
    const dealer = currentDealers.find(d => d.id === dealerId);
    if (!dealer) return;
    
    showNotification(`Opening ${dealer.name}'s profile...`, 'info');
    
    // In a real app, this would open a detailed profile page
    setTimeout(() => {
        const message = `
            ${dealer.name}
            • Specialty: ${dealer.specialty}
            • Location: ${dealer.location}
            • Rating: ${dealer.rating}/5.0 (${dealer.reviews} reviews)
            • Years in Business: ${dealer.years}
            • Total Deals: ${formatNumber(dealer.deals)}
            • Contact: ${dealer.phone} | ${dealer.email}
        `;
        
        showNotification(message, 'info');
    }, 500);
}

// Show Notification
function showNotification(message, type = 'info') {
    const notification = document.getElementById('notification');
    const notificationText = document.getElementById('notification-text');
    
    notificationText.textContent = message;
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        <span id="notification-text">${message}</span>
    `;
    
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 4000);
}

// Helper Functions
function formatNumber(num) {
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
}