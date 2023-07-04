var navBool = true;
let element = document.querySelector(".header__menu");
let element2 = document.querySelector(".header");
document.getElementById("hamburgerBtn").onclick = () => {
  if (navBool) {
    element.style.transform = "translateY(0)";
    element2.style.height = "266px";
    navBool = !navBool;
  } else {
    element.style.transform = "translateY(-200px)";
    element2.style.height = "4rem";

    navBool = !navBool;
  }
};
var sizeBool = true;

window.addEventListener("resize", function () {
  if (window.innerWidth >= 768) {
    sizeBool = true;
    element2.style.height = "50px";
    element.style.transform = "translateY(0)";

    // Diğer stil değişikliklerini burada yapabilirsiniz
  } else if ((this.window.innerWidth < 768) & sizeBool) {
    sizeBool = false;
    element.style.transform = "translateY(-200px)";
    element2.style.height = "4rem";
  }
});
