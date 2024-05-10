gsap.to("#top", {
  duration: 1,
  y: 20,
  ease: "bounce",
});

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  gsap.set(card, { transformOrigin: 'center' });

  card.addEventListener('mouseenter', () => {
    gsap.to(card, { duration: 0.3, scale: 1.05, boxShadow: '0 0 20px rgba(0,0,0,0.3)' });
  });

  card.addEventListener('mouseleave', () => {
    gsap.to(card, { duration: 0.3, scale: 1, boxShadow: '0 0 0 rgba(0,0,0,0)' });
  });
});

gsap.from(cards, {
  duration: 1,
  x: (index) => (index % 2 === 0 ? '-100vw' : '100vw'), // Alternate between left and right
  opacity: 0,
  stagger: 0.2,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '.container', // Start the animation when the container comes into view
    start: 'top 80%', // Start the animation when the top of the container is 80% from the top of the viewport
  },
});

const tl = gsap.timeline({ repeat: -1, repeatDelay: 10 });

tl.addCallback(jiggleButton);

function jiggleButton() {
  const button = document.querySelector('.button');

  gsap.to(button, {
    duration: 0.2,
    x: 10,
    yoyo: true,
    repeat: 3,
    ease: 'power2.inOut'
  });
}