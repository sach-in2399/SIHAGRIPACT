document.addEventListener('DOMContentLoaded', () => {
  const seasonSelect = document.getElementById('season');
  const cropTypeSelect = document.getElementById('crop-type');
  const specificCropSelect = document.getElementById('specific-crop');

  const crops = {
      "rabi": {
          "food-grain": ["Wheat", "Barley", "Gram"],
          "pulses": ["Lentils", "Peas"],
          "oil-seeds": ["Rapeseed", "Mustard"],
          "vegetables": ["Potato", "Onion"],
          "fruits": ["Apple", "Orange"],
          "spices": ["Garlic"]
      },
      "kharif": {
          "food-grain": ["Rice", "Maize", "Millets"],
          "pulses": ["Pigeon Pea", "Black Gram"],
          "oil-seeds": ["Groundnut", "Soybean"],
          "vegetables": ["Tomato", "Okra"],
          "fruits": ["Mango", "Banana"],
          "spices": ["Black Pepper", "Turmeric"]
      }
  };

  const updateSpecificCrops = () => {
      const selectedSeason = seasonSelect.value;
      const selectedType = cropTypeSelect.value;
      const options = crops[selectedSeason] && crops[selectedSeason][selectedType] || [];

      specificCropSelect.innerHTML = '<option value="">Select Specific Crop</option>'; // Clear previous options
      options.forEach(crop => {
          const option = document.createElement('option');
          option.value = crop.toLowerCase().replace(/\s+/g, '-');
          option.textContent = crop;
          specificCropSelect.appendChild(option);
      });
  };

  seasonSelect.addEventListener('change', updateSpecificCrops);
  cropTypeSelect.addEventListener('change', updateSpecificCrops);

  // Initialize specific crops on page load
  updateSpecificCrops();
});
