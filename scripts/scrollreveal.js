window.revelar = ScrollReveal({reset: true})

// Sobre
revelar.reveal('.efeito-esquerda',
{ 
  duration: 1500,
  distance:'90px',
  delay: 500,
  origin: 'left'
})

revelar.reveal('.efeito-direita',
{ 
  duration: 1500,
  distance:'100px',
  delay: 1000,
  origin: 'right'
})

// Topo do site - Titulos
revelar.reveal('.efeito_titulo',
{ 
  duration: 2000,
  distance:'90px'
})


// Sessão de Quadros
revelar.reveal('.efeito-quadro1',
{ 
  duration: 2000,
  distance:'90px',
  delay: 1000
})

revelar.reveal('.efeito-quadro2',
{ 
  duration: 2000,
  distance:'90px',
  delay:1500
})

revelar.reveal('.efeito-quadro3',
{ 
  duration: 2000,
  distance:'90px',
  delay:2000
})

revelar.reveal('.efeito-quadro4',
{ 
  duration: 2000,
  distance:'90px',
  delay:2500
})