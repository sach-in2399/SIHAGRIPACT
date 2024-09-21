document.getElementById('wheat-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    const soilPh = document.getElementById('soil-ph').value;
    const soilMoisture = document.getElementById('soil-moisture').value;
    const pesticides = document.getElementById('pesticides').value;

    var optimalPh = true; 
    var optimalMoisture = true; 
    var optimalPesticide = true; 

    if (soilPh === '<5.5 or >8.0') optimalPh = false;
    if (soilMoisture === '<30% or >80%') optimalMoisture = false;
    if (pesticides === 'Other') optimalPesticide = false; 

    let feedbackMessage = '';
    if (optimalPh && optimalMoisture && optimalPesticide) {
        feedbackMessage = 'Your yield will be good this season.';
    }
    else {
        feedbackMessage = 'To ensure good yield please follow the following steps:\n';
        if (!optimalPh) {
            feedbackMessage += 'Adjust soil pH.\n';
        }
        if (!optimalMoisture) {
            feedbackMessage += 'Improve soil moisture.\n';
        }
        if (!optimalPesticide) {
            feedbackMessage += 'Consider using recommended pesticides.\n';
        }
    }

    document.getElementById('feedback-message').innerText = feedbackMessage;
    document.getElementById('feedback').style.display = 'block';
});
