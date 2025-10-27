
const myPage = document.getElementById("fullbody");
const button = document.getElementById("firstButton");

button.addEventListener("click", () => {
  if (myPage.classList.contains("special")) {
    myPage.classList.remove("special");
    button.classList.add("special");
  
  } else {
    myPage.classList.add("special");
    button.classList.remove("special");
  }
});
