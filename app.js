const progressBar = document.querySelectorAll(".bar");
const observer = new IntersectionObserver((entries) => {
  console.log(entries);
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log("alo");
      entry.target.classList.add("fill-animation");
    }
  });
});

progressBar.forEach((progress) => {
  observer.observe(progress);
});
