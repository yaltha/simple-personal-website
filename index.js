//function to toggle the menu

let dropDownBtn = document.querySelector(".hamburger-icon");
let menuContent = document.querySelector(".nav-menu");

dropDownBtn.addEventListener("click", () => {
  if (menuContent.style.display === "") {
    menuContent.style.display = "block";
  } else {
    menuContent.style.display = "";
  }
});
