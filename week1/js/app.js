const mobileMenuButton = document.getElementById('Mobile_Menu_Button');
const navItems = document.getElementById('Nav_Items');
const MobileMenuClose = document.getElementById('Mobile_Menu_Close');
const body = document.body;

mobileMenuButton.addEventListener('click', () => {
    navItems.classList.add("d-block", "slideFromRight");
    body.style.overflow = 'hidden';
});

MobileMenuClose.addEventListener('click', () => {
    navItems.classList.add("slideToRight");
    body.style.overflow = 'initial';
});
