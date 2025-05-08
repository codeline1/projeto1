let eventos = [];

function adicionarEvento() {
    const dataHora = new Date();
    const novoEvento = {
        data: dataHora.toLocaleDateString(),
        hora: dataHora.toLocaleTimeString(),
        descricao: prompt("Digite a descrição do evento"),
        categorias: []
    };

    // Adicionar categorias selecionadas pelo usuário
    // ... (implementação usando checkboxes)

    eventos.push(novoEvento);
    atualizarListaEventos();
}

function salvarJSON() {
    const nomeArquivo = prompt("Digite o nome do arquivo");
    const data = JSON.stringify(eventos);
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = nomeArquivo + ".json";
    link.href = url;
    link.click();
}

function carregarJSON(event) {
    const arquivo = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
        eventos = JSON.parse(reader.result);
        atualizarListaEventos();
    };
    reader.readAsText(arquivo);
}

function atualizarListaEventos() {
    const listaEventos = document.getElementById("eventos");
    listaEventos.innerHTML = "";

    eventos.forEach(evento => {
        // Criar elementos HTML para exibir cada evento, incluindo botões de editar e atualizar
        // ... (implementação detalhada)
    });
}
