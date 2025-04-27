let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('theme-switch');

// Function to enable dark mode
const enableDarkmode = () => {
    document.body.classList.add('dark-mode'); 
    localStorage.setItem('darkmode', 'active');
};

// Function to disable dark mode
const disableDarkmode = () => {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('darkmode', 'inactive'); 
};

// Check user preference on page load
if (darkmode === 'active') {
    enableDarkmode();
}

// Add event listener for toggle button
themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode'); // Re-fetch latest value
    if (darkmode !== 'active') {
        enableDarkmode();
    } else {
        disableDarkmode();
    }
});
