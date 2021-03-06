
const nav = document.querySelector("nav");
const learnMoreButton = document.querySelector(".top-cover .learn-more");
const dwnldBtn = document.querySelector(".download");

const downloadLink = "https://github.com/YoungerMax/BreezeClientWebsite/releases/download/v1.0/breezeclientinstaller-1.0-SNAPSHOT.jar";

document.querySelector(".top-cover img").style.bottom = window.scrollY / 4 + "px";

window.addEventListener('load', () => {
  let elements = document.querySelectorAll('.download-link');

  for (i in elements) {
    let element = elements[i];
    element.href = downloadLink;
    element.target = "_blank";
  }
});

window.addEventListener("scroll", () => {
  nav.style.background = "rgb(33, 33, 33, " + window.scrollY / 500 + ")";

  nav.style.fontSize = Math.max(21, 25 -window.scrollY / 100) + "px";

  document.querySelector("nav .logo").style.width = Math.max(43, 48 -window.scrollY / 100) + "px";

  document.querySelector(".top-cover img").style.top = "-" + window.scrollY / 3 + "px";



  for (let i = 0; i < document.querySelectorAll(".reason").length; i++) {
    reason = document.querySelectorAll(".reason")[i];


    if (reason.getBoundingClientRect().top < 800 && !reason.classList.contains("shown")) {
      reason.classList.add("shown");
    }
  }

  for (let i = 0; i < document.querySelectorAll(".rImg").length; i++) {
	  img = document.querySelectorAll(".rImg")[i];

	  if (img.getBoundingClientRect().top < 900 && !img.classList.contains("shown")) {
      img.classList.add("shown");
    }
  }
});

learnMoreButton.addEventListener("click", () => {
  document.querySelector(".information").scrollIntoView();
});

dwnldBtn.addEventListener("click", () => {
  document.documentElement.style.setProperty("--dwnld-clr", "#f2a715");
  dwnldBtn.textContent = "Downloading!";
  window.open(downloadLink);
  document.querySelector(".dwnld-a").classList.add("show");
});
