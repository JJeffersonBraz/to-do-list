let tarefa = document.querySelector('input')

function add() {
    if (tarefa.value.length == 0) {
        alert('Por favor, insira uma tarefa.') 
    } else {
        document.querySelector('div#tarefas').innerHTML += `${tarefa.value}`
        tarefa.value = ""
        tarefa.focus
    }
}