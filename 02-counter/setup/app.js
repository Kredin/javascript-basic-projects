// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const styles = e.currentTarget.classList;
//     if (styles.contains("decrease")) {
//       count--;
//     } else if (styles.contains("increase")) {
//       count++;
//     } else {
//       count = 0;
//     }
//     if (count > 0) {
//       value.style.color = "green";
//     } else if (count < 0) {
//       value.style.color = "red";
//     } else {
//       value.style.color = #222;
//     }
//     value.textContent = count;
//   });
// });

// individual buttons programmed
document.querySelector(".decrease").addEventListener("click", function () {
  count--;
  value.textContent = count;
});

document.querySelector(".increase").addEventListener("click", function () {
  count++;
  value.textContent = count;
});

document.querySelector(".reset").addEventListener("click", function () {
  count = 0;
  value.textContent = count;
});

addEventListener("click", function () {
  if (count > 0) {
    value.style.color = "green";
  } else if (count < 0) {
    value.style.color = "red";
  } else {
    value.style.color = "#222";
  }
});
