/**
 * K-Food Odyssey - Interactive Client-Side JavaScript
 * Pure Vanilla JS, simple and highly intuitive for beginners!
 */

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. Cart & Ingredients Shopping System
    // ==========================================
    const cart = {};
    const cartCountEl = document.getElementById('cartCount');
    const cartButton = document.getElementById('cartButton');
    const cartModal = document.getElementById('cartModal');
    const closeModal = document.getElementById('closeModal');
    const cartItemsList = document.getElementById('cartItemsList');
    const cartTotalItems = document.getElementById('cartTotalItems');
    const checkoutBtn = document.getElementById('checkoutBtn');
    const toastContainer = document.getElementById('toastContainer');

    // Add to Cart Handlers
    const buyButtons = document.querySelectorAll('.buy-btn');
    buyButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Get item name from button's data attribute
            const itemName = button.getAttribute('data-item');
            
            // Add or increment in cart
            if (cart[itemName]) {
                cart[itemName]++;
            } else {
                cart[itemName] = 1;
            }

            // Update UI
            updateCartCount();
            showToast(`🎉 ${itemName} added to your basket!`);
        });
    });

    // Update the visual cart count in header
    function updateCartCount() {
        let total = 0;
        for (const item in cart) {
            total += cart[item];
        }
        cartCountEl.textContent = total;

        // Subtle pop animation for the cart counter
        cartCountEl.style.transform = 'scale(1.3)';
        setTimeout(() => {
            cartCountEl.style.transform = 'scale(1)';
        }, 200);
    }

    // Toast Notification System
    function showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>${message}</span>`;
        
        toastContainer.appendChild(toast);

        // Slide out and remove toast after 3 seconds
        setTimeout(() => {
            toast.style.transform = 'translateX(120%)';
            toast.style.transition = 'all 0.35s ease-in-out';
            setTimeout(() => {
                toast.remove();
            }, 350);
        }, 3000);
    }

    // Modal Control: Open Cart
    cartButton.addEventListener('click', () => {
        renderCartItems();
        cartModal.classList.add('active');
    });

    // Modal Control: Close Cart
    closeModal.addEventListener('click', () => {
        cartModal.classList.remove('active');
    });

    // Close Modal on clicking outside the box
    window.addEventListener('click', (e) => {
        if (e.target === cartModal) {
            cartModal.classList.remove('active');
        }
    });

    // Render cart items inside modal
    function renderCartItems() {
        cartItemsList.innerHTML = '';
        let totalItems = 0;
        const itemsArray = Object.keys(cart);

        if (itemsArray.length === 0) {
            cartItemsList.innerHTML = '<p class="empty-cart-msg">Your basket is empty. Choose some delicious ingredients!</p>';
            cartTotalItems.textContent = '0';
            checkoutBtn.style.display = 'none';
            return;
        }

        checkoutBtn.style.display = 'block';

        itemsArray.forEach(itemName => {
            const quantity = cart[itemName];
            totalItems += quantity;

            const cartItemDiv = document.createElement('div');
            cartItemDiv.className = 'cart-item';
            cartItemDiv.innerHTML = `
                <span class="cart-item-name">${itemName}</span>
                <span class="cart-item-qty">Qty: ${quantity}</span>
            `;
            cartItemsList.appendChild(cartItemDiv);
        });

        cartTotalItems.textContent = totalItems;
    }

    // Checkout Button Handler
    checkoutBtn.addEventListener('click', () => {
        alert('Thank you for choosing Seoul Soul Food! 🥢\n\nThis is a demo store, but in a real shop, you would now be redirected to the secure payment screen for your authentic Korean ingredients.');
        // Reset cart
        for (const key in cart) {
            delete cart[key];
        }
        updateCartCount();
        cartModal.classList.remove('active');
        showToast('🛒 Order processed successfully!');
    });


    // ==========================================
    // 2. Q&A Form Submission
    // ==========================================
    const qaForm = document.getElementById('qaForm');

    qaForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Stop page reload

        const name = document.getElementById('userName').value;
        const email = document.getElementById('userEmail').value;
        const question = document.getElementById('userQuestion').value;

        // Custom Thank-You Message
        const alertMessage = `Thank you, ${name}! 🧡\n\nWe have received your question regarding:\n"${question}"\n\nOur K-Food expert chefs will review your inquiry and send a detailed guide to your email (${email}) within 24 hours. Keep loving Korean food!`;
        
        alert(alertMessage);

        // Reset the form
        qaForm.reset();
        showToast('✉️ Question submitted successfully!');
    });

});
