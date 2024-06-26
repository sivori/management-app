var interval; 
let duration = 0;
let timer = duration; 
var display = document.getElementById('timerDisplay');

// Save textarea content to local storage
function saveContent() {
    document.querySelectorAll('textarea').forEach(textarea => {
        const id = textarea.id;
        const value = textarea.value;
        localStorage.setItem(id, value); // Store textarea content with its id as the key
    });
}

// Load saved content from local storage and add click listener
function loadContent() {
    document.querySelectorAll('textarea').forEach(textarea => {
        const id = textarea.id;
        const savedValue = localStorage.getItem(id); // Retrieve saved content using id as the key
        if (savedValue) {
            textarea.value = savedValue; // Set textarea content to saved value
        }
        // Attach click event listener to clear content on first click
        textarea.addEventListener('click', clearOnFirstClick);
    });
}

// Clear content on first click
function clearOnFirstClick(event) {
    const textarea = event.target;
    // Check if this is the first click using a custom attribute
    if (!textarea.getAttribute('data-first-clicked')) {
        textarea.value = ''; // Clear the content
        textarea.setAttribute('data-first-clicked', 'true'); // Set the flag
        // Remove the listener if you want the clearing to happen only on the first click
        textarea.removeEventListener('click', clearOnFirstClick);
    }
}

// Add event listeners to textareas for saving content on input
document.querySelectorAll('textarea').forEach(textarea => {
    textarea.addEventListener('input', saveContent);
});

// Load content for each textarea from local storage on page load
document.addEventListener('DOMContentLoaded', loadContent);

// set up the timer
document.getElementById('startTimer').addEventListener('click', function() {
    var duration = 25 * 60; // 25 minutes in seconds
    var display = document.getElementById('timerDisplay');
    var timer = duration, minutes, seconds;

    // Initialize or retrieve the count from session storage
    var count = sessionStorage.getItem('timerCount') ? parseInt(sessionStorage.getItem('timerCount'), 10) : 0;

    var interval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(interval);
            alert('Timer finished!');

            // Increment the count and update session storage
            count++;
            sessionStorage.setItem('timerCount', count.toString());
        }
    }, 1000);
});

// Function to update the display with the current count
function updateCountDisplay() {
    var count = sessionStorage.getItem('timerCount') ? parseInt(sessionStorage.getItem('timerCount'), 10) : 0;
    document.getElementById('countDisplay').textContent = 'Count: ' + count;
}

// Call the function to update the display when the page loads
updateCountDisplay();

// Assuming the start of the countdown function looks something like this:
function startCountdown(duration, display) {
    var timer = duration, minutes, seconds;
    interval = setInterval(function () { // Assign the interval to the global variable
        // Countdown logic...
    }, 1000);
}

function resetTimer() {
    clearInterval(interval); // Stop the current timer
    timer = duration; // Reset timer to initial duration
    var minutes = parseInt(timer / 60, 10);
    var seconds = parseInt(timer % 60, 10);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    display.textContent = minutes + ":" + seconds; // Update display
    // Do not restart the countdown here
}
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('dayCompleteToggle');
    const dayStatus = localStorage.getItem('dayComplete') === 'true';

    // Update button text based on the stored status
    toggleButton.textContent = dayStatus ? 'Day Marked as Complete' : 'Mark Day as Complete';

    // Add click event listener to the toggle button
    toggleButton.addEventListener('click', function() {
        const isComplete = localStorage.getItem('dayComplete') === 'true';
        // Toggle the completion status
        localStorage.setItem('dayComplete', !isComplete);
        // Update button text based on the new status
        toggleButton.textContent = !isComplete ? 'Day Marked as Complete' : 'Mark Day as Complete';
    });
});