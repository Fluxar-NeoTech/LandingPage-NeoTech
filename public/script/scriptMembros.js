document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleciona os elementos principais
    const membersDataContainer = document.getElementById('membersData');
    // Converte a coleção HTML em um Array para facilitar a navegação
    const members = Array.from(membersDataContainer.children);

    const memberImage = document.getElementById('memberImage');
    const memberName = document.getElementById('memberName');
    const memberDescription = document.getElementById('memberDescription');

    const arrowLeft = document.querySelector('.arrow-left');
    const arrowRight = document.querySelector('.arrow-right');

    // =========================================================
    // NOVAS SELEÇÕES DE ELEMENTOS (ADICIONADO)
    // =========================================================
    // Seleciona TODOS os blocos de Contexto e Skills
    const allContextLists = document.querySelectorAll('.context-info-list');
    const allSkillsLists = document.querySelectorAll('.skills-list');

    // Estado inicial
    let currentIndex = 0;

    // Opcional: Efeito de pulso na imagem
    memberImage.style.transition = 'opacity 0.3s ease-in-out';
    // Removemos os estilos de transição daqui, pois o CSS já faz isso
    // =========================================================

    // NOVO: Função para trocar o Bloco Lateral Ativo (Contexto e Skills)
    const setSideContentActive = (memberName) => {
        // 1. Formata o nome para bater com os IDs HTML (Ex: 'Ana Garcia' -> 'AnaGarcia')
        const idName = memberName.replace(/[^a-zA-Z0-9]/g, '');

        // --- CONTEXTO (Lado Esquerdo - Div Ano/Função) ---
        allContextLists.forEach(list => {
            list.classList.remove('active'); // Oculta todos
        });
        const activeContextList = document.getElementById(`context-${idName}`);
        if (activeContextList) {
            activeContextList.classList.add('active'); // Exibe o correto
        }

        // --- SKILLS (Lado Direito - Tags) ---
        allSkillsLists.forEach(list => {
            list.classList.remove('active'); // Oculta todos
        });
        const activeSkillsList = document.getElementById(`skills-${idName}`);
        if (activeSkillsList) {
            activeSkillsList.classList.add('active'); // Exibe o correto
        }
    };


    // 2. Função para atualizar a visualização do membro
    const updateMemberDisplay = (index) => {
        // Garante que o índice circule (loop infinito)
        if (index < 0) {
            currentIndex = members.length - 1;
        } else if (index >= members.length) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }

        const currentMember = members[currentIndex];
        const name = currentMember.getAttribute('data-name'); // Nome é pego aqui

        // Aplica o fade-out na imagem
        memberImage.style.opacity = '0';

        // NOVO: Aplica o fade-out nos blocos laterais visíveis
        allContextLists.forEach(el => el.classList.remove('active')); // Desativa o bloco para fade-out
        allSkillsLists.forEach(el => el.classList.remove('active')); // Desativa o bloco para fade-out


        setTimeout(() => {
            // Atualiza os dados no momento da transição
            const imageSrc = currentMember.getAttribute('data-image');
            const desc = currentMember.getAttribute('data-desc');

            // Atualiza o conteúdo central
            memberImage.src = imageSrc;
            memberImage.alt = name;
            memberName.textContent = name;
            memberDescription.textContent = desc;

            // ==========================================
            // CHAMADA DA NOVA FUNCIONALIDADE (ADICIONADO)
            // ==========================================
            setSideContentActive(name);
            // ==========================================

            // Reverte a transição/efeito na imagem
            memberImage.style.opacity = '1';

        }, 300); // Tempo para o fade-out/in
    };

    // 3. Adiciona ouvintes de evento (event listeners) às setas
    arrowLeft.addEventListener('click', () => {
        updateMemberDisplay(currentIndex - 1);
    });

    arrowRight.addEventListener('click', () => {
        updateMemberDisplay(currentIndex + 1);
    });

    // 4. Garante que o primeiro membro seja exibido ao carregar (inicializa a visualização)
    updateMemberDisplay(0);
});