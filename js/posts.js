//função para mostrar as postagens no home

function carregarPosts() {
    const posts = [
        {
            title: "Titulo 1",
            category: "Dicas",
            conteudo: "conteudo 1",
            image: "img/post1.png",
            alt: "img 1"
        },
        {
            title: "Titulo 2",
            category: "Dicas",
            conteudo: "conteudo 2",
            image: "img/post1.png",
            alt: "img 2"
        },
        {
            title: "Titulo 3",
            category: "Tecnologia",
            conteudo: "conteudo 3",
            image: "img/post1.png",
            alt: "img 3"
        },
        {
            title: "Titulo 4",
            category: "Tecnologia",
            conteudo: "conteudo 4",
            image: "img/post1.png",
            alt: "img 4"
        },
        {
            title: "Titulo 5",
            category: "Games",
            conteudo: "conteudo 5",
            image: "img/post1.png",
            alt: "img 5"
        },
        {
            title: "Titulo 6",
            category: "Games",
            conteudo: "conteudo 6",
            image: "img/post1.png",
            alt: "img 6"
        },
        {
            title: "Titulo 7",
            category: "Notícias",
            conteudo: "conteudo 7",
            image: "img/post1.png",
            alt: "img 7"
        },
        {
            title: "Titulo 8",
            category: "Notícias",
            conteudo: "conteudo 8",
            image: "img/post1.png",
            alt: "img 8"
        }
    ];


    const meta = "Publicado em 29 de Setembro, 2025 por Léo."


    const dados = document.getElementById("posts");
    posts.forEach(post => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.setAttribute("data-category", post.category);

        card.innerHTML = `
                <img src="${post.image}" alt="${post.alt}">
                    <div class="card-content">
                    <h2>${post.title}</h2>
                    <p class="post-category">Categoria: ${post.category}</p>
                    <p class="post-meta">${meta}</p>
                </div>
            `;
        dados.appendChild(card);

    });
}

//filtro de categorias

function categorias() {
    const categorias = document.querySelectorAll(".categories a");

    categorias.forEach(cat => {
        cat.addEventListener("click", (e) => {
            e.preventDefault();

            const categoria = cat.textContent.trim();
            const posts = document.querySelectorAll(".cards-container .card");

            posts.forEach(post => {
                if (categoria === "Todas" || post.getAttribute("data-category") === categoria) {
                    post.style.display = "block";
                } else {
                    post.style.display = "none";
                }
            });
        });
    });
}

window.onload = () => {
    carregarPosts();
    categorias();
};