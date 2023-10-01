// nav


const burgerIcon = document.querySelector('.burger-icon');
const navList = document.querySelector('.nav-list');

burgerIcon.addEventListener('click', () => {
  navList.classList.toggle('active');
});


const slider = document.querySelector(".slider");
const prevArrow = document.querySelector(".prev");
const nextArrow = document.querySelector(".next");
const dotContainer = document.querySelector(".dots");

let currentIndex = 0;

function showSlide(index) {
  slider.style.transform = `translateX(-${index * 100}%)`;

  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

prevArrow.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slider.children.length) % slider.children.length;
  showSlide(currentIndex);
});

nextArrow.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slider.children.length;
  showSlide(currentIndex);
});

function createDots(num) {
  for (let i = 0; i < num; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dot.addEventListener("click", () => {
      currentIndex = i;
      showSlide(currentIndex);
    });
    dotContainer.appendChild(dot);
  }
}

createDots(slider.children.length); // Create dots dynamically

// Automatically switch slides
function autoSlide() {
  currentIndex = (currentIndex + 1) % slider.children.length;
  showSlide(currentIndex);
}

setInterval(autoSlide, 5000); // Change slide every 5 seconds

//3rd part
const cardsContainer = document.querySelector('.cards-container');
const prevArrow = document.querySelector('.arrow.prev');
const nextArrow = document.querySelector('.arrow.next');

let scrollPosition = 0;
const cardWidth = 220; // Adjust card width as needed
const cardsCount = document.querySelectorAll('.card').length;
const cardsInView = 3; // Number of cards visible at once

function scrollCards(direction) {
  if (direction === 'prev') {
    scrollPosition -= cardWidth * cardsInView;
    if (scrollPosition < 0) {
      scrollPosition = 0;
    }
  } else {
    scrollPosition += cardWidth * cardsInView;
    if (scrollPosition > (cardsCount - cardsInView) * cardWidth) {
      scrollPosition = (cardsCount - cardsInView) * cardWidth;
    }
  }

  cardsContainer.style.transform = `translateX(-${scrollPosition}px)`;
}

prevArrow.addEventListener('click', () => scrollCards('prev'));
nextArrow.addEventListener('click', () => scrollCards('next'));
