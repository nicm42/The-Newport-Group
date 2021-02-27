export default function activeNav() {
  const navLinks = document.querySelectorAll(
    'nav a[href^="/' + location.pathname.split('/')[1] + '"]'
  );
  const navList = document.querySelectorAll('.menu-link');
  navLinks.forEach(function (link, index) {
    navList[index].classList.add('active');
  });
}
