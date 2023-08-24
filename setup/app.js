const modalbtn = document.querySelector(".modal-btn");
const closebtn = document.querySelector(".close-btn");
const modaloverlay = document.querySelector(".modal-overlay");

//open-modal
modalbtn.addEventListener("click", () => {
  modaloverlay.classList.add("open-modal");
});
closebtn.addEventListener("click", () => {
  modaloverlay.classList.remove("open-modal");
});
