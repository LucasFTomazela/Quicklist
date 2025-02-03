const form = document.querySelector("form")
const itemInput = document.getElementById("new-item")
const shoppingList = document.getElementById("shopping-list")

form.onsubmit = (event) => {
  event.preventDefault()

  if (!itemInput.value.trim()) {
    console.log("Texto Inválido")
    return
  }

  const newItem = document.createElement("div")
  newItem.classList.add("item")

  newItem.innerHTML = `
    <img src="./assets/icons/stateDefault.svg" alt="checkbox padrão" class="checkbox">
    <p class="item-name">${itemInput.value.trim()}</p>
    <img src="./assets/icons/trash.svg" alt="Lixeira" class="trash">
  `

  const imgCheckbox = newItem.querySelector(".checkbox")
  const imgTrash = newItem.querySelector(".trash")

  imgCheckbox.onclick = () => {
    imgCheckbox.src = imgCheckbox.src.includes("stateDefault")
      ? "./assets/icons/stateSelected.svg"
      : "./assets/icons/stateDefault.svg"
  }

  imgTrash.onclick = () => newItem.remove()

  shoppingList.appendChild(newItem)
  itemInput.value = ""
}