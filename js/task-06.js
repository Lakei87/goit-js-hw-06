const inputRef = document.querySelector("#validation-input")


inputRef.addEventListener("blur", event => {
    switch (inputRef.value.length) {
        case 0:
            inputRef.removeAttribute("class")
            break
        case Number(inputRef.dataset.length):
            (inputRef.classList.add("valid") || inputRef.classList.remove("invalid"))
            break
        default:
            inputRef.classList.add("invalid") || inputRef.classList.remove("valid")
    }
})