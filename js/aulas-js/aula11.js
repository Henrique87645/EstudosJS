function carregou() {
    console.log('Página carregada com sucesso!')
    /*quando recarregar a pagina, aparece a function */
}

function focou() {
    console.log('Foco no título')
    /*quano passar o mouse por cima do titulo */
}

function rolouPagina() {
    console.log('Pagina rolando')
    //quando rolar o scrow
}

function focoNoCampo() {
    console.log("Foco no campo de texto")
    //colocar o mouse por cima da aba d texto
}

function semFocoNoCampo() {
    console.log("Saiu o Foco do campo de texto")
    //quando retirar o mouse de cima do campo de texto
}

let letras = document.querySelector('input[type=text]') //letas é o input da caixa de texto que é cahamado de [type=text]
function avisarQueTeclou() {
    let numLetras = 1 //começa a fazer a contagem do número 1 em diante 
    console.log('Está teclando ' + (letras.value.length + numLetras))
    //value pega o conteúdo do input 
}

let botao1 = document.querySelector('#btn1')
let botao2 = document.querySelector('#btn2')
let botaoEnviar = document.querySelector('#btn3')

// mouseover a seta do mouse esta no element
botao1.addEventListener('mouseover', function () { // não precisa adicionar a sigla 'on' do 'onmouseover'
    console.log('Foco no botão 1')
})

// focusout ou blur quando sai o focu
botao2.addEventListener('blur', function () { // não precisa adicionar a sigla 'on' do 'onblur' = perder o foco
    console.log('Foco no botão 2')
})

// 1 click do mouse
botaoEnviar.addEventListener('click', function (event) {
    event.preventDefault()
    console.log('Clicou no botão Enviar')
    // o evento 'event.preventDefault()' previne que quando a função 'submit' seja usada ele restaure a página
})