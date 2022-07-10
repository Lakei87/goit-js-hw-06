function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector("body")
const buttonRef = document.querySelector(".change-color")
const colorRef = document.querySelector(".color")

buttonRef.addEventListener("click", event => {
  const rendomColor = getRandomHexColor()
  bodyRef.style.backgroundColor = rendomColor
  colorRef.textContent = rendomColor
})