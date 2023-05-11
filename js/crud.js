document.querySelector("#salvar").addEventListener("click", cadastar)

let tarefas = []

window.addEventListener("load", () => {
    tarefas = JSON.parse( localStorage.getItem("tarefas") ) || []
    atualizar()
} )

function atualizar(){
    localStorage.setItem("tarefas", JSON.stringify(tarefas))
    document.querySelector("#tarefas").innerHTML = " "
    tarefas.forEach((tarefa) => document.querySelector("#tarefas").innerHTML += criarcard(tarefa))
    
    const total = tarefas.reduce((acc, tarefa) => acc += Number(tarefa.pontos), 0)
   
    const pontosObtidos = tarefas
    .filter(tarefa => tarefa.concluida)
    .reduce((acc, tarefa) => acc += Number(tarefa.pontos), 0)
    
    document.querySelector("#pontuacao").innerHTML = pontosObtidos + "/" + total
}

function filtrar(lista){
    document.querySelector("#tarefas").innerHTML = ""
    lista.forEach((tarefa) => {
        document.querySelector("#tarefas").innerHTML += criarcard(tarefa)
    })
}

function cadastar(){
    const titulo = document.querySelector("#titulo").value
    const pontos = document.querySelector("#pontos").value
    const categoria = document.querySelector("#categoria").value
    const modal = bootstrap.Modal.getInstance(document.querySelector("#exampleModal"))

    const tarefa = { //Json java script notation
        id: Date.now(),
        titulo,
        pontos,
        categoria,
        concluida: false
    }

    if (!isValid(tarefa.titulo,  document.querySelector("#titulo"))) return
    if (!isValid(tarefa.pontos, document.querySelector("#pontos"))) return

    tarefas.push(tarefa)
    
    atualizar()

    modal.hide()
}

function isValid(valor, campo){
    if(valor.length == 0){
        campo.classList.add("is-invalid")
        campo.classList.remove("is-valid")
        return false
    }else{
        campo.classList.add("is-valid")
        campo.classList.remove("is-invalid")
        return true
    }
}

function apagar(id){
    tarefas = tarefas.filter(tarefa=> tarefa.id !== id)
    atualizar()
}

function concluir(id){
    let tarefaencontrada = tarefas.find(tarefa => tarefa.id == id)
    tarefaencontrada.concluida = true
    atualizar()
}

function criarcard(tarefa){
    let disabled = tarefa.concluida ? "disabled" : ""
    
    const card = `
    <div class="col-lg-3 col-md-6 col-sm-12">
        <div class="card">
            <div class="card-header">
                ${tarefa.titulo}
            </div>
            <div class="card-body">
                <p class="card-text">${tarefa.categoria}</p>
                <p class="card-text">${tarefa.categoria}</p>
                <span class="badge text-bg-warning">${tarefa.pontos}</span>
            </div>

            <div class="card-footer">
                <a onClick="concluir(${tarefa.id})" href="#" class="btn btn-success ${disabled}" title="marcar como concluido">
                    <i class="bi bi-check2"></i>
                </a>
                <a href="#" onClick="apagar(${tarefa.id})" class="btn btn-danger" title="apagar tarefa">
                    <i class="bi bi-trash3"></i>
                </a>
            </div>
        </div>
    </div>
    `
    return card
}