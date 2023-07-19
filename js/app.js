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

const menuHome = document.getElementById("menuHome");
const menuAbout = document.getElementById("menuAbout");
const menuExperience = document.getElementById("menuExperience");
const menuWork = document.getElementById("menuWork");
const menuContact = document.getElementById("menuContact");
const menuItems = [menuHome, menuAbout, menuExperience, menuWork, menuContact];

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
  const hero = document.getElementById("hero");
  const heroHeight = hero.offsetHeight;
  const about = document.getElementById("aboutMe");
  const aboutHeight = about.offsetHeight;
  const experience = document.getElementById("experience");
  const experienceHeight = experience.offsetHeight;
  const work = document.getElementById("work");
  const workHeight = work.offsetHeight;
  const contact = document.getElementById("contact");
  const contactHeight = contact.offsetHeight;

  let scrollPosition = window.scrollY;
  if (scrollPosition < heroHeight) {
    activeMenuItem(menuHome);
  } else if (scrollPosition < heroHeight + aboutHeight) {
    activeMenuItem(menuAbout);
  } else if (scrollPosition < heroHeight + aboutHeight + experienceHeight) {
    activeMenuItem(menuExperience);
  } else if (scrollPosition < heroHeight + aboutHeight + experienceHeight + workHeight) {
    activeMenuItem(menuWork);
  } else if (scrollPosition < heroHeight + aboutHeight + experienceHeight + workHeight + contactHeight) {
    activeMenuItem(menuContact);
  }
}
// copyright
const copyright = document.querySelector(".footerText");
copyright.innerHTML = "©Matt Sullivan - " + new Date().getFullYear();