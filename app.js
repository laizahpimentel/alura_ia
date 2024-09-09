function pesquisar() {
    // Esta função é responsável por realizar uma pesquisa e exibir os resultados na página.
    console.log("clicou!"); // Loga no console para confirmar que a função foi chamada.

    let section = document.getElementById("resultados-pesquisa"); // Obtém a seção HTML onde os resultados serão exibidos.

    let resultados = ""; // Inicializa uma string vazia para armazenar os resultados da pesquisa.

    // Itera sobre os dados da pesquisa e cria HTML para cada item.
    for (let dado of dados) {
    resultados += `
<div class="item-resultado">
    <h2>
    <a href="#" target="_blank">${dado.titulo}</a>
    </h2>
    <p class="descricao-meta">${dado.descricao}</p>
    <a href="${dado.link}" target="_blank">saiba mais!</a>
</div>
`;
    }

    // Atribui o HTML gerado à seção de resultados.
    section.innerHTML = resultados;
}


