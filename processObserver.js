const processArray = document.querySelectorAll(".project__process");
const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("process-animation");
    }
  });
});

processArray.forEach((process) => {
  observer2.observe(process);
});
