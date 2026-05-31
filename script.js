// ============== NAVBAR SCROLL DETECTION ==============
const navbar = document.getElementById('navbar');
const introSection = document.getElementById('intro');

function handleNavbarScroll() {
    const introRect = introSection.getBoundingClientRect();
    if (introRect.bottom < 50) {
        navbar.classList.add('visible');
    } else {
        navbar.classList.remove('visible');
    }
}

window.addEventListener('scroll', handleNavbarScroll);

// ============== SMOOTH SCROLL NAVIGATION ==============
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ============== IMAGE CYCLING ON HOVER ==============
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    const imageContainer = card.querySelector('.image-container');
    const images = card.querySelectorAll('.project-image');
    let currentImageIndex = 0;

    imageContainer.addEventListener('mouseenter', () => {
        startCycling();
    });

    imageContainer.addEventListener('mouseleave', () => {
        stopCycling();
        currentImageIndex = 0;
        updateImage();
    });

    function startCycling() {
        card.cyclingInterval = setInterval(() => {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            updateImage();
        }, 600);
    }

    function stopCycling() {
        if (card.cyclingInterval) {
            clearInterval(card.cyclingInterval);
        }
    }

    function updateImage() {
        images.forEach((img, index) => {
            if (index === currentImageIndex) {
                img.classList.remove('hidden');
                img.classList.add('active');
            } else {
                img.classList.add('hidden');
                img.classList.remove('active');
            }
        });
    }
});

const revealpic = document.getElementById('clicktofindout');
let clickCount = 0;

revealpic.addEventListener('click', function() {
    // Increment count
    clickCount++;
    
    // Calculate new opacity: 0.1 per click
    let newOpacity = clickCount * 0.1;
    
    // Apply opacity (capped at 1.0)
    if (newOpacity <= 1.0) {
        revealpic.style.opacity = newOpacity.toFixed(1);
    }

    // Optional: Reset after it is fully revealed for 3 seconds
    if (newOpacity >= 1.0) {
        setTimeout(() => {
            revealpic.style.opacity = '0';
            clickCount = 0; // Reset the counter
        }, 3000);
    }
});
