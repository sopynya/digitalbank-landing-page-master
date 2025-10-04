function hamburguerDisplay() {
  const hamb = document.getElementById('hamburguer');
  const nav = document.getElementById('optionsbackground');

  if (nav.style.display === "block") {
    nav.style.display = "none";
    hamb.src = "/images/icon-hamburger.svg";
  } else {
    nav.style.display = "block";
    hamb.src = "/images/icon-close.svg";
  }
}