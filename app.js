const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const progressBar = entry.target.querySelector(".bar");

    if (entry.isIntersecting) {
      progressBar.classList.add("fill-animation");
    }
  });
});

observer.observe(document.querySelector(".bar__container"));
