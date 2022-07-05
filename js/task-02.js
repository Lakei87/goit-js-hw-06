const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector("#ingredients")

const createItems = array => {
  return array.map(element => {
    let item = document.createElement("li")
    item.textContent = element
    item.classList.add("item")
    return item
  });
}

const ingredientsItem = createItems(ingredients)

ingredientsRef.append(...ingredientsItem)