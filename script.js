document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav__links');
    const navContact = document.querySelector('.nav__contact');
    const navSocials = document.querySelector('.nav__socials');
    const body = document.body;
  
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('show');
      navContact.classList.toggle('show');
      navSocials.classList.toggle('show');
      body.classList.toggle('no-scroll');
    });
  });
  