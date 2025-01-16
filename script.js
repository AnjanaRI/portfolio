// JavaScript for smooth scrolling and mobile navigation

document.addEventListener('DOMContentLoaded', () => {

    // Smooth Scroll to Sections
    const scrollToSection = (event) => {
        const targetId = event.target.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 80,  // Adjust for header offset
                behavior: 'smooth'
            });
        }
    };

    // Add smooth scrolling to all navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            scrollToSection(event);
        });
    });

    // Mobile Menu Toggle (Open/Close the mobile navigation)
    const mobileMenuButton = document.getElementById("mobile-menu-button");
    const mobileMenu = document.getElementById("mobile-menu");

    mobileMenuButton.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
    });

    // Contact Button - Smooth scroll to contact section
    const contactButton = document.getElementById("contactButton");
    if (contactButton) {
        contactButton.addEventListener("click", () => {
            scrollToSection({ target: { getAttribute: () => '#contact' } });
        });
    }
});