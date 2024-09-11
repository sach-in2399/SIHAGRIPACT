const buyers = [
     {
         name: "Alexander",
         location: "north",
         crop: "wheat",
         contact: "+111111111",
         image: "buyer1.jpg"
     },

     {
         name: "Prince",
         location: "south",
         crop: "rice",
         contact: "+222222222",
         image: "buyer2.jpg"
     },

     {
         name: "Sam",
         location: "east",
         crop: "corn",
         contact: "+333333333",
         image: "buyer3.jpg"
     },

     {
         name: "Chris",
         location: "west",
         crop: "vegetables",
         contact: "+444444444",
         image: "buyer5.jpg"
     },

     {
        name: "Netra",
        location: "west",
        crop: "vegetables",
        contact: "+555555555",
        image: "buyer4.jpg"
    },

    {
        name: "Bibek",
        location: "north",
        crop: "wheat",
        contact: "+777777777",
        image: "buyer7.jpg"
    },

    {
        name: "Mohan",
        location: "south",
        crop: "wheat",
        contact: "+888888888",
        image: "buyer8.jpg"
    },

    {
        name: "Tanvi",
        location: "west",
        crop: "corn",
        contact: "+666666666",
        image: "buyer6.jpg"
    }
 ];
 
 function filterBuyers() {
    const location = document.getElementById('location').value;
    const crop = document.getElementById('crop-type').value;
    const buyerListContainer = document.getElementById('buyer-list');
    const resultsSection = document.getElementById('results');
    const recommendationsSection = document.getElementById('recommendations');

    // Clear the current list of buyers
    buyerListContainer.innerHTML = '';

    // Filter the buyers based on selected location and crop type
    const filteredBuyers = buyers.filter(buyer => {
        const locationMatch = location === 'all' || buyer.location === location;
        const cropMatch = crop === 'all' || buyer.crop === crop;
        return locationMatch && cropMatch;
    });

    // Hide the recommendations section
    recommendationsSection.style.display = 'none';

    // Display the filtered buyers
    if (filteredBuyers.length === 0) {
        buyerListContainer.innerHTML = '<p>No buyers found matching the criteria.</p>';
        resultsSection.style.display = 'block'; // Show the section even if no results
        return;
    }

    resultsSection.style.display = 'block'; // Show the section if buyers are found
    filteredBuyers.forEach(buyer => {
        const buyerCard = `
            <div class="buyer-card">
                <img src="${buyer.image}" alt="${buyer.name}">
                <div class="buyer-info">
                    <h3>${buyer.name}</h3>
                    <p>Location: ${buyer.location.charAt(0).toUpperCase() + buyer.location.slice(1)}</p>
                    <p>Interested in: ${buyer.crop.charAt(0).toUpperCase() + buyer.crop.slice(1)}</p>
                    <p>Contact: ${buyer.contact}</p>
                    <button>Contact</button>
                    <button onclick="window.location.href='../contract/contract.html'">Create Contract</button>
                    <button onclick="window.location.href='../negotiation/negotiation.html'">Negotiate Price</button>
                    <button class="pay">Pay Now</button>
                </div>
            </div>
        `;
        buyerListContainer.innerHTML += buyerCard;
    });
}

function payNow() {
    window.location.href = 'https://www.phonepe.com/how-to-pay/pay-by-phonepe/android/'; // Paytm payment link here
}

