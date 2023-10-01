function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

const readMoreButton = document.getElementById('read-more-btn');
  const contentParagraph = document.querySelector('.content p');

  let isExpanded = false;

  readMoreButton.addEventListener('click', function (event) {
    event.preventDefault();

    if (!isExpanded) {
      contentParagraph.style.display = 'block';
      readMoreButton.innerText = 'Read Less';
    } else {
      contentParagraph.style.display = 'none';
      readMoreButton.innerText = 'Read More';
    }


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
