
const formRef = document.querySelector(".login-form")

formRef.addEventListener("submit", handleSubmit)

function handleSubmit(event) {
    event.preventDefault()

    const { elements: { email, password } } = event.currentTarget

    if (email.value === "" || password.value === "") return alert("ще НЕ всі поля заповнені!!!")
    
    const formData = {
        email: email.value,
        password: password.value,
    }

    console.log(formData)
    event.currentTarget.reset()
}