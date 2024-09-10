// Selecting necessary elements
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('close-btn');
const hamburgerMenu = document.getElementById('hamburger-menu');
const mainContent = document.getElementById('main-content');

// Function to open the sidebar
hamburgerMenu.addEventListener('click', function() {
    sidebar.style.width = '250px';
    mainContent.style.marginLeft = '250px';
    hamburgerMenu.style.display = 'none'; // Hide the hamburger menu when sidebar is open
});

// Function to close the sidebar
closeBtn.addEventListener('click', function() {
    sidebar.style.width = '0';
    mainContent.style.marginLeft = '0';
    hamburgerMenu.style.display = 'block'; // Show the hamburger menu when sidebar is closed
});
