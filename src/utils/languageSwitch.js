const languageSwitch = () => {
  let languageBool = true;

  const li1 = document.getElementById("li1");
  const li2 = document.getElementById("li2");
  const li3 = document.getElementById("li3");
  const li4 = document.getElementById("li4");
  const li5 = document.getElementById("li5");

  const hero__hi = document.querySelector(".hero__hi");
  const hero__description = document.querySelector(".hero__description");
  const about__title = document.querySelector(".about__title");
  const about__desc1 = document.getElementById("about__desc1");
  const about__desc2 = document.getElementById("about__desc2");
  const about__desc3 = document.getElementById("about__desc3");
  const about__desc4 = document.getElementById("about__desc4");
  const about__techs = document.querySelector(".about__techs");
  const projects__title = document.getElementById("projects__title");

  // projects
  const project__title1 = document.getElementById("project__title1");
  const project__desc1 = document.getElementById("project__desc1");
  const project__title2 = document.getElementById("project__title2");
  const project__desc2 = document.getElementById("project__desc2");
  const project__title3 = document.getElementById("project__title3");
  const project__desc3 = document.getElementById("project__desc3");
  const project__title4 = document.getElementById("project__title4");
  const project__desc4 = document.getElementById("project__desc4");
  const project__title5 = document.getElementById("project__title5");
  const project__desc5 = document.getElementById("project__desc5");
  const project__title6 = document.getElementById("project__title6");
  const project__desc6 = document.getElementById("project__desc6");

  const project__process = document.querySelectorAll(".project__process");
  const contact_id = document.getElementById("contact_id");

  const usaFlag = document.querySelector(".language__img1");
  const turkeyFlag = document.querySelector(".language__img2");

  // ----------------------------------------------------------
  document.getElementById("language__btn").onclick = () => {
    if (languageBool) {
      document.getElementById("language__btn").classList.remove("left");
      document.getElementById("language__btn").classList.toggle("right");
      languageBool = false;
      // bayrak
      usaFlag.style.filter = "grayscale(100%)";
      turkeyFlag.style.filter = "grayscale(0%)";
      // Türkçe
      li1.innerHTML = "Ana Sayfa";
      li2.innerHTML = "Hakkımda";
      li3.innerHTML = "Projeler";
      li4.innerHTML = "İletişim";
      li5.innerHTML = "CV'yi görüntüle";
      hero__hi.innerHTML = "Merhaba! Ben Samet.";
      hero__description.innerHTML =
        "<strong> Portfolyo </strong> web siteme hoşgeldin.";
      about__title.innerHTML = "Hakkımda";
      about__desc1.innerHTML =
        "Selam, Ben Samet Toprak. Trakya Üniversitesi'nden yeni mezun olmuş, 22 yaşında bir <strong>yazılımcıyım</strong>. ";
      about__desc2.innerHTML =
        "Tasarım ve kullanıcı deneyimi odaklı olarak, Front-End geliştirme konusunda sağlam bir arkaplana sahibim.";
      about__desc3.innerHTML =
        "<strong> HTML</strong> , <strong>CSS </strong>  ve <strong>JavaScript </strong>  konularında yetenekliyim ve <strong>ReactJS</strong>  gibi popüler frameworkler kullanarak dinamik ve etkileşimli web uygulamaları oluşturuyorum.";
      about__desc4.innerHTML =
        "Ayrıca <strong>Back End</strong> projeleri için <strong>Java</strong> & <strong>Spring Boot</strong> ile de çalıştım.  Heyecan verici fırsatlar için bana gönül rahatlığıyla ulaşabilirsiniz. Teşekkürler.";
      about__techs.innerHTML = "Teknolojiler";
      projects__title.innerHTML = "PROJELER";

      // projects
      project__title1.innerHTML = "Türkçe İşaret Dili Çevirmeni";
      project__desc1.innerHTML =
        "Türkçe işaret dili çevirmeni harf ve kelime anlamına gelen el ile yapılan işaretleri algılayabilir. <br/> Projenin amacı engelleri olan insanların iletişimdeki bariyerlerini kaldırmaktır.<br/> Python ile programlandı.";
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
      project__title6.innerHTML = "E-Ticaret Uygulaması";
      project__desc6.innerHTML =
        "Bu e-ticaret mobil uyguması, kullanıcıların ürünleri görüntüleyip satın alabileceği bir platformdur. <br/> Güncel ürün verilerini API üzerinden alarak kullanıcılara gerçek zamanlı bilgi sunar. Kullanıcılar alışveriş sepetlerini yönetebilir ve indirimlerden haberdar olabilirler. ";
      project__process.forEach((e) => {
        e.innerHTML = "Proje durumu";
      });
      contact_id.innerHTML = "Bana ulaş / İletişime geç";
    } else {
      document.getElementById("language__btn").classList.remove("right");
      document.getElementById("language__btn").classList.toggle("left");
      languageBool = true;
      // bayrak
      usaFlag.style.filter = "grayscale(0%)";
      turkeyFlag.style.filter = "grayscale(100%)";
      // İngilizce
      li1.innerHTML = "Home";
      li2.innerHTML = "About";
      li3.innerHTML = "Projects";
      li4.innerHTML = "Contact";
      li5.innerHTML = "View CV";
      hero__hi.innerHTML = "Hi! I'm Samet.";
      hero__description.innerHTML =
        "Welcome to my <strong> portfolio </strong> web page.";
      about__title.innerHTML = "About Me";
      about__desc1.innerHTML =
        "Hello, I'm Samet Toprak, a 22 year old <strong> Software </strong> Developer who recently graduated from Trakya University.";
      about__desc2.innerHTML =
        "I have a strong background in front-end development, with a focus on design and user experience.";
      about__desc3.innerHTML =
        "Skilled in <strong>HTML</strong> ,<strong>CSS</strong> , and <strong>JavaScript</strong> , I create dynamic and interactive web applications using popular frameworks like <strong>ReactJS</strong>.";

      about__desc4.innerHTML =
        "I also worked on <strong>Back End</strong> projects with <strong> Java</strong> & <strong>Spring Boot</strong>. Feel free to reach out to me for exciting opportunities. Thank you.";
      about__techs.innerHTML = "Technologies";
      projects__title.innerHTML = "PROJECTS";

      // projects
      project__title1.innerHTML = "Turkish Sign Language Translator";
      project__desc1.innerHTML =
        "Turkish Sing Language Translator can detect hands & signs that means letters and words. <br /> The main purpose is to remove barriers of the people with disabilities in communication. <br /> Programmed with Python.";
      project__title2.innerHTML = "Online Quiz App";
      project__desc2.innerHTML =
        "This web app offers an interactive learning experience designed for both students and teachers. <br /> Teachers can create quizzes, set deadlines, and track the grades of all students. On the other hand, students can take exams through this app and view their own grades. <br /> Programmed with ReactJS.";
      project__title3.innerHTML = "Netflix Clone";
      project__desc3.innerHTML =
        "Classic Netflix clone. <br /> Integrated authentication functionality with Firebase, allowing users to create accounts, sign in, and personalize their content. <br /> Programmed with ReactJS.";
      project__title4.innerHTML = "WhatsApp Clone";
      project__desc4.innerHTML =
        "Classic WhatsApp clone.<br /> You can send message to peoples or groups & delete messages.<br /> Programmed with ReactJS.";
      project__title5.innerHTML = "WhatsApp REST API";
      project__desc5.innerHTML =
        "REST API for WhatsApp backend.<br /> The API supports basic functionalities such as sending messages, managing groups, and user administration. It exchanges data in JSON format and makes calls over the HTTP protocol.<br/> Programmed with Java.";
      project__title6.innerHTML = "E-Commerce App";
      project__desc6.innerHTML =
        "This e-commerce mobile application is a platform where users can view and purchase various products. <br /> It retrieves real-time product data through an external API and presents it to the users. Users can create accounts, manage their shopping carts, and stay informed about discounts.<br /> Programmed with React Native.";
      project__process.forEach((e) => {
        e.innerHTML = "Project Process";
      });
      contact_id.innerHTML = "Contact Me";
    }
  };
};
export default languageSwitch;
