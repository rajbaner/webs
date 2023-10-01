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
