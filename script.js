const form = document.querySelector("form")
const itemInput = document.getElementById("new-item")
const shoppingList = document.getElementById("shopping-list")

form.onsubmit = (event) => {
  event.preventDefault()

  if (itemInput.value.trim()) {
    const newItem = document.createElement("div")
    newItem.classList.add("item")

    const imgCheckbox = document.createElement("img")
    imgCheckbox.setAttribute("src", "./assets/icons/stateDefault.svg")
    imgCheckbox.setAttribute("alt", "checkbox padrão")
    imgCheckbox.classList.add("checkbox")

    const itemNameEl = document.createElement("p")
    itemNameEl.textContent = itemInput.value
    itemNameEl.classList.add("item-name")

    const imgTrash = document.createElement("img")
    imgTrash.setAttribute("src", "./assets/icons/trash.svg")
    imgTrash.setAttribute("alt", "Lixeira")
    imgTrash.classList.add("trash")

    imgCheckbox.onclick = () => {
      imgCheckbox.src = imgCheckbox.src.includes("stateDefault")
        ? "./assets/icons/stateSelected.svg"
        : "./assets/icons/stateDefault.svg"
    }

    imgTrash.onclick = () => {
      newItem.remove()
    }

    newItem.appendChild(imgCheckbox)
    newItem.appendChild(itemNameEl)
    newItem.appendChild(imgTrash)

    shoppingList.appendChild(newItem)

    itemInput.value = ""
  } else {
    console.log("Texto Inválido")
  }
}