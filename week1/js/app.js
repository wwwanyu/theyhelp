const mobileMenuButton = document.getElementById('Mobile_Menu_Button');
const navItems = document.getElementById('Nav_Items');
const MobileMenuClose = document.getElementById('Mobile_Menu_Close');
const overlay = document.querySelector('.overlay');
const body = document.body;

mobileMenuButton.addEventListener('click', () => {
    navItems.classList.add("d-block", "slideFromRight");
    overlay.classList.add("d-block");
    body.style.overflow = 'hidden';
});

MobileMenuClose.addEventListener('click', () => {
    navItems.classList.add("slideToRight");
    setTimeout(() => {
        navItems.classList.remove("d-block");
        useCallback();
    }, 810);
    body.style.overflow = 'initial';
});

overlay.addEventListener('click', () => {
    navItems.classList.add("slideToRight");
    overlay.classList.remove("d-block");
    setTimeout(() => {
        navItems.classList.remove("d-block");
        useCallback();
    }, 810);
})