const mobileMenuButton = document.getElementById('Mobile_Menu_Button');
const navItems = document.getElementById('Nav_Items');
const MobileMenuClose = document.getElementById('Mobile_Menu_Close');

mobileMenuButton.addEventListener('click', () => {
    navItems.classList.add("d-block", "slideFromRight");
});

MobileMenuClose.addEventListener('click', () => {
    navItems.classList.remove("d-block");
    console.log('clicked')
});
