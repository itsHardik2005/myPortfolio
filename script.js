gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
  // ===========================================
  // 1. NAV ANIMATION
  // ===========================================
  gsap.set("nav", {
    width: "100%",
    borderRadius: "0px",
  });

  const navTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#section1",
      start: "top top",
      end: "bottom top",
      scrub: 1,
    },
  });

  navTimeline
    .to(
      "nav",
      {
        width: "70%",
        borderRadius: "700px",
        duration: 1,
        position: "fixed",
        height: "60px",
        boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 8px",
      },
      
    )
    
    .to(
      "nav img",
      {
        width: "50px",
        height: "50px",
        duration: 1,
      },
      0
    )
    .to(
      ".head li",
      {
        margin: "0.5vw",
        duration: 1,
      },
      0
    );});
   
let typeSplit = new SplitType('.aboutMe', {
  types: 'lines, words, chars',
  tagName: 'span'
})

gsap.from('.aboutMe .word', {
  opacity: 0.3,
  duration: 0.5,
  ease: 'power1.out',
  stagger: 0.1,
  
  scrollTrigger: {
    trigger: '.aboutMe',
    start: 'top bottom',
    scrub: true
  }
})
const tl = gsap.timeline();

// Text intro
tl.from(".intro-text", {
  scale: 0.6,
  opacity: 0,
  duration: 0.8,
  ease: "power3.out"
});

// Diagonal corner reveal
tl.to(".diag-1", {
  x: "100%",
  y: "-100%",
  duration: 1.3,
  ease: "power4.inOut"
}, "+=0.3");

tl.to(".diag-2", {
  x: "-100%",
  y: "100%",
  duration: 1.3,
  ease: "power4.inOut"
}, "<");

// Fade text
tl.to(".intro-text", {
  opacity: 0,
  duration: 0.5
}, "-=0.8");

// Remove intro
tl.to("#hello", {
  opacity: 0,
  duration: 0.5,
  onComplete: () => {
    document.getElementById("hello").style.display = "none";
    document.body.style.overflow = "auto";
  }
});


const webdev = gsap.timeline({
    scrollTrigger: {
      trigger: "#section1",
      start: "top top",
      end: "bottom top",
      scrub: 1,
    },
  });

  webdev
  .to(
      ".main-text",
      {
        left: "05%",

      },
      
    )
    .to(
      ".outline-text",
      {
        right: "05%",
      },
      0
    )
    .to(
      ".hero-img",
      {
        scale: 0.8,
      },
      0
    );