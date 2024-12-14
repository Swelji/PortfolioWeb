window.onload = function () {
    // Hide the loading screen and show the main content after the page loads
    setTimeout(function () {
        document.getElementById("loading-screen").style.opacity = "0"; // Fade out the loader
        setTimeout(function () {
            document.getElementById("loading-screen").style.display = "none"; // Completely remove the loader
            document.getElementById("header").style.display = "block"; // Show the header
            document.querySelector("footer").style.display = "block"; // Show footer

            // Initially show the 'home' section and hide others
            const sections = document.querySelectorAll("section");
            sections.forEach(section => {
                section.style.display = "none"; // Hide all sections
            });
            document.getElementById("home").style.display = "block"; // Show home section
        }, 500); // Add delay for fade-out transition
    }, 3000); // Set the delay for the loading page (in milliseconds)

    // Navigation functionality
    const navLinks = document.querySelectorAll("nav a");
    const sections = document.querySelectorAll("section");

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default anchor behavior
            const targetId = this.getAttribute("href").substring(1); // Get target ID (without '#')

            // Hide all sections and show the target section
            sections.forEach(section => {
                section.style.display = "none";
            });
            document.getElementById(targetId).style.display = "block";
        });
    });
};
