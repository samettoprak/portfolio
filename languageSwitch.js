languageBool = true;

li1 = document.getElementById("li1");
li2 = document.getElementById("li2");
li3 = document.getElementById("li3");
li4 = document.getElementById("li4");
li5 = document.getElementById("li5");

hero__hi = document.querySelector(".hero__hi");
hero__description = document.querySelector(".hero__description");
about__title = document.querySelector(".about__title");
about__desc1 = document.getElementById("about__desc1");
about__desc2 = document.getElementById("about__desc2");
about__desc3 = document.getElementById("about__desc3");
about__techs = document.querySelector(".about__techs");
projects__title = document.getElementById("projects__title");
projects__desc = document.querySelector(".projects__desc");
// projects
project__title1 = document.getElementById("project__title1");
project__desc1 = document.getElementById("project__desc1");
project__title2 = document.getElementById("project__title2");
project__desc2 = document.getElementById("project__desc2");
project__title3 = document.getElementById("project__title3");
project__desc3 = document.getElementById("project__desc3");
project__title4 = document.getElementById("project__title4");
project__desc4 = document.getElementById("project__desc4");
project__title5 = document.getElementById("project__title5");
project__desc5 = document.getElementById("project__desc5");

project__process = document.querySelectorAll(".project__process");
contact_id = document.getElementById("contact_id");

usaFlag = document.querySelector(".language__img1");
turkeyFlag = document.querySelector(".language__img2");

// ----------------------------------------------------------
document.getElementById("language__btn").onclick = () => {
  if (languageBool) {
    document.getElementById("language__btn").style.right = "5px";
    languageBool = false;
    // bayrak
    usaFlag.style.filter = "grayscale(100%)";
    turkeyFlag.style.filter = "grayscale(0%)";
    // Türkçe
    li1.innerHTML = "Ana Sayfa";
    li2.innerHTML = "Hakkımda";
    li3.innerHTML = "Projeler";
    li4.innerHTML = "İletişim";
    li5.innerHTML = "değiştir";
    hero__hi.innerHTML = "Merhaba! Ben Samet.";
    hero__description.innerHTML = "bişiler";
    about__title.innerHTML = "Hakkımda";
    about__desc1.innerHTML =
      "Selam, Ben Samet Toprak. Trakya Üniversitesi'nden yeni mezun olmuş, 22 yaşında bir Front-End Web geliştiricisiyim.";
    about__desc2.innerHTML =
      "Tasarım ve kullanıcı deneyimi odaklı olarak, Front-End Web geliştirme konusunda sağlam bir arkaplana sahibim.";
    about__desc3.innerHTML =
      "HTML, CSS ve JavaScript konularında yetenekliyim ve React.js gibi popüler frameworkler kullanarak dinamik ve etkileşimli web uygulamaları oluşturuyorum. Heyecan verici fırsatlar için bana gönül rahatlığıyla ulaşabilirsiniz. Teşekkürler.";
    about__techs.innerHTML = "Teknolojiler";
    projects__title.innerHTML = "PROJELER";
    projects__desc.innerHTML = "bişiler";
    // projects
    project__title1.innerHTML = "Türkçe İşaret Dili Çevirmeni";
    project__desc1.innerHTML =
      "Türkçe işaret dili çevirmeni harf ve kelime anlamına gelen el ile yapılan işaretleri algılayabilir. <br/> Projenin amacı engelleri olan insanları iletişimdeki bariyerlerini kaldırmaktır.<br/> Python ile programlandı.";
    project__title2.innerHTML = "Çevrimiçi Sınav Uygulaması";
    project__desc2.innerHTML =
      "Bu Web uygulaması, hem öğrenciler hem de öğretmenler için tasarlanmış etkileşimli bir öğrenme deneyimi sunar.<br/> Öğretmenler bu uygulama üzerinden sınavlar oluşturabilir, sınavın başlayış ve bitiş zamanını belirleyebilir ve öğrencilerin notlarını takip edebilirler. Öte yandan, öğrenciler bu uygulama aracılığıyla sınavlara girebilir ve kendi notlarını görüntüleyebilirler.<br/> ReactJS ile programlandı.";
    project__title3.innerHTML = "Netflix Klonu";
    project__desc3.innerHTML =
      "Klasik Netflix klonu.<br/> FireBase ile kimlik doğrulama işlevi entegre edildi. Kullanıcıların hesap oluşturmasını, giriş yapmasını ve içeriklerini kişiselleştirmesini sağlar.<br/> ReactJS ile programlandı.";
    project__title4.innerHTML = "WhatsApp Klonu";
    project__desc4.innerHTML =
      "Klasik WhatsApp klonu.<br/> Gruplara veya kişilere mesaj gönderebilir ve mesajları silebilirsiniz.<br/> ReactJS ile programlandı.";
    project__title5.innerHTML = "WhatsApp REST API";
    project__desc5.innerHTML =
      "WhatsApp için REST API backend.<br/> API, mesaj gönderme, grup yönetimi ve kullanıcı yönetimi gibi temel işlevleri destekler. Veri alışverişini JSON formatında yapar ve HTTP protokolü üzerinden çağrı yapar.<br/> Java ile programlandı.";
    project__process.forEach((e) => {
      e.innerHTML = "Proje durumu";
    });
    contact_id.innerHTML = "Bana ulaş / İletişime geç";
  } else {
    document.getElementById("language__btn").style.right = "30px";
    languageBool = true;
    // bayrak
    usaFlag.style.filter = "grayscale(0%)";
    turkeyFlag.style.filter = "grayscale(100%)";
    // İngilizce
    li1.innerHTML = "Home";
    li2.innerHTML = "About";
    li3.innerHTML = "Projects";
    li4.innerHTML = "Contact";
    li5.innerHTML = "Resume";
    hero__hi.innerHTML = "Hi! I'm Samet.";
    hero__description.innerHTML = "lorem xd";
    about__title.innerHTML = "About Me";
    about__desc1.innerHTML =
      "Hello, I'm Samet Toprak, a 22 year old Front-End Web Developer who recently graduated from Trakya University.";
    about__desc2.innerHTML =
      "I have a strong background in front-end web development, with a focus on design and user experience.";
    about__desc3.innerHTML =
      "Skilled in HTML, CSS, and JavaScript, I create dynamic and interactive web applications using popular frameworks like React.js. Feel free to reach out to me for exciting opportunities. Thank you.";
    about__techs.innerHTML = "Technologies";
    projects__title.innerHTML = "PROJECTS";
    projects__desc.innerHTML =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis atque magnam quia accusamus totam enim architecto soluta. At, ut animi.";
    // projects
    project__title1.innerHTML = "Turkish Sign Language Translator";
    project__desc1.innerHTML =
      "Turkish Sing Language Translator can detect hands & signs that means letters and words. <br /> The main purpose is to remove barriers of the people with disabilities in communication. <br /> Programmed with Python.";
    project__title2.innerHTML = "Online Quiz App";
    project__desc2.innerHTML =
      "This web app offers an interactive learning experience designed for both students and teachers. <br /> Teachers can create quizzes, set deadlines, and track the grades of all students. On the other hand, students can take exams through this app and view their own grades. <br /> Programmed with ReactJS";
    project__title3.innerHTML = "Netflix Clone";
    project__desc3.innerHTML =
      "Classic Netflix clone. <br /> Integrated authentication functionality with Firebase, allowing users to create accounts, sign in, and personalize their content. <br /> Programmed with ReactJS";
    project__title4.innerHTML = "WhatsApp Clone";
    project__desc4.innerHTML =
      "Classic WhatsApp clone.<br /> You can send message to peoples or groups & delete messages.<br /> Programmed with ReactJS";
    project__title5.innerHTML = "WhatsApp REST API";
    project__desc5.innerHTML =
      "REST API for WhatsApp backend.<br /> The API supports basic functionalities such as sending messages, managing groups, and user administration. It exchanges data in JSON format and makes calls over the HTTP protocol.<br/> Programmed with Java.";
    project__process.forEach((e) => {
      e.innerHTML = "Project Process";
    });
    contact_id.innerHTML = "Contact Me";
  }
};