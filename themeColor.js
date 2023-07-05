var darkTheme = true;
const slate400 = "var(--clr-slate400)";
const slate600 = "var(--clr-slate600)";
const slate800 = "var(--clr-slate800)";
const slateLight = "var(--clr-light)";

aboutMeTitle = document.querySelector(".about__title");
projectsTitle = document.querySelector(".projects__title");
allProjectTitle = document.querySelectorAll(".project__title");
githubImage = document.querySelectorAll(".github__img");
contacts = document.querySelectorAll(".contact__img");

document.getElementById("themeBtn").onclick = () => {
  console.log("samet");
  if (darkTheme) {
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
    darkTheme = true;
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
