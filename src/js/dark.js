const sun = document.querySelector('.la-sun');
const moon = document.querySelector('.la-moon');

const mode = localStorage.getItem('mode');

export default function dark() {
  //if the last time they were on the site it was dark mode then make it dark
  //It's light by default, so don't need to worry about that
  if (mode === 'dark') {
    makeDark();
  }

  const icon = document.querySelector('.header__lightdark');

  icon.addEventListener('click', function () {
    if (document.body.classList.contains('dark')) {
      localStorage.setItem('mode', 'light');
      makeLight();
    } else {
      localStorage.setItem('mode', 'dark');
      makeDark();
    }
  });
}

function makeLight() {
  document.body.classList.remove('dark');
  sun.style.display = 'none';
  moon.style.display = 'block';
}

function makeDark() {
  document.body.classList.add('dark');
  sun.style.display = 'block';
  moon.style.display = 'none';
}
