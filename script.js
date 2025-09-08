// Toggle the menu visibility when the menu is clicked
document.getElementById("menu").addEventListener("click", function() {
    document.getElementById("nav-menu").classList.toggle("active");
});

document.querySelectorAll("ul li a").forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default link behavior
        const targetPage = link.getAttribute("href");
        window.location.href = targetPage; // Navigate to the target page
    });
});





// const menu = document.getElementById('menu');
// const navMenu = document.getElementById('nav-menu');
// const overlay = document.createElement('div');

// // Add overlay to the body
// overlay.className = 'overlay';
// document.body.appendChild(overlay);

// // Toggle sidebar and overlay
// menu.addEventListener('click', () => {
//   navMenu.classList.toggle('active');
//   overlay.classList.toggle('active');
// });

// // Close sidebar when clicking the overlay
// overlay.addEventListener('click', () => {
//   navMenu.classList.remove('active');
//   overlay.classList.remove('active');
// });



// // Function to load the navbar dynamically
// function loadNavbar() {
//     // Create a request to fetch the navbar.html file
//     fetch('navbar.html')
//         .then(response => response.text())
//         .then(data => {
//             // Insert the fetched content into the #navbar-container div
//             document.getElementById('navbar-container').innerHTML = data;
//         })
//         .catch(error => {
//             console.error('Error loading the navbar:', error);
//         });
// }

// // Call the function to load the navbar when the page loads
// window.onload = loadNavbar;