// 1 Acessar a Janela(browser)
// 2 Pegar o HTML inteiro
// 3 Pegar o botão
// 4 Saber que está sendo clicado no botão

// 5 Acessa a janela
// 6 Pegar o HTML
// 7 Pegar o elements
// 8 Mover o elements para a direita


const buttonLeft = document.querySelector('.button-arrow.-left');
const buttonRight = document.querySelector('.button-arrow.-right');
const elements = document.querySelector(".elements");
let pixels = 0

buttonRight.addEventListener('click', function() {
   pixels += 100
   elements.style = `transform: translateX(${pixels}px)`
});

buttonLeft.addEventListener('click', function() {
    pixels -= 100
   elements.style = `transform: translateX(${pixels}px)`
});