

// Caption title animation
const tween = gsap.timeline();
tween.fromTo(".caption-title", {x:-600},{duration: 2, x: 0, delay:6});

// caption full animation
let typed = new Typed(".text-animation", {
  strings: ["terhubung dengan rekan sekelas", "terhubung dengan guru", "memanajemen proses belajar"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
  
});

