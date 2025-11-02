document.addEventListener("DOMContentLoaded", () => {
  // ----------------------------------------------------
  // FUNÇÃO PRINCIPAL: Aplica ou remove o comportamento mobile
  // ----------------------------------------------------
  const setupFooterAccordion = () => {
    // Seleciona todos os títulos (elementos originais no DOM)
    const originalTitles = document.querySelectorAll(".footer-links h4");
    const newTitles = []; // Array para guardar os títulos atualizados

    // Define o breakpoint para mobile
    const isMobile = window.innerWidth <= 768;

    // 1. CLONA E SUBSTITUI TODOS OS TÍTULOS PRIMEIRO
    // Isso garante que todos os títulos no DOM são 'fresh' e sem listeners antigos
    originalTitles.forEach((title) => {
      const clonedTitle = title.cloneNode(true);
      title.replaceWith(clonedTitle);
      newTitles.push(clonedTitle); // Salva o novo título
    });

    // 2. PROCESSA OS NOVOS TÍTULOS
    newTitles.forEach((newTitle) => {
      // O conteúdo (ul) ainda está no DOM, vamos buscá-lo do novo pai
      const content = newTitle.parentElement.querySelector("ul");

      // Remove setas existentes (limpeza)
      const existingArrow = newTitle.querySelector(".footer-arrow");
      if (existingArrow) existingArrow.remove();

      // --- MODO DESKTOP (PC / > 768px) ---
      if (!isMobile) {
        if (content) {
          content.style.maxHeight = "none";
          content.style.opacity = "1";
          content.style.pointerEvents = "auto";
        }
        newTitle.style.cursor = "default";
        newTitle.classList.remove("active");
        return;
      }

      // --- MODO MOBILE (Criação da Seta e Lógica de Accordion) ---

      // 1. Cria e Adiciona a Seta
      newTitle.style.cursor = "pointer";
      newTitle.style.display = "flex";
      newTitle.style.alignItems = "center";
      newTitle.style.justifyContent = "space-between";
      newTitle.style.position = "relative";

      const arrow = document.createElement("span");
      arrow.innerHTML = "&#8250;"; // ›
      arrow.classList.add("footer-arrow");
      arrow.style.fontSize = "1.2rem";
      arrow.style.color = "#ff8a05";
      arrow.style.transition = "transform 0.3s ease";
      arrow.style.marginLeft = "12px";
      newTitle.appendChild(arrow);

      // 2. Garante que os links estão fechados ao carregar/entrar no mobile
      if (content) {
        content.style.overflow = "hidden";
        content.style.maxHeight = "0";
        content.style.opacity = "0";
        content.style.transition = "max-height 0.35s ease, opacity 0.3s ease";
        content.style.pointerEvents = "none";
      }

      // 3. Adiciona a Lógica de Clique (Accordion)
      newTitle.addEventListener("click", () => {
        const isActive = newTitle.classList.toggle("active");

        // Agora usamos newTitles (a lista atualizada) para fechar os outros
        newTitles.forEach((otherTitle) => {
          if (otherTitle !== newTitle) {
            otherTitle.classList.remove("active");
            const otherContent = otherTitle.parentElement.querySelector("ul");
            const otherArrow = otherTitle.querySelector(".footer-arrow");

            if (otherContent) {
              otherContent.style.maxHeight = "0";
              otherContent.style.opacity = "0";
              otherContent.style.pointerEvents = "none";
            }
            // Verifica se a seta existe antes de tentar transformá-la
            if (otherArrow) otherArrow.style.transform = "rotate(0deg)";
          }
        });

        // Trata o título clicado
        if (content) {
          if (isActive) {
            // Calcula a altura correta (scrollHheight) para a transição
            content.style.maxHeight = content.scrollHeight + "px";
            content.style.opacity = "1";
            content.style.pointerEvents = "auto";
            arrow.style.transform = "rotate(90deg)";
          } else {
            content.style.maxHeight = "0";
            content.style.opacity = "0";
            content.style.pointerEvents = "none";
            arrow.style.transform = "rotate(0deg)";
          }
        }
      });
    });

    // Mantém "Conecte-se" sempre visível
    const social = document.querySelector(".footer-social .social-icons");
    if (social) {
      social.style.maxHeight = "none";
      social.style.opacity = "1";
      social.style.pointerEvents = "auto";
    }
  };

  // ----------------------------------------------------
  // INICIALIZAÇÃO e EVENTO DE REDIMENSIONAMENTO (F12)
  // ----------------------------------------------------

  // 1. Executa no carregamento da página
  setupFooterAccordion();

  // 2. Executa toda vez que a janela é redimensionada
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(setupFooterAccordion, 100);
  });
});