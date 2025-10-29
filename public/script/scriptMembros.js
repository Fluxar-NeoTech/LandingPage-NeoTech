// ======================================================
// CONFIGURAÇÃO E DADOS DOS MEMBROS
// ======================================================

// Função auxiliar para gerar um lorem ipsum único para cada membro
function generateUniqueLorem(name) {
    // Adiciona o nome do membro para garantir que o texto seja único (e para fácil identificação)
    if (name == 'AnaGarcia') {
        return `Meu nome é Ana Caroline Garcia, tenho 15 anos e já trabalhei com HTML, CSS, SQL, JavaScript, Java, Python, Excel e Shell Script. Gosto de desenhar, filosofia e música. Dedico-me ao que desperta minha afinidade, com destaque para o front-end, mas também atuo bem em desenvolvimento e banco de dados.`;
    } else if (name == 'AnnaBonfim') {
        return `Meu nome é Anna Bonfim, tenho 16 anos, Trabalhei com SQL, Java, Regex, UX (figma) e Excel. Gosto de escutar kpop, asistir filmes de teror, fazer modelos conceituais e lógicos (como hobbie), gosto de ler e cozinhar doces`;
    } else if (name == 'Caio') {
        return `Sou Caio Marcos, tenho 16 anos e sou apaixonado por programação, atuando tanto em gestão de dados quanto no desenvolvimento de aplicações web e mobile. Sou speedcuber, resolvendo o cubo mágico com agilidade, e tenho como hobby pesquisar sobre ciência, aviões e foguetes.`;
    } else if (name == 'Carlos') {
        return `Meu nome é Carlos, tenho 15 anos e gosto de trabalhar com Java, Python, HTML e SQL. No meu tempo livre, pratico academia, faço truques de mágica e gosto de assistir animes, atividades que me ajudam a equilibrar foco e criatividade.`;
    } else if (name == 'Diego') {
        return `Meu nome é Diego, tenho 16 anos e já trabalhei com Design, Java e SQL. Sou apaixonado por futebol, programação e por conhecer novas culturas e lugares, sempre buscando aprender algo diferente a cada experiência.`;
    } else if (name == 'Diogo') {
        return `Meu nome é Diogo, tenho 17 anos e atuo com frontend e backend. Gosto de livros, séries e filmes, e no meu tempo livre costumo tocar instrumentos e aprender coisas novas, sempre buscando evoluir.`;
    } else if (name == 'Duda') {
        return `Oie! Eu sou a Duda, tenho 17 anos e atuei no desenvolvimento back-end do projeto. Adoro ouvir música, e meus hobbies favoritos são cozinhar e treinar, sempre buscando equilíbrio entre foco e diversão.`;
    } else if (name == 'Giovana') {
        return `Oiiee! Sou a Giovanna, tenho 17 anos. Tive contato com experiências diversas, tanto na área de Dados com banco de dados, machine learning e Inteligência Artificial quanto com a área de back-end.
Sou apaixonada por expressões da vida por meio da arte, principalmente na música e literatura.`;
    } else if (name == 'Guilherme') {
        return `Meu nome é Guilherme, tenho 15 anos e atuo com design e desenvolvimento full-stack de aplicativos. Sou apaixonado por futebol e outros esportes, além de gostar de explorar novos conhecimentos e lugares, sempre buscando evoluir em tudo o que faço.`;
    } else if (name == 'Gustavo') {
        return `Meu nome é Gustavo, tenho 16 anos e adoro trabalhar com HTML, CSS e JavaScript — enfim, sou um dev de coração. Curto ler manhwas, assistir animes e malhar, equilibrando mente e corpo no meu dia a dia.`;
    } else if (name == 'Heloisa') {
        return `Oi, gente! Eu sou a Heloisa, tenho 16 anos e gosto de trabalhar tanto com frontend quanto com backend. Sou apaixonada por séries e filmes, e adoro experimentar coisas novas, mesmo quando não domino de primeira.`;
    } else if (name == 'Leticia') {
        return `Oiee, eu sou a Letícia, tenho 17 anos e amo a área de Análise de Dados. Explorar, descobrir coisas novas e conhecer novos mundos sempre foi meu objetivo. Além disso, no meu tempo livre, gosto de me dedicar à arte, desde desenhar até dançar, e também jogar vôlei.`;
    } else if (name == 'Lucas') {
        return `Sou o Lucas, tenho 16 anos e gosto de ler Invencível. Já trabalhei com Desenvolvimento de Sistemas — usando HTML, CSS e JavaScript — além de Inteligência Artificial e Excel. Gosto de unir criatividade e lógica em tudo o que faço.`;
    } else if (name == 'Mayumi') {
        return `Oie gente! Eu sou a Mayumi, tenho 17 anos e trabalhei na parte de IA e machine learning do projeto. Amo dados e design, e acredito que o futuro nasce quando a criatividade e cálculos se combinam.`;
    } else if (name == 'Natalia') {
        return `Sou a Natália, tenho 17 anos e trabalho principalmente com DevOps e back-end, além de contribuir com o design do projeto. No tempo livre, gosto de ler, assistir séries e escrever, o que me ajuda a exercitar a criatividade.`;
    }
}

// Array com os dados dos membros (nome, imagem e descrição)
const members = [
    { name: 'Ana Garcia', image: '/public/assets/images/AnaGarcia--1.png', priority: 1, description: generateUniqueLorem('AnaGarcia') },
    { name: 'Anna Bonfim', image: '/public/assets/images/AnnaBonfim--1.png', priority: 1, description: generateUniqueLorem('AnnaBonfim') },
    { name: 'Caio', image: '/public/assets/images/Caio--1.png', priority: 1, description: generateUniqueLorem('Caio') },
    { name: 'Carlos', image: '/public/assets/images/Carlos--1.png', priority: 1, description: generateUniqueLorem('Carlos') },
    { name: 'Diego', image: '/public/assets/images/Diego--1.png', priority: 1, description: generateUniqueLorem('Diego') },
    { name: 'Diogo', image: '/public/assets/images/Diogo--2.png', priority: 2, description: generateUniqueLorem('Diogo') },
    { name: 'Eduarda', image: '/public/assets/images/Duda--2.png', priority: 2, description: generateUniqueLorem('Duda') },
    { name: 'Giovana', image: '/public/assets/images/Giovana--2.png', priority: 2, description: generateUniqueLorem('Giovana') },
    { name: 'Guilherme', image: '/public/assets/images/Guilherme--1.png', priority: 1, description: generateUniqueLorem('Guilherme') },
    { name: 'Gustavo', image: '/public/assets/images/Gustavo--1.png', priority: 1, description: generateUniqueLorem('Gustavo') },
    { name: 'Heloisa', image: '/public/assets/images/Heloisa--2.png', priority: 2, description: generateUniqueLorem('Heloisa') },
    { name: 'Leticia', image: '/public/assets/images/Leticia--2.png', priority: 2, description: generateUniqueLorem('Leticia') },
    { name: 'Lucas', image: '/public/assets/images/Lucas--1.png', priority: 1, description: generateUniqueLorem('Lucas') },
    { name: 'Mayumi', image: '/public/assets/images/Mayumi--2.png', priority: 2, description: generateUniqueLorem('Mayumi') },
    { name: 'Natalia', image: '/public/assets/images/Natalia--2.png', priority: 2, description: generateUniqueLorem('Natalia') },
];

// O loremIpsum global não é mais necessário, pois cada membro tem o seu.
// const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

// ======================================================
// FUNÇÕES DE ORDENAÇÃO
// ======================================================

/**
 * Ordena os membros alfabeticamente, com prioridade para os com priority 1
 * @returns {Array} Array de membros ordenados
 */
function sortMembers() {
    return members.sort((a, b) => {
        // Primeiro, ordena por prioridade (1 antes de 2)
        if (a.priority !== b.priority) {
            return a.priority - b.priority;
        }
        // Depois, ordena alfabeticamente pelo nome
        return a.name.localeCompare(b.name);
    });
}

// ======================================================
// FUNÇÕES DO CARROSSEL
// ======================================================

/**
 * Calcula a posição de cada item no carrossel circular
 * @param {number} index - Índice do item
 * @param {number} total - Total de itens
 * @param {number} radius - Raio do círculo
 * @returns {Object} Objeto com as coordenadas x e y
 */
function getCarouselPosition(index, total, radius) {
    const angle = (index / total) * 2 * Math.PI;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    return { x, y };
}

/**
 * Inicializa o carrossel com as imagens dos membros
 */
function initializeCarousel() {
    const carousel = document.getElementById('carousel');
    const sortedMembers = sortMembers();
    const radius = 200; // Raio do círculo
    const total = sortedMembers.length;

    // Limpa o carrossel
    carousel.innerHTML = '';

    // Cria os itens do carrossel
    sortedMembers.forEach((member, index) => {
        const position = getCarouselPosition(index, total, radius);

        // Cria o elemento do item
        const item = document.createElement('div');
        item.className = 'carousel-item';
        item.style.left = `calc(40% + ${position.x}px)`;
        item.style.top = `calc(60% + ${position.y}px)`;
        item.style.transform = 'translate(-50%, -50%)';

        // Cria a imagem
        const img = document.createElement('img');
        img.src = member.image; // Caminho atualizado
        img.alt = member.name;

        // Adiciona a imagem ao item
        item.appendChild(img);

        // Adiciona evento de clique
        item.addEventListener('click', () => {
            selectMember(member, index);
        });

        // Adiciona o item ao carrossel
        carousel.appendChild(item);

        // Define o primeiro membro como selecionado
        if (index === 0) {
            item.classList.add('active');
            displayMember(member);
        }
    });
}

/**
 * Seleciona um membro e atualiza a exibição
 * @param {Object} member - Objeto do membro
 * @param {number} index - Índice do membro
 */
function selectMember(member, index) {
    // Remove a classe 'active' de todos os itens
    const items = document.querySelectorAll('.carousel-item');
    items.forEach(item => item.classList.remove('active'));

    // Adiciona a classe 'active' ao item selecionado
    items[index].classList.add('active');

    // Exibe o membro selecionado
    displayMember(member);
}

/**
 * Exibe o membro selecionado na área de exibição
 * @param {Object} member - Objeto do membro
 */
function displayMember(member) {
    const memberImage = document.getElementById('memberImage');
    const memberName = document.getElementById('memberName');
    const memberDescription = document.getElementById('memberDescription');

    // Atualiza a imagem
    memberImage.src = member.image;
    memberImage.alt = member.name;

    // Atualiza o nome
    memberName.textContent = member.name;

    // Atualiza a descrição (lorem ipsum individual)
    memberDescription.textContent = member.description;
}

// ======================================================
// MENU HAMBÚRGUER (MOBILE)
// ======================================================

/**
 * Inicializa o menu hambúrguer para mobile
 */
function initializeMenuToggle() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Fecha o menu ao clicar em um link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

// ======================================================
// INICIALIZAÇÃO
// ======================================================

/**
 * Inicializa a página quando o DOM está pronto
 */
document.addEventListener('DOMContentLoaded', () => {
    initializeCarousel();
    initializeMenuToggle();
});