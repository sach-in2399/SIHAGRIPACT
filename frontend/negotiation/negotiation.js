document.getElementById('negotiation-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    // Collect form data
    const CropType = document.getElementById('crop-type').value;
    const InitialPriceOffered = document.getElementById('initial-price').value;
    const CounterOffer = document.getElementById('counter-offer').value;
    const Comments = document.getElementById('comments').value;

    // Retrieve token from localStorage
    const token = localStorage.getItem('token');

    // Ensure token exists before proceeding
    if (!token) {
        alert('You must be logged in to submit a negotiation offer.');
        return;
    }

    // Send the data to the backend
    try {
        const response = await fetch('http://localhost:4000/api/v1/BuyerMatch/createNegotiateForm', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`, // Include the token in Authorization header
            },
            body: JSON.stringify({ CropType, InitialPriceOffered, CounterOffer, Comments }),
        });

        const result = await response.json();

        if (result.success) {
            alert('Negotiation form submitted successfully!');
            // Optionally, redirect or clear the form
        } else {
            alert(`Error: ${result.message}`);
        }
    } catch (error) {
        console.error('Error submitting negotiation form:', error);
        alert('There was an error. Please try again.');
    }
});
