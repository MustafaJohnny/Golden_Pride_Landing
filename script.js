// Main function that is responsible for scroling the whole page
const scroll = new SmoothScroll('a[href*="#"]');

// Mobile navigation work and logic
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

// Toggling the open/close button
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// Smooth scrolling animation For Mobile
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");

    if (link.classList.contains("navLinkPhoneT"))
      headerEl.classList.toggle("nav-open");
  });
});

// Selecting the elements in oroder to make the contact pop up works!
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnCloseModal = document.querySelector(".btn--close-modal");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");

// Simple function can show the modal when the user clicks on one of the modal buttons.
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// Almost the same logic of the previous function but to close the modal.
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// Calling the openModal function on a click event.
btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

// Calling the closeModal function on click and also when the user clicks anywhere on the overlay.
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
