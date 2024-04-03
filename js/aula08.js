/* Arquivo JS aula 08 DOM */

// DOM = Document Object Model
// Arvore com elementos desde o Browser, a Janela do Browser, o Documento e cada elemento html que formam os conteudos.

// .querySelector()
// selecionar elemento com base na tag, #id ou .class
let titulo = document.querySelector('h1')
// .querySelectorAll()
let testando = document.querySelectorAll('.box')
// selecionar todos elemento com base na tag, #id ou .class
titulo.textContent = 'DOM'
/*.textContent
propriedade ou atributo textContent
serve para acessar ou alterar conteudo
de um elemento que foi selecionado
*/

//console.log(testando)
document.write(testando[0].textContent)
document.write(testando[1].textContent)
document.write(testando[2].textContent)
/*testando[0].textContent = 'Deu certo'
testando[1].textContent = 'mudei aq tmb'
testando[2].textContent = 'esse tmb'
*/

//.getElementsByTagName()
let testeTag = document.getElementsByTagName('div')
//.getElementById()
let testeId = document.getElementById('titulo')
//.getElementsByClassName()
let testeClass = document.getElementsByClassName('box')
