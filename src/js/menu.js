export default function menu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');
  const menuLinks = document.querySelector('.menu-links');

  menuToggle.addEventListener('click', function () {
    menu.classList.toggle('cross');
    menuLinks.classList.toggle('show');
  });
}
