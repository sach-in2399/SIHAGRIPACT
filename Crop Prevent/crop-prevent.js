document.getElementById('wheat-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    const soilPh = document.getElementById('soil-ph').value;
    const soilMoisture = document.getElementById('soil-moisture').value;
    const pesticides = document.getElementById('pesticides').value;

    let feedbackMessage = 'Your yield will be good this season.';

    if (soilPh === '<5.5 or >8.0') {
        feedbackMessage += ' Tips to improve: Adjust soil pH for optimal growth.';
    }
    if (soilMoisture === '<30% or >80%') {
        feedbackMessage += ' Tips to improve: Improve soil moisture for better results.';
    }
    if (pesticides === 'Other') {
        feedbackMessage += ' Tips to improve: Consider using recommended wheat pesticides for better yield.';
    }

    document.getElementById('feedback-message').innerText = feedbackMessage;
    document.getElementById('feedback').style.display = 'block';
});
