document.getElementById('signup-form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent form submission and page reload

    // Collect form data
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Validate form
    if (!username || !email || !phone || !password || !confirmPassword) {
        alert('Please fill in all the fields.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // Construct data object to send
    const data = {
        Username: username,
        Email: email,
        PhoneNumber: phone,
        Password: password,
        ConfirmPassword: confirmPassword
    };

    try {
        const response = await fetch('http://localhost:4000/api/v1/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (result.success) {
            alert('Signup successful! Redirecting to login...');
            window.location.href = "../login/login.html";
        } else {
            alert(`Signup failed: ${result.message}`);
        }
    } catch (error) {
        console.error('Error during signup:', error);
        alert(`Something went wrong. Try again later.`);
    }
});

function signUpWithGoogle() {
    // TODO: Implement Google OAuth sign-up flow
    console.log("Google Sign-Up triggered");
}
