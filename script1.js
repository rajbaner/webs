// Get all menu items
const menuItems = document.querySelectorAll('.main-menu > li');

// Add a click event listener to each menu item
menuItems.forEach((menuItem) => {
    menuItem.addEventListener('click', () => {
        // Remove the "active" class from all menu items
        menuItems.forEach((item) => {
            item.classList.remove('active');
        });
        // Add the "active" class to the clicked menu item
        menuItem.classList.add('active');
    });
});



const hamburgerIcon = document.querySelector('.hamburger-icon');
const mainMenu = document.querySelector('.main-menu');

hamburgerIcon.addEventListener('click', () => {
    mainMenu.classList.toggle('active');
    hamburgerIcon.querySelectorAll('.bar').forEach(bar => bar.classList.toggle('active'));
});


// 2//
// JavaScript for slider functionality

// document.addEventListener("DOMContentLoaded", function () {
//     const slider = document.querySelector(".slider");
//     const slides = document.querySelectorAll(".slide");
//     const prevButton = document.querySelector(".prev-slide");
//     const nextButton = document.querySelector(".next-slide");
//     const dotContainer = document.querySelector(".slider-dots");

//     let slideIndex = 0;

//     // Create dots dynamically
//     slides.forEach((slide, index) => {
//         const dot = document.createElement("span");
//         dot.classList.add("dot");
//         dotContainer.appendChild(dot);

//         dot.addEventListener("click", () => {
//             showSlide(index);
//         });
//     });

//     const dots = document.querySelectorAll(".dot");

//     function showSlide(index) {
//         slideIndex = index;
//         slider.style.transform = `translateX(-${index * 100}%)`;
//         updateDots();
//     }

//     function updateDots() {
//         dots.forEach((dot, index) => {
//             if (index === slideIndex) {
//                 dot.classList.add("active");
//             } else {
//                 dot.classList.remove("active");
//             }
//         });
//     }

//     prevButton.addEventListener("click", () => {
//         if (slideIndex > 0) {
//             showSlide(slideIndex - 1);
//         } else {
//             showSlide(slides.length - 1);
//         }
//     });

//     nextButton.addEventListener("click", () => {
//         if (slideIndex < slides.length - 1) {
//             showSlide(slideIndex + 1);
//         } else {
//             showSlide(0);
//         }
//     });

//     // Initial slide
//     showSlide(0);

//     // Responsive behavior
//     function updateResponsiveLayout() {
//         if (window.innerWidth <= 768) {
//             slides.forEach((slide) => {
//                 slide.style.flex = "0 0 100%";
//                 slide.querySelector(".slide-content").style.position = "static";
//             });
//         } else {
//             slides.forEach((slide) => {
//                 slide.style.flex = "0 0 auto";
//                 slide.querySelector(".slide-content").style.position = "absolute";
//             });
//         }
//     }

//     window.addEventListener("resize", updateResponsiveLayout);
//     updateResponsiveLayout();
// });
document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slide");
    const prevButton = document.querySelector(".prev-slide");
    const nextButton = document.querySelector(".next-slide");
    const dotContainer = document.querySelector(".slider-dots");

    let slideIndex = 0;
    let autoSlideInterval = 5000; // Change to your desired interval in milliseconds (5 seconds)

    // Create dots dynamically
    slides.forEach((slide, index) => {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        dotContainer.appendChild(dot);

        dot.addEventListener("click", () => {
            showSlide(index);
        });
    });

    const dots = document.querySelectorAll(".dot");

    function showSlide(index) {
        slideIndex = index;
        slider.style.transform = `translateX(-${index * 100}%)`;
        updateDots();
    }

    function updateDots() {
        dots.forEach((dot, index) => {
            if (index === slideIndex) {
                dot.classList.add("active");
            } else {
                dot.classList.remove("active");
            }
        });
    }

    prevButton.addEventListener("click", () => {
        if (slideIndex > 0) {
            showSlide(slideIndex - 1);
        } else {
            showSlide(slides.length - 1);
        }
    });

    nextButton.addEventListener("click", () => {
        if (slideIndex < slides.length - 1) {
            showSlide(slideIndex + 1);
        } else {
            showSlide(0);
        }
    });

    // Automatic slide change function
    function autoChangeSlide() {
        showSlide((slideIndex + 1) % slides.length);
    }

    // Start automatic slide change interval
    let autoSlide = setInterval(autoChangeSlide, autoSlideInterval);

    // Pause automatic slide change on slider hover
    slider.addEventListener("mouseenter", () => {
        clearInterval(autoSlide);
    });

    // Resume automatic slide change on slider mouse leave
    slider.addEventListener("mouseleave", () => {
        autoSlide = setInterval(autoChangeSlide, autoSlideInterval);
    });

    // Initial slide
    showSlide(0);

    // Responsive behavior
    function updateResponsiveLayout() {
        if (window.innerWidth <= 768) {
            slides.forEach((slide) => {
                slide.style.flex = "0 0 100%";
                slide.querySelector(".slide-content").style.position = "static";
            });
        } else {
            slides.forEach((slide) => {
                slide.style.flex = "0 0 auto";
                slide.querySelector(".slide-content").style.position = "absolute";
            });
        }
    }

    window.addEventListener("resize", updateResponsiveLayout);
    updateResponsiveLayout();
});

document.addEventListener('DOMContentLoaded', function () {
    const leftButton = document.getElementById('left');
    const rightButton = document.getElementById('right');
    const cardsWrapper = document.querySelector('.cards-wrapper');
    const cardWidth = document.querySelector('.card').offsetWidth + 20; // Add margin
    const visibleCards = 4; // Number of cards to display per view
    let totalCards = document.querySelectorAll('.card').length;

    let currentIndex = 0;

    function updateButtons() {
        leftButton.disabled = currentIndex === 0;
        rightButton.disabled = currentIndex + visibleCards >= totalCards;
    }

    function updateView() {
        if (currentIndex + visibleCards > totalCards) {
            currentIndex = totalCards - visibleCards;
        }
        const scrollAmount = currentIndex * cardWidth;
        cardsWrapper.style.transform = `translateX(-${scrollAmount}px)`;
        updateButtons();
    }

    leftButton.addEventListener('click', function () {
        if (currentIndex > 0) {
            currentIndex--;
            updateView();
        }
    });

    rightButton.addEventListener('click', function () {
        if (currentIndex + visibleCards < totalCards) {
            currentIndex++;
            updateView();
        }
    });

    updateView();
});


