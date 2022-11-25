// Main function that is responsible for scroling the whole page
const scroll = new SmoothScroll('a[href*="#"]');

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

// Simple function we use it when the user clicks on one of navigation links, we scroll smothly to the needed section.
document
  .querySelector(".main-nav-list")
  .addEventListener("click", function (e) {
    e.preventDefault();

    // Matching strategy so that we can scroll to the needed section.
    if (e.target.classList.contains("main-nav-link") || "wholeFooterLink") {
      headerEl.classList.toggle("nav-open");
      const id = e.target.getAttribute("href");
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
  });

// Selecting the elements in oroder to make the contact pop up works!
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnCloseModal = document.querySelector(".btn--close-modal");
const contactBtn = document.querySelector(".sendMessageBtn");
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

// Our Main bot address that we will send a message later..
const bot = new Bot(
  "5730249668:AAGvnXi32p-5K-9JZnsEbwwYXRxmSi2v5aY",
  -809597330
);

const theUserName = document.querySelector(".theUserName");
const theUserEmail = document.querySelector(".theUserEmail");
const theUserMessage = document.querySelector(".theUserMessage");

contactBtn.addEventListener("click", () => {
  const userName = theUserName.value;
  const userEmail = theUserEmail.value;
  const userMessage = theUserMessage.value;

  if (userName.trim() === "") return;
  if (userEmail.trim() === "") return;
  if (userMessage.trim() === "") return;

  bot
    .sendMessage(`Golden Pride : ${userName} , ${userEmail} , ${userMessage}`)
    .then((res) => {
      console.log(res);
    });

  closeModal();
});
