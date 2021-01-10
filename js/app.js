/**Nav Toggle */

const menuToggle = document.querySelector('.toggle_nav');
const homeTransition = document.querySelector('.home_page');
const logoAnim = document.querySelector('.logo');
const textTransition = document.querySelector('.text_container');
const socialMediaTransitionForPhone = document.querySelector('.social');



menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    homeTransition.classList.toggle('active');
    logoAnim.classList.toggle('active');
    textTransition.classList.toggle('active');
    socialMediaTransitionForPhone.classList.toggle('active');
});
