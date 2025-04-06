document.addEventListener('DOMContentLoaded', function() {
    const profileImage = document.querySelector('.navbar .profile-icon'); // Adjust selector as needed
    const userProfile = JSON.parse(localStorage.getItem('userProfile'));

    if (profileImage && userProfile && userProfile.profileImage) {
        profileImage.src = userProfile.profileImage;
    } else {
        profileImage.src = '/Image/profile-icon.png'; // Default image
    }
});
