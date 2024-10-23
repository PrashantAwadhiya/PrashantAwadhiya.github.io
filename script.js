const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  const icon = card.querySelector('.icon');

  card.addEventListener('mouseenter', () => {
    gsap.to(icon, { rotation: 360, duration: 1, ease: "power1.inOut" });
  });

  card.addEventListener('mouseleave', () => {
    gsap.to(icon, { rotation: 0, duration: 0.8, ease: "power1.inOut" });
  });
});