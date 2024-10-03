const loginForm = document.getElementById("loginForm");
const loginBtn = loginForm.querySelector("button[type='submit']");

// Add submit event listener to the form
loginForm.addEventListener("submit", function (event) {
    // Prevent default form submission behavior
    event.preventDefault();

    // Get the values of the username and password inputs
    const username = document.getElementById("user").value.trim();
    const password = document.getElementById("password").value.trim();

    // Check if both username and password are "superadmin"
    if (username.toLowerCase() === "superadmin" && password.toLowerCase() === "superadmin") {
        // Display alert if both are "superadmin"
        alert("Login successful as superadmin!");
        window.location.href = "dashboard.html"
    } else {
        // Display alert if not both are "superadmin"
        alert("Invalid username or password.");
    }
});