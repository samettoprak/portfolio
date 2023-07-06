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

var text = document.querySelector(".text");

const textLoad = () => {
  setTimeout(() => {
    text.textContent = "DEVELOPER";
  }, 0);
  setTimeout(() => {
    text.innerHTML = "MOBILE DEVELOPER";
  }, 2000);
  setTimeout(() => {
    text.textContent = "WEB DEVELOPER";
  }, 6000);
};
textLoad();
