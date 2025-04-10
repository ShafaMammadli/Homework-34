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

  a.addEventListener("click", changeColor);
  a.addEventListener("click", changeDecoration);
});

// ? Task-2
document.addEventListener("keyup", function (e) {
  console.log(e.key);
});

// ? Task-3
let div = document.querySelector("div");
let p = document.querySelector(".text");
let icon = document.querySelector("i");

div.addEventListener("click", function () {
  p.classList.toggle("change");
});

div.addEventListener("click", function () {
  if (icon.classList.contains("fa-sort-down")) {
    icon.classList.remove("fa-sort-down");
    icon.classList.add("fa-sort-up");
  } else {
    icon.classList.remove("fa-sort-up");
    icon.classList.add("fa-sort-down");
  }
});
