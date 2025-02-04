const form = document.querySelector("form")
const item = document.getElementById("new-item")

const itemName = document.querySelector(".item .item-name")

const newItem = document.createElement("div")
newItem.classList.add("item")

const imgCheckbox = document.createElement("img")
imgCheckbox.src = "./assets/icons/stateDefault.svg"
imgCheckbox.alt = "checkbox padrão"
imgCheckbox.classList.add("checkbox")

const imgTrash = document.createElement("img")
imgTrash.src = "./assets/icons/trash.svg"
imgTrash.alt = "Lixeira"
imgTrash.classList.add("trash")

// Capturando valor do input
form.onsubmit = (event) => {
  event.preventDefault();
  console.log(item.value)
  
  showItem(item.value)
}

// Função para exibir o item na tela
function showItem(item) {
  try { 
    itemName.textContent = `${item}`

    

    console.log(`Retorno ${item}`)
  } catch {
    alert("Tente novamente!")
  }
}