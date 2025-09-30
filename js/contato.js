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
        document.getElementById("form-contato").reset();
    }).catch(err => {
        console.error("Erro ao enviar form", err);
        alert("Erro ao enviar mensagem.");
    });


}