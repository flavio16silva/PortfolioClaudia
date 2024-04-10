//Barra de navegação responsiva em dispositivos móveis
// ---------------------------------------------
//Seleção de Elementos HTML:
const navbar = document.querySelector('.navbar');
const mobileNavbar = document.querySelector('.navbar__mobile');
const button = document.querySelector('.burguer');

//Evento de clique no botão do menu hamburguer:
button.addEventListener('click', function () {
  mobileNavbar.classList.toggle('active');
});

//Evento de rolagem da janela:
// window.addEventListener('scroll', function () {
//   if (this.window.pageYOffset > 0) return navbar.classList.add('active');
//   return navbar.classList.remove('active');
// });




//Mostra se o usuário está na guia da página, caso ele saia, mostra a mensagem e a imagem.
document.addEventListener('visibilitychange',
  function () {
      if (document.visibilityState === "visible") {
          document.title = "Portfolio | Claudia Palma";
          // $("#favicon").attr("href", "js/...");
      } else {
          document.title = "Volte aqui!";
          // $("#favicon").attr("href", "js/favhand.png");
      }
  });



// const typing = document.querySelector('[data-js="typing"]')

/* ----- Efeito de Escrever no inicio da página ----
  cria um array de objetos, com as frases a serem escritas, se vai durar sempre, a velocidade da escrita, a velocidade de volta da escrita e o atraso para escrever.
*/ 

var typed = new Typed(".escrever-texto", {
  strings: ["avalio para porte de armas", "realizo seleção e treinamento", "faço avaliação de desempenho."],
  loop: true,
  typeSpeed: 50,
  backSpeed: 25,
  backDelay: 500
});

//Frase do Pensador:
// var typed = new Typed(".citacao", {
//   strings: ["Quem olha para fora sonha, quem olha para dentro desperta - Carl Jung " ],
//   loop: true,
//   typeSpeed: 50,
//   backSpeed: 25,
//   backDelay: 500
// });





// <!-- Cria o efeito 3D nas imagens -->
// VanillaTilt.init(document.querySelectorAll(".tilt"), {
//   max: 20,
// })

/*------------- Botão de voltar ao Topo ------------*/
window.onscroll = function() {
   scroll();
}

/* Função botão quando usar o scroll */
function scroll() {
      let btn = document.getElementById("btnTop")
      if (document.documentElement.scrollTop > 90) {
        btn.style.opacity = "1"
        btn.style.right = "0"
    } else {
        btn.style.opacity = "0"
        btn.style.right = "70px"
    }
    
}

/* Função ir ao Topo*/
  function backToTop() {
    // document.documentElement.scrollTop = 0
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
  })
  }

  /*---------Whatsapp----------*/
  const content = document.querySelector('[data-shrink="yes"]')

  setInterval(function() {
    content.classList.toggle('shrink')
  }, 5000)

  /*Estilizando o Span*/
  setInterval(function() {
    span.classList.toggle('aparecer')
  }, 5100) 