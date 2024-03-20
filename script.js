document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Toggle the 'active' class on navLinks when navToggle is clicked
    navToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Event listener to close the nav if clicking outside of it
    document.addEventListener('click', function(event) {
        // Check if the click is outside of nav-links and not on the toggle button
        if (!navLinks.contains(event.target) && !navToggle.contains(event.target) && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});