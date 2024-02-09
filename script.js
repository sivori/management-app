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
