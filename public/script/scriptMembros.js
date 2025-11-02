document.addEventListener('DOMContentLoaded', () => {
    // ===============================
    // CARROSSEL DE MEMBROS
    // ===============================

    const membersDataContainer = document.getElementById('membersData');
    const members = Array.from(membersDataContainer.children);
    const memberImage = document.getElementById('memberImage');
    const memberName = document.getElementById('memberName');
    const memberDescription = document.getElementById('memberDescription');
    const arrowLeft = document.querySelector('.arrow-left');
    const arrowRight = document.querySelector('.arrow-right');

    const allContextLists = document.querySelectorAll('.context-info-list');
    const allSkillsLists = document.querySelectorAll('.skills-list');

    let currentIndex = 0;
    memberImage.style.transition = 'opacity 0.3s ease-in-out';

    const setSideContentActive = (memberName) => {
        const idName = memberName.replace(/[^a-zA-Z0-9]/g, '');

        allContextLists.forEach(list => list.classList.remove('active'));
        allSkillsLists.forEach(list => list.classList.remove('active'));

        const activeContext = document.getElementById(`context-${idName}`);
        const activeSkills = document.getElementById(`skills-${idName}`);

        if (activeContext) activeContext.classList.add('active');
        if (activeSkills) activeSkills.classList.add('active');
    };

    const updateMemberDisplay = (index) => {
        if (index < 0) currentIndex = members.length - 1;
        else if (index >= members.length) currentIndex = 0;
        else currentIndex = index;

        const currentMember = members[currentIndex];
        const name = currentMember.getAttribute('data-name');

        memberImage.style.opacity = '0';
        allContextLists.forEach(el => el.classList.remove('active'));
        allSkillsLists.forEach(el => el.classList.remove('active'));

        setTimeout(() => {
            const imageSrc = currentMember.getAttribute('data-image');
            const desc = currentMember.getAttribute('data-desc');

            memberImage.src = imageSrc;
            memberImage.alt = name;
            memberName.textContent = name;
            memberDescription.textContent = desc;
            setSideContentActive(name);

            memberImage.style.opacity = '1';
        }, 300);
    };

    arrowLeft.addEventListener('click', () => updateMemberDisplay(currentIndex - 1));
    arrowRight.addEventListener('click', () => updateMemberDisplay(currentIndex + 1));
    updateMemberDisplay(0);

    // ===============================
    // SEÇÃO DAS BOLAS (NeoTech)
    // ===============================
    const bolas = document.querySelectorAll('.bolas > div');
    const blocosTexto = document.querySelectorAll('.Texto-Historia, .Texto-Fundacao, .Texto-Objetivo');

    const activateItem = (classeAtiva) => {
        // remove classes
        bolas.forEach(bola => bola.classList.remove('active'));
        blocosTexto.forEach(bloco => bloco.classList.remove('active'));

        // adiciona
        const bolaAtiva = document.querySelector(`.${classeAtiva}`);
        const blocoAtivo = document.querySelector(`.Texto-${classeAtiva.charAt(0).toUpperCase() + classeAtiva.slice(1)}`);

        if (bolaAtiva) bolaAtiva.classList.add('active');
        if (blocoAtivo) blocoAtivo.classList.add('active');
    };

    // Clique nas bolinhas
    bolas.forEach(bola => {
        bola.addEventListener('click', () => {
            const classe = bola.classList[0]; // ex: historia, fundacao, objetivo
            activateItem(classe);
        });
    });

    // inicia com a primeira ativa
    activateItem('historia');
});
