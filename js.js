document.addEventListener('DOMContentLoaded', () => {
  const allLinks = document.querySelectorAll('.nav-links a, .nav-right a');

  allLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      allLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });
});
