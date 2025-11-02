// O tempo de espera (em milissegundos) DEVE coincidir com o tempo de transição no CSS (0.3s = 300ms)
const TRANSITION_TIME = 300; 

// Obtém os elementos dos botões
const btnMensal = document.getElementById('btnMensal');
const btnAnual = document.getElementById('btnAnual');

// Obtém os cards individuais para aplicar a animação neles
const card1 = document.getElementById('p1m');
const card2 = document.getElementById('p2m');
const card3 = document.getElementById('p3m');
const cards = [card1, card2, card3];


function mudarConteudoMENSAL() {
    // Retorna se o script não encontrou os botões ou se já está no modo ativo
    if (!btnMensal || btnMensal.classList.contains('active')) return; 

    // 1. INICIA O FADE OUT/SLIDE OUT: Adiciona a classe em CADA card
    cards.forEach(card => card.classList.add('is-leaving'));

    // 2. ESPERA A ANIMAÇÃO TERMINAR (300ms) e depois troca o conteúdo
    setTimeout(() => {
        
        // --- MUDANÇA DE CONTEÚDO (Mensal) ---
        document.getElementById("p1").innerHTML = "599,99";
        document.getElementById("p2").innerHTML = "899,99";
        document.getElementById("p3").innerHTML = "1599,99";
        
        // MUDANDO O PERÍODO: /mês
        document.getElementById("periodo1").innerHTML = "/mês";
        document.getElementById("periodo2").innerHTML = "/mês";
        document.getElementById("periodo3").innerHTML = "/mês";
        
        // --- ATUALIZAÇÃO DE ESTADO ---
        btnMensal.classList.add('active');
        btnAnual.classList.remove('active');

        // 3. INICIA O FADE IN/SLIDE IN: Remove a classe para que volte ao estado padrão
        cards.forEach(card => card.classList.remove('is-leaving'));
        
    }, TRANSITION_TIME);
}

function mudarConteudoANUAL() {
    // Retorna se o script não encontrou os botões ou se já está no modo ativo
    if (!btnAnual || btnAnual.classList.contains('active')) return; 

    // 1. INICIA O FADE OUT/SLIDE OUT: Adiciona a classe em CADA card
    cards.forEach(card => card.classList.add('is-leaving'));

    // 2. ESPERA A ANIMAÇÃO TERMINAR (300ms) e depois troca o conteúdo
    setTimeout(() => {
        
        // --- MUDANÇA DE CONTEÚDO (Anual) ---
        document.getElementById("p1").innerHTML = "499,00";
        document.getElementById("p2").innerHTML = "799,00";
        document.getElementById("p3").innerHTML = "1499,00";
        
        // MUDANDO O PERÍODO: /ano
        document.getElementById("periodo1").innerHTML = "/mes";
        document.getElementById("periodo2").innerHTML = "/mes";
        document.getElementById("periodo3").innerHTML = "/mes";
        
        // --- ATUALIZAÇÃO DE ESTADO ---
        btnAnual.classList.add('active');
        btnMensal.classList.remove('active');

        // 3. INICIA O FADE IN/SLIDE IN: Remove a classe para que volte ao estado padrão
        cards.forEach(card => card.classList.remove('is-leaving'));
        
    }, TRANSITION_TIME); 
}