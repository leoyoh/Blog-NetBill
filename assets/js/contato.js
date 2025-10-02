// recebe os dados post do form contato e manda para api
function modalContato() {
    const btnAbrir = document.getElementById("abrirContato");
    const overlay = document.getElementById("overlay");
    const btnFechar = document.getElementById("fecharModal");

    // Abrir modal
    btnAbrir.addEventListener("click", () => {
        overlay.style.display = "flex"; // aparece com flex (centralizado)
    });

    // Fechar modal clicando no X
    btnFechar.addEventListener("click", () => {
        overlay.style.display = "none";
    });

    // Fechar modal clicando fora dele (no fundo escuro)
    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) { // só fecha se clicar no fundo
            overlay.style.display = "none";
        }
    });
}

function dadosContato() {
    //evita que a pagina recarregue
    event.preventDefault();

    //pega as info vindas dos inputs e salva em variaveis
    let nome = document.getElementById('nome').value.trim();
    let email = document.getElementById('email').value.trim();
    let telefone = document.getElementById('telefone').value.trim();
    let cidade = document.getElementById('cidade').value.trim();
    let mensagem = document.getElementById('mensagem').value.trim();

    //verifica se no campo email existe pelo menos um @
    if (!email.includes("@")) {
        alert("Digite um e-mail válido.");
        return;
    }   



    //post para api, disponibilizado no enunciado do teste

    axios.post("https://netbil.com.br/api_netbil/api-teste-programacao/contato", { nome, email, telefone, cidade, mensagem }, {
        headers: {
            authorization: 'LF22023L0TKCIZMAHNETR572022PG9BILIDNHR'
        }
    }).then(({ data }) => {
        console.log(data);
        //reseta o formulario
        document.getElementById("form-contato").reset();
        //exibe um alerta de que a mensagem foi enviada
        alert("Mensagem enviada com sucesso!");
        
    }).catch(err => {
        console.error("Erro ao enviar form", err);
        //exibe um alerta caso a msg nao tenha sido enviada
        alert("Erro ao enviar mensagem.");
    });


}
