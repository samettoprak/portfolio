const progressBar = document.querySelectorAll(".bar");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fill-animation");
    }
  });
});

progressBar.forEach((progress) => {
  observer.observe(progress);
});
