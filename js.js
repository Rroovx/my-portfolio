document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.querySelectorAll('.nav-links a, .nav-right a');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      // Remove 'active' class from all links
      navLinks.forEach(l => l.classList.remove('active'));

      // Add 'active' class to the clicked link
      link.classList.add('active');

      // Close burger menu (uncheck checkbox)
      navToggle.checked = false;
    });
  });
});
