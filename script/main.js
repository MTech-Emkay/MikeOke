// Back to top button

const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.classList.add("show-back-to-top");
  } else {
    backToTop.classList.remove("show-back-to-top");
  }
});

// Open hamburger menu

const showNav = document.querySelector(".primary-nav");

document.querySelector(".hamburger-menu").addEventListener("click", () => {
  showNav.classList.add("show-nav");
  showNav.classList.remove("close-nav");
});

// Close hamburger menu

document.querySelector(".close").addEventListener("click", () => {
  // showNav.classList.remove("show-nav");
  showNav.classList.add("close-nav");
});

// Services dropdown

const services = document.querySelector(".services");

const servicesDropdown = document.querySelector(".services-dropdown");

const servicesDropdownHidden = servicesDropdown.getAttribute("aria-hidden");

document.querySelector(".services-a").addEventListener("click", () => {
  const servicesDropdownHidden = servicesDropdown.getAttribute("aria-hidden");

  if (servicesDropdownHidden == "true") {
    services.classList.add("show-services");
    servicesDropdown.setAttribute("aria-hidden", "false");
  } else if (servicesDropdownHidden == "false") {
    services.classList.remove("show-services");
    servicesDropdown.setAttribute("aria-hidden", "true");
  }
});

// Faq answers dropdown

document.querySelectorAll(".questions").forEach((question) => {
  question.addEventListener("click", () => {
    const currentFaq = question.parentElement;

    document.querySelectorAll(".question-lists").forEach((item) => {
      if (item !== currentFaq) {
        item.classList.remove("show-answer");
      }
    });

    currentFaq.classList.toggle("show-answer");
  });
});
