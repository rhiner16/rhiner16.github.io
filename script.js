document.addEventListener('DOMContentLoaded', () => {
    // Attempt to find the dark mode toggle button
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    
    // Only add the click listener if the toggle button exists
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            if(document.body.classList.contains('dark-mode')) {
                localStorage.setItem('darkMode', 'enabled');
            } else {
                localStorage.setItem('darkMode', 'disabled');
            }
        });
    }

    // Apply the dark mode class if it was previously enabled
    if(localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
    }
});



