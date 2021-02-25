export default function observer() {
  const info = document.querySelector('.info__text');
  const list = document.querySelector('.info__list');
  const cards = document.querySelectorAll('.cards__card');
  const owner = document.querySelector('.footer__owner');
  const map = document.querySelector('.footer__contactmap');

  const observerOptions = {
    threshold: 0.5,
  };

  const slideIn = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      //console.log(entry);
      if (entry.isIntersecting) {
        //console.log('Sliding in');
        entry.target.classList.add('slide');
        slideIn.unobserve(entry.target);
      }
    });
  }, observerOptions);

  slideIn.observe(info);
  slideIn.observe(list);

  cards.forEach((card) => {
    slideIn.observe(card);
  });
}
