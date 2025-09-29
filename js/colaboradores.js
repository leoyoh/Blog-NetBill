  
  /* script para pegar dados da api pelo axios */
  
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

    card.innerHTML = `<div class="card-content">
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
