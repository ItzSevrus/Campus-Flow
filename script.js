const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');

function closeMenu() {
  if (!menuToggle || !navLinks) return;
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open navigation menu');
  navLinks.classList.remove('is-open');
  document.body.classList.remove('menu-open');
}

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Open navigation menu' : 'Close navigation menu');
    navLinks.classList.toggle('is-open', !isOpen);
    document.body.classList.toggle('menu-open', !isOpen);
  });
  navItems.forEach(item => item.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
  window.addEventListener('resize', () => { if (window.innerWidth > 680) closeMenu(); });
}

const yearElement = document.querySelector('#year');
if (yearElement) yearElement.textContent = new Date().getFullYear();

// Demo only: no email is transmitted or stored.
const interestForm = document.querySelector('#interest-form');
const formMessage = document.querySelector('#form-message');
if (interestForm && formMessage) {
  interestForm.addEventListener('submit', event => {
    event.preventDefault();
    const emailInput = interestForm.querySelector('input[type="email"]');
    if (!emailInput.checkValidity()) { emailInput.reportValidity(); return; }
    formMessage.textContent = 'Thanks for your interest! This demo form is not connected to a mailing list.';
    interestForm.reset();
  });
}
