document.addEventListener('DOMContentLoaded', function() {
    // Redirect to home if already logged in
    if (localStorage.getItem('userProfile')) {
        window.location.href = 'index.html';
    }
});

let signupButton = document.querySelector(".signup");
let loginButton = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");

// Handle signup button click
signupButton.addEventListener("click", () => {
    slider.classList.add("moveslider");
    formSection.classList.add("form-section-move");
});

// Handle login button click
loginButton.addEventListener("click", () => {
    slider.classList.remove("moveslider");
    formSection.classList.remove("form-section-move");
});

// Login form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simulate login validation
    if (email && password) {
        // Save user profile in localStorage
        localStorage.setItem('userProfile', JSON.stringify({ email }));

        // Redirect to home or the referrer page
        const previousPage = document.referrer || 'index.html';
        window.location.href = previousPage;
    } else {
        // Show error message or handle invalid login
        alert('Please enter valid credentials.');
    }
});

// Signup form submission
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Check if user is already registered
    const existingUser = JSON.parse(localStorage.getItem('userProfile'));

    if (email && password && confirmPassword && password === confirmPassword) {
        if (existingUser && existingUser.email === email) {
            // User already exists
            alert('User already registered. Please log in.');
        } else {
            // Simulate signup process (e.g., save user details to localStorage or server)
            localStorage.setItem('userProfile', JSON.stringify({ email }));

            // Show success message and redirect or change view
            alert('Registration successful! Please log in.');
            slider.classList.remove("moveslider");
            formSection.classList.remove("form-section-move");
        }
    } else {
        // Show error message for invalid signup
        alert('Please enter valid credentials and ensure passwords match.');
    }
});
// Example signup form submission handling
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('nameInput').value;
    const email = document.getElementById('emailInput').value;
    
    const userProfile = {
        name: name,
        email: email,
        profileImage: '' // Or a default image URL
    };
    
    localStorage.setItem('userProfile', JSON.stringify(userProfile));
    
    // Redirect or handle form submission
});
