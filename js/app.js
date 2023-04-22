function clearForm() {
  document.getElementById("contactForm").reset();
}
window.addEventListener("load", function () {
  clearForm();
  menuScroll();
});
window.addEventListener("beforeunload", function () {
  clearForm();
});
window.addEventListener("refresh", function () {
  clearForm();
});
window.addEventListener("resize", function () {
  menuScroll();
});
window.addEventListener("scroll", function () {
  menuScroll();
});

let menuHome = document.getElementById("menuHome");
let menuAbout = document.getElementById("menuAbout");
let menuExperience = document.getElementById("menuExperience");
let menuWork = document.getElementById("menuWork");
let menuContact = document.getElementById("menuContact");
let menuItems = [menuHome, menuAbout, menuExperience, menuWork, menuContact];
// set active menu item
function activeMenuItem(menuItem) {
  menuItem.classList.add("active");
  menuItem.classList.remove("active");
  for (let i = 0; i < menuItems.length; i++) {
    if (menuItems[i] != menuItem) {
      menuItems[i].classList.remove("active");
    } else {
      menuItems[i].classList.add("active");
    }
  }
}
// set active menu item on click of one of array elements
menuItems.forEach(function (menuItem) {
  menuItem.addEventListener("click", function () {
    activeMenuItem(menuItem);
  });
});
// set active based on scroll position
function menuScroll() {
  let hero = document.getElementById("hero");
  let heroHeight = hero.offsetHeight;
  let about = document.getElementById("aboutMe");
  let aboutHeight = about.offsetHeight;
  let experience = document.getElementById("experience");
  let experienceHeight = experience.offsetHeight;
  let work = document.getElementById("work");
  let workHeight = work.offsetHeight;
  let contact = document.getElementById("contact");
  let contactHeight = contact.offsetHeight;

  let scrollPosition = window.scrollY;
  if (scrollPosition < heroHeight) {
    activeMenuItem(menuHome);
  } else if (scrollPosition < heroHeight + aboutHeight) {
    activeMenuItem(menuAbout);
  } else if (scrollPosition < heroHeight + aboutHeight + experienceHeight) {
    activeMenuItem(menuExperience);
  } else if (
    scrollPosition <
    heroHeight + aboutHeight + experienceHeight + workHeight
  ) {
    activeMenuItem(menuWork);
  } else if (
    scrollPosition <
    heroHeight + aboutHeight + experienceHeight + workHeight + contactHeight
  ) {
    activeMenuItem(menuContact);
  }
}
// copyright
let copyright = document.querySelector(".footerText");
copyright.innerHTML = "©Matt Sullivan - " + new Date().getFullYear();