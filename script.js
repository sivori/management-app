// Save textarea content to local storage
function saveContent() {
    document.querySelectorAll('textarea').forEach(textarea => {
        const id = textarea.id;
        const value = textarea.value;
        localStorage.setItem(id, value); // Store textarea content with its id as the key
    });
}

// Load saved content from local storage
function loadContent() {
    document.querySelectorAll('textarea').forEach(textarea => {
        const id = textarea.id;
        const savedValue = localStorage.getItem(id); // Retrieve saved content using id as the key
        if (savedValue) {
            textarea.value = savedValue; // Set textarea content to saved value
        }
    });
}

// Add event listeners to textareas for saving content on input
document.querySelectorAll('textarea').forEach(textarea => {
    textarea.addEventListener('input', saveContent);
});

// Load content for each textarea from local storage on page load
document.addEventListener('DOMContentLoaded', loadContent);
