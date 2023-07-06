const themeColor = () => {
  var darkTheme = true;
  const slate400 = "var(--clr-slate400)";
  const slate600 = "var(--clr-slate600)";
  const slate800 = "var(--clr-slate800)";
  const slateLight = "var(--clr-light)";
  const theme = localStorage.getItem("theme");

  const aboutMeTitle = document.querySelector(".about__title");
  const projectsTitle = document.querySelector(".projects__title");
  const allProjectTitle = document.querySelectorAll(".project__title");
  const githubImage = document.querySelectorAll(".github__img");
  const contacts = document.querySelectorAll(".contact__img");
  const header__hamburger = document.querySelector(".header__hamburger");
  const textElement = document.querySelector(".text");
  const textBefore = window.getComputedStyle(textElement, "::before");
  document.getElementById("themeBtn").onclick = () => {
    if (darkTheme) {
      textElement.style.setProperty("--afterColor", "white");
      localStorage.setItem("theme", "light-mode");
      header__hamburger.style.filter = "invert()";
      darkTheme = false;
      document.body.style.background = "white";
      aboutMeTitle.style.color = slate600;
      projectsTitle.style.color = slate600;

      allProjectTitle.forEach((title) => {
        title.style.color = slate600;
      });
      githubImage.forEach((img) => {
        img.style.filter = "invert(0)";
      });
      contacts.forEach((contact) => {
        contact.style.filter = "invert(0)";
      });
    } else {
      textElement.style.setProperty("--afterColor", "#070a13");
      localStorage.removeItem("theme");
      darkTheme = true;
      header__hamburger.style.filter = "none";
      document.body.style.background = "var(--clr-dark)";
      aboutMeTitle.style.color = slateLight;
      projectsTitle.style.color = slateLight;
      allProjectTitle.forEach((title) => {
        title.style.color = slate400;
      });
      githubImage.forEach((img) => {
        img.style.filter = "invert()";
      });
      contacts.forEach((contact) => {
        contact.style.filter = "invert()";
      });
    }
  };
};
export default themeColor;
