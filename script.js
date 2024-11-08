// Toggle the mobile navbar when the hamburger is clicked
const navbarToggle = document.getElementById("navbar-toggle");
const navbarLinks = document.getElementById("navbar-links");

navbarToggle.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
