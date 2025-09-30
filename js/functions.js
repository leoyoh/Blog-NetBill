
/* função carregar colaboradores */

function carregarCol() {
    axios.get("https://netbil.com.br/api_netbil/api-teste-programacao/colaboradores", {
        headers: {
            authorization: "LF22023L0TKCIZMAHNETR572022PG9BILIDNHR"
        }
    })
        .then(res => {
            const colaboradores = res.data;
            const dados = document.getElementById("colaboradores");

            colaboradores.forEach(colaborador => {
                const card = document.createElement("div");
                card.classList.add("card");

                card.innerHTML = `
                <div class="card-content">
                    <img src="${colaborador.Foto}" alt="${colaborador.Nome}">
                    <h2>${colaborador.Nome}</h2>
                    <p class="post-meta">${colaborador.Sobre}</p>
                </div>
            `;

                dados.appendChild(card);
            });
        })
        .catch(err => {
            console.error("Erro ao buscar colaboradores:", err);
        });
}


// recebe os dados post do form contato e manda para api

function dadosContato() {
    let nome = document.getElementById('nome').value.trim();
    let email = document.getElementById('email').value.trim();
    let telefone = document.getElementById('contato').value.trim();
    let cidade = document.getElementById('cidade').value.trim();
    let mensagem = document.getElementById('mensagem').value.trim();

    axios.post("https://netbil.com.br/api_netbil/api-teste-programacao/contato", { nome, email, telefone, cidade, mensagem }, {
        headers: {
            authorization: 'LF22023L0TKCIZMAHNETR572022PG9BILIDNHR'
        }
    }).then(({ data }) => {
        console.log(data);
        alert("Mensagem enviada com sucesso!");
        document.getElementById("contato").reset();
    }).catch(err => {
        console.error("Erro ao enviar contato:", err);
        alert("Erro ao enviar mensagem.");
    });


}