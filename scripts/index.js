const navbar = document.querySelector('.navbar');
const mobileNavbar = document.querySelector('.navbar__mobile');
const button = document.querySelector('.burguer');

button.addEventListener('click', function () {
  mobileNavbar.classList.toggle('active');
});

window.addEventListener('scroll', function () {
  if (this.window.pageYOffset > 0) return navbar.classList.add('active');
  return navbar.classList.remove('active');
});




//mostra se o usuário está na guia da página, caso ele saia, mostra a mensagem e a imagem.
document.addEventListener('visibilitychange',
  function () {
      if (document.visibilityState === "visible") {
          document.title = "Portfolio | Claudia Palma";
          $("#favicon").attr("href", "js/...");
      } else {
          document.title = "Volte aqui!";
          $("#favicon").attr("href", "js/favhand.png");
      }
  });



// const typing = document.querySelector('[data-js="typing"]')

// const messages = ["Desenvolvendo em Front End", "Estudando Java Script", "Construindo projetos sempre"]

// let messageIndex = 0
// let characterIndex = 0
// let currentMessage = ''
// let currentCharacters = ''

// const type = () => {
//   if(messageIndex === messages.length) {
//     messageIndex = 0
//   }
// }

// currentMessage = messages[messageIndex]
// currentCharacters = currentMessage.slice(0, characterIndex++)
// typing.textContent = currentCharacters

// if(currentCharacters.length === currentMessage.length) {
//   messageIndex++
//   characterIndex = 0
// }

// setInterval(type,200)





// Efeito de Escrever no inicio da página
// cria um array de objetos, com as frases a serem escritas,
// se vai durar sempre, a velocidade da escrita, a velocidade de volta da escrita e o atraso para escrever.
var typed = new Typed(".escrever-texto", {
  strings: ["avalio para porte de armas", "realizo seleção e treinamento."],
  loop: true,
  typeSpeed: 50,
  backSpeed: 25,
  backDelay: 500
});

//Frase do Steve:
var typed = new Typed(".citacao", {
  strings: ["As pessoas que são loucas o suficiente para pensar que podem mudar o mundo são as que o fazem. - Steve Jobs " ],
  loop: true,
  typeSpeed: 50,
  backSpeed: 25,
  backDelay: 500
});





// <!-- Cria o efeito 3D nas imagens -->
VanillaTilt.init(document.querySelectorAll(".tilt"), {
  max: 20,
})


