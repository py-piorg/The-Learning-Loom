document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.navbar nav');
    const navbar = document.querySelector('.navbar');
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentSlide = 0;

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    const showSlide = (index) => {
        carouselItems.forEach((item, i) => {
            item.classList.remove('active');
            if (i === index) item.classList.add('active');
        });
    };

    document.querySelector('.carousel-button.next').addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % carouselItems.length;
        showSlide(currentSlide);
    });

    document.querySelector('.carousel-button.prev').addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + carouselItems.length) % carouselItems.length;
        showSlide(currentSlide);
    });

    showSlide(currentSlide);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(30, 144, 255, 0.9)';
        } else {
            navbar.style.backgroundColor = 'var(--primary-color)';
        }
    });
});
