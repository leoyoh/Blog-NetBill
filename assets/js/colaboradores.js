/* função carregar colaboradores */

function carregarCol() {
    //pegando informação da api utilizando o axios (bloco de comando pronto disponivel no enunciado do teste)
    axios.get("https://netbil.com.br/api_netbil/api-teste-programacao/colaboradores", {
        headers: {
            authorization: "LF22023L0TKCIZMAHNETR572022PG9BILIDNHR"
        }
    })
        .then(res => {

            //pegando as informações recuperadas pelo get no api
            const colaboradores = res.data;
            //pegando a referencia da onde os dados serao mostrados
            const dados = document.getElementById("colaboradores");

            //loop para passar por cada colaborador recuperando pelo get
            colaboradores.forEach(colaborador => {

                //cria uma div para o card
                const card = document.createElement("div");

                //adiciona um classe para div
                card.classList.add("card");

                //cria a syntax html do card
                card.innerHTML = `
                <div class="card-content">
                    <img src="${colaborador.Foto}" alt="${colaborador.Nome}">
                    <h2>${colaborador.Nome}</h2>
                    <p class="post-meta">${colaborador.Sobre}</p>
                </div>
            `;
                //aqui adiciona de fato o card dentro da div(pai) utilizando a referencia pega anteriormente na linha 15
                dados.appendChild(card);
            });
        })
        .catch(err => {
            //mensagem de erro caso haja algum erro na busca dos colaboradores pelo get
            console.error("Erro ao buscar colaboradores:", err);
        });
}