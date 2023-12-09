
// Function to check if the user is logged in
function isLoggedIn() {
    return localStorage.getItem('loggedIn') === 'true';
}

// Function to handle the login process
function login() {
    localStorage.setItem('loggedIn', 'true');
    
    // Redirect to the search page after login
    window.location.href = 'snitch.html';
}

function logout() {

    localStorage.setItem('loggedIn', 'false');
    
    // Redirect to the main page after logout
    window.location.href = 'main.html';
}

// Check the login status when the page loads
// to see if login info is displayed or nah
document.addEventListener('DOMContentLoaded', function () {
    if (isLoggedIn()) {
        // User is logged in, show the logged-in content
        document.getElementById('logged_in_content').style.display = 'block';
    } else {
        // User is not logged in, hide the logged-in content
        document.getElementById('logged_in_content').style.display = 'none';
    }
});

// if logged in go straight to search, if not go to login
const snitchButton = document.getElementById('snitch_button');
snitchButton.href = isLoggedIn() ? 'snitch.html' : 'login.html';
