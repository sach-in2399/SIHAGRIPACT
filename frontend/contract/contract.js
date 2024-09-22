document.getElementById('contract-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    // Collect form data
    const CropType = document.getElementById('crop').value;
    const Quantity = document.getElementById('quantity').value;
    const DeliveryDate = document.getElementById('delivery-date').value;
    const PricePerKg = document.getElementById('price').value;
    const TermsAndConditions = document.getElementById('terms').value;

    // Retrieve token from localStorage
    const token = localStorage.getItem('token');

    // Ensure token exists before proceeding
    if (!token) {
        alert('You must be logged in to create a contract.');
        return;
    }

    // Send the data to the backend
    try {
        const response = await fetch('http://localhost:4000/api/v1/BuyerMatch/createContracts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`, // Include the token in Authorization header
            },
            body: JSON.stringify({ CropType, Quantity, DeliveryDate, PricePerKg, TermsAndConditions }),
        });

        const result = await response.json();

        if (result.success) {
            alert('Contract created successfully!');
            // Optionally, you can redirect the user to another page
        } else {
            alert(`Error: ${result.message}`);
        }
    } catch (error) {
        console.error('Error creating contract:', error);
        alert('There was an error. Please try again.');
    }
});
