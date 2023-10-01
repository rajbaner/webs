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
// script.js
// 1
// Get references to the button and additional content
const readMoreButton = document.getElementById('read-more');
const additionalContent = document.getElementById('additional-content');

// Add a click event listener to the "Read More" button
readMoreButton.addEventListener('click', function () {
    // Toggle the visibility of the additional content
    if (additionalContent.style.display === 'none' || additionalContent.style.display === '') {
        additionalContent.style.display = 'inline'; // Show the content
        readMoreButton.textContent = 'Read Less'; // Change button text
    } else {
        additionalContent.style.display = 'none'; // Hide the content
        readMoreButton.textContent = 'Read More'; // Change button text
    }
});
// script.js
// 2
// Get references to the button, additional content, and icon for the new section
const readMoreButtonBelow = document.getElementById('read-more-below');
const additionalContentBelow = document.getElementById('additional-content-below');
const iconBelow = document.querySelector('#read-more-below i');

// Add a click event listener to the "Read More" button for the new section
readMoreButtonBelow.addEventListener('click', function () {
    // Toggle the visibility of the additional content
    if (additionalContentBelow.style.display === 'none' || additionalContentBelow.style.display === '') {
        additionalContentBelow.style.display = 'inline'; // Show the content
        iconBelow.classList.remove('fa-plus'); // Remove plus icon
        iconBelow.classList.add('fa-minus'); // Add minus icon
    } else {
        additionalContentBelow.style.display = 'none'; // Hide the content
        iconBelow.classList.remove('fa-minus'); // Remove minus icon
        iconBelow.classList.add('fa-plus'); // Add plus icon
    }
});
 // 3 
// script.js

// Get references to the button, additional content, and icon for the new left-transition section
const readMoreButtonLeft = document.getElementById('read-more-left');
const additionalContentLeft = document.getElementById('additional-content-left');
const iconLeft = document.querySelector('#read-more-left i');

// Add a click event listener to the "Read More" button for the left-transition section
readMoreButtonLeft.addEventListener('click', function () {
    // Toggle the visibility of the additional content
    if (additionalContentLeft.style.display === 'none' || additionalContentLeft.style.display === '') {
        additionalContentLeft.style.display = 'inline'; // Show the content
        iconLeft.classList.remove('fa-plus'); // Remove plus icon
        iconLeft.classList.add('fa-minus'); // Add minus icon
    } else {
        additionalContentLeft.style.display = 'none'; // Hide the content
        iconLeft.classList.remove('fa-minus'); // Remove minus icon
        iconLeft.classList.add('fa-plus'); // Add plus icon
    }
});
//4
// script.js

// Get references to the button, additional content, and icon for the new right-transition2 section
const readMoreButtonRight2 = document.getElementById('read-more-right2');
const additionalContentRight2 = document.getElementById('additional-content-right2');
const iconRight2 = document.querySelector('#read-more-right2 i');

// Add a click event listener to the "Read More" button for the right-transition2 section
readMoreButtonRight2.addEventListener('click', function () {
    // Toggle the visibility of the additional content
    if (additionalContentRight2.style.display === 'none' || additionalContentRight2.style.display === '') {
        additionalContentRight2.style.display = 'inline'; // Show the content
        iconRight2.classList.remove('fa-plus'); // Remove plus icon
        iconRight2.classList.add('fa-minus'); // Add minus icon
    } else {
        additionalContentRight2.style.display = 'none'; // Hide the content
        iconRight2.classList.remove('fa-minus'); // Remove minus icon
        iconRight2.classList.add('fa-plus'); // Add plus icon
    }
});
// Get modal elements
const modal = document.getElementById('imageModal');
const expandedImage = document.getElementById('expandedImage');
const closeModal = document.getElementById('closeModal');

// Get icon elements
const icons = document.querySelectorAll('.icon');

// Function to open the modal and display the clicked image
function openModal(imageSrc) {
    expandedImage.src = imageSrc;
    modal.style.display = 'block';
}

// Function to close the modal
function closeModalFunction() {
    modal.style.display = 'none';
}

// Add click event listeners to icons
icons.forEach(icon => {
    icon.addEventListener('click', () => {
        const imageSrc = icon.previousElementSibling.src;
        openModal(imageSrc);
    });
});

// Close the modal when clicking the close button
closeModal.addEventListener('click', closeModalFunction);

// Close the modal when clicking outside the modal content
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModalFunction();
    }
});

// Close the modal when pressing the Escape key
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModalFunction();
    }
});
