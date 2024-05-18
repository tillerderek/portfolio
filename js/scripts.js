gsap.to("#top", {
  duration: 2,
  y: 70,
  ease: "bounce",
});

const innerCard = document.querySelector("#innerCard");

innerCard.addEventListener("mouseenter", () => {
  gsap.to(innerCard, {
    duration: .5,
    boxShadow: "10px 15px 15px 10px rgb(255,0,0)",
    ease: "expo inOut",
  })
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

let cursor = document.querySelector('.cursor');
let cursorScale = document.querySelectorAll('.cursor-scale'); 
let mouseX = 0;
let mouseY = 0;

gsap.to({}, 0.016, {
  repeat: -1,
  onRepeat: function(){
    gsap.set(cursor, {
      css: {
        left: mouseX,
        top: mouseY,
      }
    })
  }
});

window.addEventListener('mousemove', (e)=> {
  mouseX = e.clientX;
  mouseY = e.clientY;
})

cursorScale.forEach(link => {
  link.addEventListener('mousemove', ()=> {
    cursor.classList.add('grow'); 
    if (link.classList.contains('small')){
      cursor.classList.remove('grow');
      cursor.classList.add('grow-small');
    }
  });
  
  link.addEventListener('mouseleave', ()=> {
    cursor.classList.remove('grow');
    cursor.classList.remove('grow-small');
  });
})
