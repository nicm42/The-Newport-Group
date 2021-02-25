export default function dark() {
  const icon = document.querySelector('.header__lightdark');
  const sun = document.querySelector('.la-sun');
  const moon = document.querySelector('.la-moon');

  icon.addEventListener('click', function () {
    if (document.body.classList.contains('dark')) {
      //make it light
      document.body.classList.remove('dark');
      sun.style.display = 'none';
      moon.style.display = 'block';
    } else {
      //make it dark
      document.body.classList.add('dark');
      sun.style.display = 'block';
      moon.style.display = 'none';
    }
  });
}
