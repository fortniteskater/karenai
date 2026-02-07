// Check if a name is already saved when the page loads
window.onload = function() {
    const savedName = localStorage.getItem('userName');
    if (savedName) {
        showDashboard(savedName);
    }
};

function saveName() {
    const name = document.getElementById('name-input').value;
    if (name) {
        localStorage.setItem('userName', name); // Saves data to browser memory
        showDashboard(name);
    }
}

function showDashboard(name) {
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';
    document.getElementById('user-display').style.display = 'block';
    document.getElementById('welcome-text').innerText = "Hello, " + name + "!";
}

function logout() {
    localStorage.removeItem('userName'); // Clears the saved data
    location.reload(); // Refresh the page to show login screen
}
