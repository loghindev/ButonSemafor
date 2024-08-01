const button = document.querySelector(".btn");
const colors = ["btn-danger", "btn-warning", "btn-success"]; // red, yellow, green;
let index = 0;

button.addEventListener("click", changeColor);

function changeColor() {
  button.classList.replace(colors[index++], colors[index]);
  if (index === colors.length) {
    button.classList.replace(colors[index], colors[0]);
    index = 0;
  }
}

// Bonus

setInterval(changeColor, 10000);
