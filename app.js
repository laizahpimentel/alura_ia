function pesquisar() {
    // console.log("clicou!");
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value
    // console.log(campoPesquisa);

    // Campo vazio busca
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Sem palavra-chave de busca! </p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "" ;

    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
    if (titulo.includes(campoPesquisa) || descricao.
    includes(campoPesquisa) ||  tags.includes(campoPesquisa)) {
        //cria novo elemento
        resultados += `
        <div class="item-resultado">
            <h2>
                <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
    `;
    }

    // Campo com busca sem chave
    if (!resultados) {
        resultados = "<p>Nada foi encontrado2!</p>"
    }
        // console.log(dado.titulo.includes(campoPesquisa))
    }

    section.innerHTML = resultados;
}


