// Seleciona o botão de menu e o menu lateral
const menuToggle = document.getElementById('menuToggle');
const menuLateral = document.getElementById('menuLateral');

// Alterna a classe 'ativo' no menu lateral ao clicar no botão
menuToggle.addEventListener('click', () => {
  menuLateral.classList.toggle('ativo');
});