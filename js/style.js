window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    nav.classList.add("shadow");
  } else {
    nav.classList.remove("shadow");
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".fade-up").forEach((el) => {
  observer.observe(el);
});
