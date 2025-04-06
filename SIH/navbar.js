// navbar.js

document.addEventListener('DOMContentLoaded', function() {
    const userProfile = JSON.parse(localStorage.getItem('userProfile'));

    const profileLink = document.getElementById('profileLink');
    const loginLink = document.getElementById('loginLink');

    if (userProfile) {
        // User is logged in
        loginLink.style.display = 'none'; // Hide login link
        profileLink.style.display = 'flex'; // Show profile icon
        profileLink.addEventListener('click', function() {
            window.location.href = 'profile.html'; // Redirect to profile page
        });
    } else {
        // User is not logged in
        loginLink.style.display = 'flex'; // Show login link
        profileLink.style.display = 'none'; // Hide profile icon
    }
});
