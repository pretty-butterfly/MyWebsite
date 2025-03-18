// Simulated user data
let users = [];

// Check if users are already stored in localStorage
if (localStorage.getItem('users')) {
    users = JSON.parse(localStorage.getItem('users'));
}

// Sign up functionality
document.getElementById('signupForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    // Check if the username already exists
    if (users.find(user => user.username === newUsername)) {
        alert('Username already exists. Please choose a different one.');
        return;
    }

    users.push({ username: newUsername, password: newPassword });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Sign up successful!');
    window.location.href = 'index.html';
});

// Login functionality
document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        alert('Login successful!');
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid credentials');
    }
});

// Logout functionality
document.getElementById('logoutButton')?.addEventListener('click', function() {
    alert('Logout successful!');
    window.location.href = 'index.html';
});