function login(role) {
    // Get form values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    // Check if the fields are empty
    if (!username || !password) {
        message.innerHTML = "Please enter both username and password.";
        return;
    }

    // Placeholder login credentials for users
    const adminCredentials = { username: "admin", password: "admin123" };
    const userCredentials = { username: "user", password: "user123" };

    if (role === "admin") {
        // Admin login check
        if (username === adminCredentials.username && password === adminCredentials.password) {
            message.innerHTML = "Welcome Admin!";
            message.style.color = "green";
        } else {
            message.innerHTML = "Invalid Admin credentials.";
        }
    } else if (role === "user") {
        // User login check
        if (username === userCredentials.username && password === userCredentials.password) {
            message.innerHTML = "Welcome User!";
            message.style.color = "green";
        } else {
            message.innerHTML = "Invalid User credentials.";
        }
    }
}
