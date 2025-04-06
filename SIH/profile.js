document.addEventListener('DOMContentLoaded', function() {
    const profileInfo = document.getElementById('profileInfo');
    const profileImage = document.getElementById('profileImage');
    const imageUpload = document.getElementById('imageUpload');
    const confirmButton = document.getElementById('confirmButton');
    const userProfile = JSON.parse(localStorage.getItem('userProfile')) || {};

    // Display user data if available
    if (userProfile) {
        profileInfo.innerHTML = `
            <p>Name: ${userProfile.name || 'N/A'}</p>
            <p>Email: ${userProfile.email || 'N/A'}</p>
        `;

        // Display stored profile image if available
        profileImage.src = userProfile.profileImage || '/Image/profile-icon.png';
    } else {
        profileInfo.innerHTML = '<p>No user data found.</p>';
        profileImage.src = '/Image/profile-icon.png';
    }

    // Handle image upload
    let newImageDataUrl = '';

    imageUpload.addEventListener('change', function(event) {
        const reader = new FileReader();
        reader.onload = function() {
            newImageDataUrl = reader.result;
            profileImage.src = newImageDataUrl;
        };
        reader.readAsDataURL(event.target.files[0]);
    });

    // Handle confirm button click
    confirmButton.addEventListener('click', function() {
        if (newImageDataUrl) {
            const confirmSave = confirm('Are you sure you want to save this new profile image?');
            if (confirmSave) {
                // Save profile image to localStorage
                userProfile.profileImage = newImageDataUrl;
                localStorage.setItem('userProfile', JSON.stringify(userProfile));
                
                // Update default image to "update-profile-icon.png"
                profileImage.src = '/Image/update-profile-icon.png';
                alert('Profile image saved successfully.');
            } else {
                alert('Profile image not saved.');
            }
        } else {
            alert('No new image selected.');
        }
    });

    // Logout button event
    document.getElementById('logoutButton').addEventListener('click', function() {
        localStorage.removeItem('userProfile');
        window.location.href = 'login.html'; // Redirect to login page
    });
});
