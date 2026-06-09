let cart = [];

// Get all add to cart buttons
const addToCartButtons = document.querySelectorAll('.productname');
const cartButton = document.getElementById('cartbutton');
const customAlert = document.getElementById('customAlert');
const alertMessage = document.getElementById('alertMessage');
const closeAlertBtn = document.getElementById('closeAlert');

// Function to show custom alert
function showCustomAlert(message) {
    alertMessage.textContent = message;
    customAlert.classList.add('show');
}

// Function to close custom alert
function closeCustomAlert() {
    customAlert.classList.remove('show');
}

// Close alert when OK button is clicked
closeAlertBtn.addEventListener('click', closeCustomAlert);

// Close alert when clicking outside the modal
window.addEventListener('click', function(event) {
    if (event.target === customAlert) {
        closeCustomAlert();
    }
});

// Add event listeners to each add to cart button
addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Get the product name from the button's parent block
        const productBlock = button.closest('.productblock');
        let productName = '';
        
        if (productBlock.id === 'milkinfo') {
            productName = 'milk';
        } else if (productBlock.id === 'yogurtinfo') {
            productName = 'yogurt';
        } else if (productBlock.id === 'butterinfo') {
            productName = 'butter';
        } else if (productBlock.id === 'cheeseinfo') {
            productName = 'cheese';
        }
        
        // Add product to cart
        if (productName) {
            cart.push(productName);
            console.log('Current cart:', cart);
        }
    });
});

// Add event listener to cart button to show cart items
cartButton.addEventListener('click', function() {
    if (cart.length === 0) {
        showCustomAlert('Your cart is empty!');
    } else {
        const cartItems = cart.join(', ');
        showCustomAlert('🛒 Cart Items:\n' + cartItems);
    }
});
