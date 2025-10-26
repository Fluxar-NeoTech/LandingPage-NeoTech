const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

// Evento de clique no botão hamburguer
menuToggle.addEventListener('click', () => {
  const isActive = menuToggle.classList.toggle('active');
  navMenu.classList.toggle('active');
  
  // 👇 Adiciona ou remove a classe que faz o header deslizar
  if (isActive) {
    document.body.classList.add('menu-open');
  } else {
    document.body.classList.remove('menu-open');
  }
});

// Fecha o menu ao clicar em um link
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    navMenu.classList.remove('active');
    document.body.classList.remove('menu-open');
  });
});
