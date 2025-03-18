// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });


  const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    navLinks.childNodes.forEach(ele => {
      ele.addEventListener('click', ()=> {
        navLinks.classList.remove('active');
      })
    })
});


  document.addEventListener('contextmenu', (e)=> {
    e.preventDefault()
    alert("Inspecting is disabled! until confirm in Mostaql");
  })

  document.addEventListener('keydown', (e)=> {
    console.log(e)
    if(e.ctrlKey && (e.key === 'u' || e.key === 'i' || e.key === 's' || e.key === 'a')) {
      e.preventDefault();
      alert("Inspecting is disabled! until confirm in Mostaql");
    }
  })


  document.addEventListener("keydown", function (e) {
    // Detect Ctrl + Shift + I
    if (e.ctrlKey && e.shiftKey && e.key === "I") {
      e.preventDefault();
      alert("Inspecting is disabled! until confirm the in Mostaql");
    }

    // Prevent F12 (also opens DevTools)
    if (e.key === "F12") {
      e.preventDefault();
      alert("Inspecting is disabled! until confirm in Mostaql");
    }
  });


// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');

  const observerOptions = {
      root: null, // Use the viewport as the root
      threshold: 0.1, // Trigger when 10% of the element is in view
  };

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
          } else {
              entry.target.classList.remove('visible');
          }
      });
  }, observerOptions);

  animatedElements.forEach(element => {
      observer.observe(element);
  });
});
