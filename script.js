// Função para alternar a exibição dos detalhes de um card
function toggleDetails(selectedDetail) {
  // Pegar todos os elementos "details" dentro da class ".card"
  const allCardDetails = document.querySelectorAll('.card details');

  // Percorre a lista de elementos dentro da constante "allCardsDetails" 
  for (detail of allCardDetails) {
    // Verifica se o elemento atual (detail) é diferente ao que foi clicado (selectedDetail)
    if (detail !== selectedDetail) {
      // Caso seja então remove o atributo do elemento
      detail.removeAttribute('open');
    }
  }
}

// Percorre uma lista de todas as ancoras "<a href=..."
for (anchor of document.querySelectorAll('a[href^="#"]')) {
  // Adiciona um evento ao clicar na ancora
  anchor.addEventListener('click', function (e) {
    // Previne os eventos padrões
    e.preventDefault();

    const targetId = this.getAttribute('href'); // Pega o id da ancora
    const targetElement = document.querySelector(targetId); // Pega o id do alvo "<section id=..."
    const offset = document.getElementsByTagName("header")[0].offsetHeight; // Pega a altura do header

    // Função pro scroll ir até o elemento alvo
    window.scrollTo({
      top: targetElement.offsetTop - offset, // Calcula a altura em que o scroll vai
      behavior: 'smooth' // Define como vai ser a rolagem
    });
  });
};

function toggleMaquina(event, element) {
  event.stopPropagation();
  const card = element.closest(".card") || element;
  card.classList.toggle("active");
}