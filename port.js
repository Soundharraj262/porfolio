// ----------------------typing text----------------------------------
const type = new Typed(".multi-text", {
  strings: ["Web Developer", "Designer", "Freelancer"],
  typeSpeed: 150,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

/*=============scroll========== */
ScrollReveal({
  reset: false,
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(
  ".iamge,.ag-courses_item,.one,.three,.skill-content,.contact-form",
  { origin: "top" }
);

ScrollReveal().reveal(
  ".index,.font_all,.two,.four,.container",
  { origin: "bottom" }
);

ScrollReveal().reveal(
  ".sound,.images,.skill_main,.txt_main",
  { origin: "left" }
);

ScrollReveal().reveal(
  ".text_contain,.heading_about,.rectangle-9,.progass_bar",
  { origin: "right" }
);

// ====================nav============
var icon=document.getElementById('icon');
var navs=document.querySelector('.menu');
icon.addEventListener('click',()=>{
navs.classList.toggle('disp');
});
