// ? Task-1
let btn = document.querySelectorAll("button");

btn.forEach((a) => {
  function changeColor() {
    a.style.color = "blue";
  }

  function changeDecoration() {
    a.style.textDecoration = "line-through";
    a.removeEventListener("click", changeColor);
  }

  a.addEventListener("click", changeDecoration);
  a.addEventListener("click", changeColor);
})

// ? Task-2
document.addEventListener("keyup", function (e) {
  console.log(e.key);
})

// ? Task-3
let div = document.querySelector(".accordion");
let p = document.querySelector(".text");
let icon = document.querySelector("i");

div.addEventListener("click", function () {
  p.classList.toggle("change");
  icon.classList.toggle("rotate");
})

