

// Caption title animation
const tween = gsap.timeline();
tween.fromTo(".caption-title", {x:-600},{duration: 2, x: 0, delay:6});

let tween2 = gsap.to(".text-animation", {text: {value: `terhubung dengan rekan sekelas`}, duration: 5, delay: 7, ease: "none"});


