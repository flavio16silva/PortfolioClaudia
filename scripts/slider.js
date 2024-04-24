
let radio = document.querySelectorAll('.manual-btn');
let cont = 1;
document.getElementById('radio1').checked = true;
let direction = 1; // Variável para controlar a direção do slide

setInterval(() => {
  proximaImg();
}, 5000);

function proximaImg() {
  if (cont === 1 && direction === -1) {
    direction = 1; // Se voltando da terceira para a segunda, mudar a direção para a frente
  } else if (cont === 3 && direction === 1) {
    direction = -1; // Se indo da segunda para a terceira, mudar a direção para trás
  }

  cont += direction; // Incrementar ou decrementar o contador com base na direção
  
  document.getElementById('radio' + cont).checked = true;
}
