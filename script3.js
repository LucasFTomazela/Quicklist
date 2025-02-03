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
      imgCheckbox.src = imgCheckbox.src.includes("stateDefault")// SELEÇÃO DE ELEMENTOS DO DOM
      // document.querySelector(): Seleciona o primeiro elemento que corresponde ao seletor CSS
      // Captura o formulário para adicionar evento de submissão
      const form = document.querySelector("form")
      
      // document.getElementById(): Seleciona elemento específico pelo ID
      // Captura o input onde o usuário digita o novo item
      const itemInput = document.getElementById("new-item")
      
      // Seleciona o container onde os itens da lista serão adicionados
      // IMPORTANTE: Agora usa um container específico no HTML
      const shoppingList = document.getElementById("shopping-list")
      
      // EVENTO DE SUBMISSÃO DO FORMULÁRIO
      // onsubmit: Evento disparado quando o formulário é enviado
      form.onsubmit = (event) => {
        // event.preventDefault(): Impede o comportamento padrão de recarregar a página
        // Essencial para evitar que a página seja recarregada ao enviar o formulário
        event.preventDefault()
        
        // VALIDAÇÃO DE INPUT
        // trim(): Remove espaços em branco no início e fim do texto
        // Verifica se o input está vazio após remoção de espaços
        // Operador de negação (!): Converte para booleano e inverte o valor
        // Se o input estiver vazio, a função é interrompida
        if (!itemInput.value.trim()) return
      
        // CRIAÇÃO DE ELEMENTO DO ITEM
        // document.createElement(): Cria um novo elemento HTML
        // Cria um div para conter todos os elementos do item
        const newItem = document.createElement("div")
        
        // classList.add(): Adiciona classe para estilização
        // Adiciona classe 'item' para manter o estilo definido no CSS
        newItem.classList.add("item")
      
        // CRIAÇÃO DO CHECKBOX
        // createElement(): Cria elemento de imagem para checkbox
        const imgCheckbox = document.createElement("img")
        
        // MÉTODOS DE DEFINIÇÃO DE ATRIBUTOS
        // setAttribute(): Define atributos do elemento de forma mais semântica
        // Define o caminho da imagem (src) e texto alternativo (alt)
        imgCheckbox.setAttribute("src", "./assets/icons/stateDefault.svg")
        imgCheckbox.setAttribute("alt", "checkbox padrão")
        
        // Adiciona classe para estilização
        imgCheckbox.classList.add("checkbox")
      
        // CRIAÇÃO DO TEXTO DO ITEM
        // Cria elemento de parágrafo para o nome do item
        const itemNameEl = document.createElement("p")
        
        // textContent: Propriedade para definir/obter texto de um elemento
        // Define o texto do item como o valor digitado no input
        itemNameEl.textContent = itemInput.value
        
        // Adiciona classe para estilização
        itemNameEl.classList.add("item-name")
      
        // CRIAÇÃO DO ÍCONE DE LIXEIRA
        const imgTrash = document.createElement("img")
        
        // Define atributos do ícone de lixeira
        imgTrash.setAttribute("src", "./assets/icons/trash.svg")
        imgTrash.setAttribute("alt", "Lixeira")
        imgTrash.classList.add("trash")
      
        // EVENTO DE TOGGLE DO CHECKBOX
        // onclick: Evento de clique no elemento
        // Arrow function: Função compacta para manipulação do evento
        imgCheckbox.onclick = () => {
          // includes(): Método de string que verifica se contém substring
          // Operador ternário: Forma compacta de estrutura if-else
          // Alterna entre imagens de checkbox marcado e desmarcado
          imgCheckbox.src = imgCheckbox.src.includes("stateDefault") 
            ? "./assets/icons/stateSelected.svg" 
            : "./assets/icons/stateDefault.svg"
        }
      
        // EVENTO DE REMOÇÃO DO ITEM
        imgTrash.onclick = () => {
          // remove(): Método que remove o elemento do DOM
          // Remove o item inteiro quando o ícone de lixeira é clicado
          newItem.remove()
        }
      
        // MONTAGEM DO ITEM
        // appendChild(): Adiciona elementos filho ao elemento pai
        // Adiciona checkbox, nome do item e ícone de lixeira ao container do item
        newItem.appendChild(imgCheckbox)
        newItem.appendChild(itemNameEl)
        newItem.appendChild(imgTrash)
      
        // ADIÇÃO DO ITEM À LISTA
        // Adiciona o novo item ao container da lista de compras
        // CORREÇÃO: Agora usa o container correto
        shoppingList.appendChild(newItem)
      
        // LIMPEZA DO INPUT
        // Define o valor do input como string vazia
        // Limpa o campo após adicionar o item
        itemInput.value = ""
      }
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
