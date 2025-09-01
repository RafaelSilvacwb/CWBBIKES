// Carousel Functionality
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const indicators = document.querySelectorAll('.indicator');

function showSlide(index) {
    // Hide all slides
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));

    // Show the current slide
    slides[index].classList.add('active');
    indicators[index].classList.add('active');
    currentSlideIndex = index;
}

function moveSlide(direction) {
    currentSlideIndex += direction;

    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    } else if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    }

    showSlide(currentSlideIndex);
}

function goToSlide(index) {
    showSlide(index);
}

// Auto-play carousel
function autoPlay() {
    setInterval(() => {
        moveSlide(1);
    }, 3000); // Change slide every 3 seconds
}

// Initialize carousel
document.addEventListener('DOMContentLoaded', function() {
    if (slides.length > 0) {
        showSlide(0);
        autoPlay();
    }

    // Hamburger menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
});

// Login Form Functionality
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simple validation
    if (email && password) {
        // Here you can add code to send data to a server or authenticate
        // For demo purposes, we'll just show a success message
        alert('Login realizado com sucesso! Bem-vindo ao Pedal Unidos!');
        // Reset the form
        this.reset();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;

    // Simple validation
    if (name && email && password) {
        // Here you can add code to send data to a server or save it locally
        alert('Cadastro realizado com sucesso!');
        // Reset the form
        this.reset();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
