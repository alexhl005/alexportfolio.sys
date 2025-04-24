// Mobile menu toggle
document.getElementById('mobile-menu-button').addEventListener('click', function () {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            const mobileMenu = document.getElementById('mobile-menu');
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        }
    });
});

// Add fade-in animation to sections when they come into view
const sections = document.querySelectorAll('section');
const options = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});

// Current year for footer
document.addEventListener('DOMContentLoaded', function () {
    const year = new Date().getFullYear();
    const yearElement = document.querySelector('.current-year');
    if (yearElement) {
        yearElement.textContent = year;
    }
});

// Typing animation for hero section
function typeWriter() {
    const text = "Especializado en gestión de sistemas, infraestructura cloud y automatización.";
    const element = document.getElementById("typing-text");
    let i = 0;
    const speed = 50; // typing speed in milliseconds
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            // Remove cursor when finished
            element.style.borderRight = "none";
        }
    }
    
    // Start typing after a short delay
    setTimeout(type, 1000);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Existing code...
    typeWriter(); // Add this line
    
    // Current year for footer
    const year = new Date().getFullYear();
    const yearElement = document.querySelector('.current-year');
    if (yearElement) {
        yearElement.textContent = year;
    }
});

// Toggle additional skills
document.getElementById('show-more-skills').addEventListener('click', function() {
    const moreSkills = document.getElementById('more-skills');
    const buttonIcon = this.querySelector('i');
    
    moreSkills.classList.toggle('hidden');
    
    if (moreSkills.classList.contains('hidden')) {
        buttonIcon.classList.remove('fa-chevron-up');
        buttonIcon.classList.add('fa-chevron-down');
        this.textContent = 'Mostrar más habilidades ';
    } else {
        buttonIcon.classList.remove('fa-chevron-down');
        buttonIcon.classList.add('fa-chevron-up');
        this.textContent = 'Mostrar menos habilidades ';
    }
    
    this.appendChild(buttonIcon);
});
