const buttonDecRef = document.querySelector("[data-action='decrement']")
const buttonIncRef = document.querySelector("[data-action='increment']")
const valueRef = document.querySelector("#value")

let caunterValue = Number(valueRef.textContent)

buttonDecRef.addEventListener("click", () => {
    caunterValue -= 1
    valueRef.textContent = caunterValue
})

buttonIncRef.addEventListener("click", () => {
    caunterValue += 1
    valueRef.textContent = caunterValue
})
