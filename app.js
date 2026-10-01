const board = document.querySelector(".board");
const openLogos = document.querySelector("#openLogos");
const closeLogos = document.querySelector("#closeLogos");

function openLogosView() {
  board.dataset.open = "logos";
  openLogos.setAttribute("aria-expanded", "true");
}

function closeLogosView() {
  delete board.dataset.open;
  openLogos.setAttribute("aria-expanded", "false");
}

openLogos.addEventListener("click", openLogosView);

closeLogos.addEventListener("click", closeLogosView);
