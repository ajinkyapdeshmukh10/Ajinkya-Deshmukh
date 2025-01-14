// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// FlexSlider Initialization
$(window).on('load', function () {
    $('.flexslider').flexslider({
        animation: "slide"
    });
});

// Dynamic Project Filtering
const filterItems = document.querySelectorAll('.filters ul li');
const projectItems = document.querySelectorAll('.project-item');

filterItems.forEach(filter => {
    filter.addEventListener('click', () => {
        const category = filter.getAttribute('data-filter');

        filterItems.forEach(item => item.classList.remove('active'));
        filter.classList.add('active');

        projectItems.forEach(project => {
            if (category === 'all' || project.getAttribute('data-category') === category) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    });
});

// Light/Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Back-to-Top Button
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        backToTopButton.style.display = 'flex';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
