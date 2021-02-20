const cards = document.querySelectorAll('.cards__card');

const observerOptions = {
  threshold: 0.5,
  //rootMargin: '75%',
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

cards.forEach((card) => {
  slideIn.observe(card);
});
