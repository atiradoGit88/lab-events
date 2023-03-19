// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!
let colorButtons = document.querySelectorAll('.color')
console.log (colorButtons)

let currentColorSquare  = document.querySelector("#current-color")

let colorSquareCells = document.querySelectorAll(".cell")

for (const square of colorSquareCells) {
  square.addEventListener ('click', (event) => {
    event.target.style.background = currentColorSquare.style.background
  })
}

for (const color of colorButtons) {
  color.addEventListener('click', (event) => {
    currentColorSquare.style.background = event.target.style.background
  })
}
