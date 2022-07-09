const controlRef = document.querySelector("#font-size-control")
const textRef = document.querySelector("#text")
textRef.style.fontSize = controlRef.value + "px"

controlRef.addEventListener("input", event => {
    textRef.style.fontSize = controlRef.value + "px"
})
