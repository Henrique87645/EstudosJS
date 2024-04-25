let sit1 = document.querySelector('#sit1')
let sit2 = document.querySelector('#sit2')
let sit3 = document.querySelector('#sit3')
let escolha = document.querySelector('#escolha')

//let notaFinal1 = 3
/* IF 
if (notaFinal1 >= 7) {
    sit1.textContent = 'Aprovado'
}*/

/* IF ELSE 
if (notaFinal1 >= 7) {
    sit1.textContent = 'Aprovado(a)'
} else {
    sit1.textContent = 'Reprovado(a)'
}*/

/* IF TERNARIO */
let notaFinal2 = 8
notaFinal2 >= 7 ? sit2.textContent = 'Aprovado' : sit2.textContent = 'Reprovado' 
/* IF ENCADEADO OU ANINHADO */
let notaFinal3 = 6
if(notaFinal3 >= 7) {
    sit3.textContent = 'Aprovado'
} else if (notaFinal3 <= 3) {
    sit3.textContent = 'Reprovado'
} else {
    sit3.textContent = 'Recuperação'
}

switch(sit2.textContent) {

    case 'Aprovado':
        escolha.textContent = 'Passou de ano'
        break

    case 'Reprovado':
        escolha.textContent = 'NÃO passou de ano'
        break

    case 'Recuperação':
        escolha.textContent = 'Ainda tem uma chance'
        break

    default:
        escolha.textContent = 'Estude'
    // default nao precisa de break
}

switch(sit3.textContent) {

    case 'Aprovado':
        escolha1.textContent = 'Passou de ano'
        break

    case 'Reprovado':
        escolha1.textContent = 'NÃO passou de ano'
        break

    case 'Recuperação':
        escolha1.textContent = 'Ainda tem uma chance'
        break

    default:
        escolha1.textContent = 'Estude'
    // default nao precisa de break
}