document.querySelector("#salvar").addEventListener("click", cadastar)

function cadastar(){
    const titulo = document.querySelector("#titulo").value
    const pontos = document.querySelector("#pontos").value
    const categoria = document.querySelector("#categoria").value

    const tarefa = {
        titulo,
        pontos,
        categoria
    }

    document.querySelector("#tarefas").innerHTML += criarcard(tarefa)
}

function apagar(botao){
    console.log(botao)
    botao.parentNode.parentNode.parentNode.remove()
}

function criarcard(tarefa){
    const card = `
    <div class="col-lg-3 col-md-6 col-sm-12">
        <div class="card">
            <div class="card-header">
                ${tarefa.titulo}
            </div>
            <div class="card-body">
                <p class="card-text">Comprar uma algum doce para semana.</p>
                <p class="card-text">${tarefa.categoria}</p>
                <span class="badge text-bg-warning">${tarefa.pontos}</span>
            </div>

            <div class="card-footer">
                <a href="#" class="btn btn-success" title="marcar como concluido">
                    <i class="bi bi-check2"></i>
                </a>
                <a href="#" onClick="apagar(this)" class="btn btn-danger" title="apagar tarefa">
                    <i class="bi bi-trash3"></i>
                </a>
            </div>
        </div>
    </div>
    `
    return card
}