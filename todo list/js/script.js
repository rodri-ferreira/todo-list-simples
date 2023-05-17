const botaoCriar = document.querySelector('#botao');
const inputTask = document.querySelector('#digitarTask');
const divContainer = document.querySelector('.containerTask');

inputTask.addEventListener('keydown', function(event) {
    if (event.keyCode === 13) {
        botaoCriar.click();
        event.preventDefault();
    }
});

botaoCriar.addEventListener('click', function(e) {
    if(inputTask.value !== '') {
        criarTask();
    }
    apargarInput();    
    e.preventDefault();
});

// funções

function apargarInput() {
    inputTask.value = ''
}

function criarTask() {
    let tarefa = document.createElement("div");
    let tituloTarefa = document.createElement("p");
    let btnRemove = document.createElement("button");
    

    tarefa.className = "task"
    tituloTarefa.textContent = inputTask.value
    btnRemove.className = "btnRemove"
    btnRemove.textContent = "X"
    
    tarefa.appendChild(tituloTarefa)
    tarefa.appendChild(btnRemove)

    divContainer.appendChild(tarefa);
    removerTask(tarefa, btnRemove)
}

function removerTask(tarefa, btnRemove) {
    btnRemove.addEventListener('click', function(e) {
        tarefa.remove()
    })
}

