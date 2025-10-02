//função para mostrar as postagens no home

function carregarPosts() {
    const posts = [
        {
            title: "SAEB 2023 – 03 DICAS PARA PREPARAR OS ALUNOS",
            category: "Dicas",
            image: "assets/img/post1.png",
            alt: "img 1"
        },
        {
            title: "A volta às aulas no Brasil e no mundo: desafios e soluções",
            category: "Dicas",
            image: "assets/img/post2.jpg",
            alt: "img 2"
        },
        {
            title: "Como a tecnologia ajudou a identificar e preencher lacunas na aprendizagem na pandemia.",
            category: "Tecnologia",
            image: "assets/img/post3.jpg",
            alt: "img 3"
        },
        {
            title: "Como a tecnologia na educação pode ajudar enfrentar o novo coronavírus?",
            category: "Tecnologia",
            image: "assets/img/post4.jpg",
            alt: "img 4"
        },
        {
            title: "Gamificação nos materiais didáticos para envolver os estudantes.",
            category: "Games",
            image: "assets/img/post5.jpg",
            alt: "img 5"
        },
        {
            title: "Games na educação: por que usar e exemplos práticos",
            category: "Games",
            image: "assets/img/post6.webp",
            alt: "img 6"
        },
        {
            title: "Educação Física na Escola: a importância do esporte para os pequenos",
            category: "Esportes",
            conteudo: "conteudo 7",
            image: "assets/img/post7.png",
            alt: "img 7"
        },
        {
            title: "Professores do Ifac lançam livro que ajuda estudantes a conquistar notas altas na redação do Enem",
            category: "Notícias",
            image: "assets/img/post8.png",
            alt: "img 8"
        }
    ];


    const meta = "Publicado em 29 de Setembro, 2025 por Léo."



    //nessa linha eu pego referencia do id da div(pai) onde os dados vao ser colocados e salvo na variavel dados
    const dados = document.getElementById("posts");


    //aqui eu faço um foreach para pode adicionar um card para cada post dentro do array
    posts.forEach((post, i) => {

        //cria uma div para o card
        const card = document.createElement("div");

        //adiciona um classe para div
        card.classList.add("card");

        //cria o evento de click nos cards
        card.addEventListener("click", () => {
            // salva o post no sessionStorage
            localStorage.setItem("postSelecionado", JSON.stringify(post));

            // redireciona para a página do detalhe
            window.location.href = "posts.html";
        });

        //adiciona o atributo categoria para o card baseado na categoria salva no mesmo, esse atributo é usado na hora de filtrar os posts por categoria
        card.setAttribute("data-category", post.category);
        card.setAttribute("data-id", i);

        //cria a syntax html do card
        card.innerHTML = `
                <img src="${post.image}" alt="${post.alt}">
                    <div class="card-content">
                    <h2>${post.title}</h2>
                    <p class="post-category">Categoria: ${post.category}</p>
                    <p class="post-meta">${meta}</p>
                </div>
            `;
        //aqui adiciona de fato o card dentro da div(pai) utilizando a referencia pega anteriormente na linha 258
        dados.appendChild(card);

    });

};



//filtro de categorias

function categorias() {
    //aqui estou pegando todas as categorias dentro da div que tem a classe categories para filtrar depois
    const categorias = document.querySelectorAll(".categories a");

    //aqui  faço um foreach para cada categoria que peguei anteriormente na const categorias
    categorias.forEach(cat => {

        //aqui adiciono um evento de click em cada uma das categorias
        cat.addEventListener("click", (e) => {
            //esse comando é para que a pagina nao recarregue após o click
            e.preventDefault();

            //aqui estou pegando o texto dentro da const
            const categoria = cat.textContent

            //aqui estou pegando dos dados dos posts dentro das calsses cards container e cards
            const posts = document.querySelectorAll(".cards-container .card");

            //aqui estou fazendo um loop para passar por todos os index da const posts
            posts.forEach(post => {

                /*nesse bloco do codigo caso a categoria selecionada for todas o display fica como grid(ou seja nada muda todas aparecem)
                  ou caso alguma categoria estiver sido selecionada apenas os cards com atributo do nome da categoria vao aparecer,
                  os outros vao ter seu display alterado para none(ou seja fica invisivel)*/
                if (categoria === "Todas" || post.getAttribute("data-category") === categoria) {
                    post.style.display = "grid";
                } else {
                    post.style.display = "none";
                }
            });
        });
    });
}


// funcao para carregar informações do post 
function abrirPost() {


    //pega o item armazenado e coloca na variavel post
    const post = JSON.parse(localStorage.getItem("postSelecionado"));

    if (post) {
        //pega o conteudo do titulo e da imagem armazenada no psot
        document.getElementById("titulo").textContent = post.title;
        document.getElementById("imagem").src = post.image;
    }
}


