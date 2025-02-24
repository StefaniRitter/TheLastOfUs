/**
 * objetivo: clicar no botão e mostrar imagem correspondente 
 * 1- pegar o html do botao
 * 2-indentificar o clique do usuario no botao
 * 3-desmarcar o botao selecionado anterior
 * 4-marcar o botao clicado como selecionado 
 * 5-esconder a imagem anterior
 * 6- aparecer imagem correspondente
 */

//passo 1 

    const botoesCarrossel = document.querySelectorAll('.botao');
    const imagens = document.querySelectorAll('.imagem ') ;   

//passo 2
    botoesCarrossel.forEach((botao, indice) => {
        botao.addEventListener('click', () => {

//passo 3

    const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');

//passo 4
    botao.classList.add('selecionado');

//passo 5
    const  imagemAtiva = document.querySelector('.ativa');
                imagemAtiva.classList.remove('ativa');
//passo 6
            imagens[indice].classList.add('ativa');
})
})