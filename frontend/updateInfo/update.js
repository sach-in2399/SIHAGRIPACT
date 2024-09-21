// Select the buttons and form containers
const addressForm = document.getElementById('address-form');
const passwordForm = document.getElementById('password-form');

const updateAddressBtn = document.getElementById('update-address-btn');
const changePasswordBtn = document.getElementById('change-password-btn');

const saveAddressBtn = document.getElementById('save-address-btn');
const savePasswordBtn = document.getElementById('save-password-btn');

// Select the input fields
const addressInput = document.getElementById('address');
const newPasswordInput = document.getElementById('new-password');
const confirmPasswordInput = document.getElementById('confirm-password');

// Toggle the visibility of the address form
updateAddressBtn.addEventListener('click', () => {
    // Clear the address input field when clicking "Update Address"
    addressInput.value = '';

    // Show or hide the form
    addressForm.style.display = addressForm.style.display === 'block' ? 'none' : 'block';
    passwordForm.style.display = 'none'; // Close the password form if open
});

// Toggle the visibility of the password form
changePasswordBtn.addEventListener('click', () => {
    // Clear the password input fields when clicking "Change Password"
    newPasswordInput.value = '';
    confirmPasswordInput.value = '';

    // Show or hide the form
    passwordForm.style.display = passwordForm.style.display === 'block' ? 'none' : 'block';
    addressForm.style.display = 'none'; // Close the address form if open
});

// Save the address and hide the form
saveAddressBtn.addEventListener('click', () => {
    const address = addressInput.value;
    if (address) {
        localStorage.setItem('address', address);
        alert('Address updated successfully!');
        // Hide the address form after saving
        addressForm.style.display = 'none';
    } else {
        alert('Please enter a valid address.');
    }
});

// Save the new password and hide the form
savePasswordBtn.addEventListener('click', () => {
    const newPassword = newPasswordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (newPassword && confirmPassword) {
        if (newPassword === confirmPassword) {
            localStorage.setItem('password', newPassword);
            alert('Password updated successfully!');
            // Hide the password form after saving
            passwordForm.style.display = 'none';
        } else {
            alert('Passwords do not match. Please try again.');
        }
    } else {
        alert('Please fill out both password fields.');
    }
});

// On page load, fetch stored data (if any) and update the profile info
window.addEventListener('load', () => {
    const storedAddress = localStorage.getItem('address');
    if (storedAddress) {
        addressInput.value = storedAddress; // Pre-fill address if available
    }
});
