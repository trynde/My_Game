document.querySelector("#filtrar_pedentes").addEventListener("click", () => {
    let tarefasFiltradas = tarefas.filter(tarefas => !tarefas.concluida)
    filtrar(tarefasFiltradas)
})

document.querySelector("#filtrar_concluidas").addEventListener("click", () => {
    let tarefasFiltradas = tarefas.filter(tarefas => tarefas.concluida)
    filtrar(tarefasFiltradas)
})

document.querySelector("#busca").addEventListener("keyup", () => {
    let busca = document.querySelector("#busca").value
    
    let tarefasFiltradas = tarefas.filter(tarefas => tarefas.titulo.toLowerCase.includes(busca.toLowerCase()))
    filtrar(tarefasFiltradas)
})
