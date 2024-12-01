function displayWelcomeMessage() {
    const lastUsername = localStorage.getItem('lastUsername'); //Retrieve username from storage
    if (lastUsername) {
        document.getElementById('welcomeMessage').textContent = `Welcome back, ${lastUsername}!`;
    }
    else {
        //clear welcome message if no username
        document.getElementById('welcomeMessage').textContent = '';
    }
}
document.getElementById('userForm').addEventListener('submit',function(event){
    event.preventDefault();// Prevent form from reloading the page
    const username = document.getElementById('username').value;
    if (username) {
        localStorage.setItem('lastUsername',username);
        displayWelcomeMessage();
    }
})
window.onload= displayWelcomeMessage;
// Function to increase the value when the "+" button is clicked
function increaseValue(button) {
    const input = button.previousElementSibling; // Gets the input element before the "+" button
    input.value = parseInt(input.value) + 1; // Increases the current value by 1
}

// Function to decrease the value when the "-" button is clicked
function decreaseValue(button) {
    const input = button.nextElementSibling; // Gets the input element after the "-" button
    if (parseInt(input.value) > 0) { // Ensures the value doesn't go below 0
        input.value = parseInt(input.value) - 1; // Decreases the current value by 1
    }
}
// Form submission and store data
document.getElementById('userForm').addEventListener('submit',function(event){
    event.preventDefault();
    // Get the form data
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    // Store data in localStorage
    localStorage.setItem('username',username);
    localStorage.setItem('email',email);
    localStorage.setItem('password',password);
    // Display the stored data
    document.getElementById('storedData').innerHTML = `
    <strong>Username:</strong> ${username}<br>
    <strong>Email:</strong> ${email}<br>
    <strong>Password:</strong> ${password}<br>
`;
})