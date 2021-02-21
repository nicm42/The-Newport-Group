export default function menu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');
  console.log(menu);
  menuToggle.addEventListener('click', function () {
    menu.classList.toggle('cross');
  });
}
