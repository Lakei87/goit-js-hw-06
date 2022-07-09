function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const numberRef = document.querySelector("#controls > input")
const btnCreateRef = document.querySelector("button[data-create]")
const btnDestroyRef = document.querySelector("button[data-destroy]")
const mainBoxRef = document.querySelector("#boxes")

btnCreateRef.addEventListener("click", createBoxes)
btnDestroyRef.addEventListener("click", destroyBoxes)
addEventListener("keydown", event => {
  const { code } = event
  if (code === "Enter" || code === "NumpadEnter") {
    createBoxes()
    return
  }
})

// ===============function createBoxes()==============
function createBoxes(amoumt) {
  amoumt = numberRef.value
  mainBoxRef.innerHTML = ""
  const boxesArrayToCreate = []
  
  for (let i = 1; i <= amoumt; i += 1) {
    boxesArrayToCreate.push("<div></div>")
  }
  
  mainBoxRef.insertAdjacentHTML("afterbegin", boxesArrayToCreate.join(""))
  
  const createdBoxesList = document.querySelectorAll("#boxes div")
  let boxSize = 30
  
  createdBoxesList.forEach(element => {
    const {style} = element
    style.width = `${boxSize}px`
    style.height = `${boxSize}px`
    style.backgroundColor = getRandomHexColor()
    boxSize += 10
  })
}

// ==============function destroyBoxes()===============
function destroyBoxes() {
  mainBoxRef.innerHTML = ""
  numberRef.value = ""
}