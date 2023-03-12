const botoesCarrossel = document.querySelectorAll('.botao')
const imagens = document.querySelectorAll('.imagem')
botoesCarrossel.forEach((botao, indice) => {
  botao.addEventListener('click', () => {
    console.log('clicou no botao')
    desativarBotaoSelecionado();
    selecionarBotaoCarrossel(botao);
    esconderImagemAtiva();
    mostrarImagemDeFundo(indice);
  })
})

function selecionarBotaoCarrossel(botao) {
  botao.classList.add('selecionado')
}

function mostrarImagemDeFundo(indice) {
  imagens[indice].classList.add('ativa')
}

function esconderImagemAtiva() {
  const imagemAtiva = document.querySelector('.ativa')
  imagemAtiva.classList.remove('ativa')
}

function desativarBotaoSelecionado() {
  const botaoSelecionado = document.querySelector('.selecionado')
  botaoSelecionado.classList.remove('selecionado')
}

