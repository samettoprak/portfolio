var darkTheme = true;
const slate800 = "var(--clr-slate800)";

aboutMeTitle = document.querySelector(".about__title");
projectsTitle = document.querySelector(".projects__title");
allProjectTitle = document.querySelectorAll(".project__title");
githubImage = document.querySelectorAll(".github__img");
contacts = document.querySelectorAll(".contact__img");

document.getElementById("themeBtn").onclick = () => {
  console.log("samet");
  if (darkTheme) {
    document.body.style.background = "white";
    aboutMeTitle.style.color = slate800;
    projectsTitle.style.color = slate800;
    darkTheme = false;
    allProjectTitle.forEach((title) => {
      title.style.color = slate800;
    });
    githubImage.forEach((img) => {
      img.style.filter = "invert(0)";
    });
    contacts.forEach((contact) => {
      contact.style.filter = "invert(0)";
    });
  } else {
    document.body.style.background = "var(--clr-dark)";
    darkTheme = true;
  }
};
