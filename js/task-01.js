const categoriesRef = document.querySelector("#categories")
console.log(`Number of categories: ${categoriesRef.children.length}`)

const categoriesListRef = categoriesRef.querySelectorAll(".item")

categoriesListRef.forEach(element => {
    let title = element.querySelector("h2")
    let elementListRef = element.querySelector("ul")

    console.log(`Category: ${title.textContent}`)
    console.log(`Elements: ${elementListRef.children.length}`)
})