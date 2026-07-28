document.addEventListener('DOMContentLoaded', () => {
  const openNavBtn = document.getElementById('open-nav');
  const closeNavBtn = document.getElementById('close-nav');
  const sideNav = document.getElementById('side-nav');
  const navOverlay = document.getElementById('nav-overlay');
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  const hasDropdown = document.querySelector('.has-dropdown');

  // Open Navigation Drawer
  function openNav() {
    sideNav.classList.add('is-open');
    navOverlay.classList.add('is-active');
    openNavBtn.setAttribute('aria-expanded', 'true');
    navOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Prevent main page scrolling
  }

  // Close Navigation Drawer
  function closeNav() {
    sideNav.classList.remove('is-open');
    navOverlay.classList.remove('is-active');
    openNavBtn.setAttribute('aria-expanded', 'false');
    navOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = ''; // Restore scrolling
  }

  // Toggle Dropdown Menu
  function toggleDropdown() {
    const isExpanded = dropdownToggle.getAttribute('aria-expanded') === 'true';
    dropdownToggle.setAttribute('aria-expanded', !isExpanded);
    hasDropdown.classList.toggle('is-open');
  }

  // Event Listeners
  openNavBtn.addEventListener('click', openNav);
  closeNavBtn.addEventListener('click', closeNav);
  navOverlay.addEventListener('click', closeNav);

  dropdownToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleDropdown();
  });

  // Keyboard Navigation: Close menu on 'Escape' key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sideNav.classList.contains('is-open')) {
      closeNav();
    }
  });
});
