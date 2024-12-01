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