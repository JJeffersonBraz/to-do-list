let tarefa = document.querySelector('input')

function add() {
    if (tarefa.value.length == 0) {
        alert('Por favor, insira uma tarefa.') 
    } else {
        document.querySelector('div#tarefas').innerHTML += `
            <div class="tarefas">
                <span>
                    ${tarefa.value} 
                </span>
                <button class="excluir"> X </button>
            </div>
        `
        tarefa.value = ""
        tarefa.focus
    }
}