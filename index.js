/*hamburger menu*/
let menuBtn = document.querySelector("#menu-btn");

menuBtn.addEventListener("click", function (e) {
  document.querySelector("body").classList.toggle("mobile-nav-active");
  this.classList.toggle("fa-xmark");
});

/*typewritter effect */
var typed = new Typed(".auto-input", {
  strings: [
    "Front-End Developer!",
    "AWS Certified Cloud Engineer",
    "Passionate Programmer!",
  ],
  typeSpeed: 100,
  backspeed: 200,
  backDelay: 2000,
  loop: true,
});

/*makes the section we're on active*/
let navlinks = document.querySelectorAll("nav ul li a");
let sections = document.querySelectorAll("section");

window.addEventListener("scroll", function () {
  const scrollPos = this.window.scrollY;
  sections.forEach((section) => {
    if (
      scrollPos > section.offsetTop &&
      scrollPos < section.offsetTop + section.offsetHeight
    ) {
      navlinks.forEach((link) => {
        link.classList.remove("active");
        if (
          section.getAttribute("id") === link.getAttribute("href").substring(1)
        ) {
          link.classList.add("active");
        }
      });
    }
  });
});

function openTab(tab) {
  for (tabLink of tabLinks) {
    tabLink.classList.remove("active-link");
  }

  for (tabContent of tabContents) {
    tabContent.classList.remove("active-tab");
  }

  event.currentTarget.classList.add("active-link");
  document.getElementById(tab).classList.add("active-tab");
}

/* carousel with arrows and dots*/

/* For Web development */
var slideIndex = 1;
showSlides(slideIndex);
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" live", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " live";
}

// Auto Slide   if you need auto slide ,remove the commit "//"
//var slideIndex = 0;
//showSlides();
//function showSlides() {
//var i;
//  var slides = document.getElementsByClassName("mySlides");
// for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
// }
//  slideIndex++;
// if (slideIndex > slides.length) { slideIndex = 1 }
// slides[slideIndex - 1].style.display = "block";
// setTimeout(showSlides, 2000); // Change image every 2 seconds
//}
