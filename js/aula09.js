//.textContent e innerHTML 
//usados para acessar o html
let titulo = document.querySelector('h1')
titulo.innerHTML = 'Manipulando pelo CSS'

let subtutulo = document.querySelector('h2')
subtutulo.innerHTML = 'Imagem meramente ilustrativa'

let imagem = document.querySelector('#foto')
imagem.setAttribute('src', '/images/pride-fc.jpg')
imagem.setAttribute('width', '350px')
imagem.style.borderRadius = "15px";

/* MANIPULAR CSS */
//.style.color / .backgroundColor / .borderBottom / .padding / .borderRadius ...
titulo.style.color = "white";
titulo.style.backgroundColor = "#000";
titulo.style.borderBottom = "5px solid yellow";
titulo.style.padding = "0.625rem";
titulo.style.borderRadius = "15px";

let legenda1 = document.querySelector('p')
legenda1.textContent = 'PrideFC Lutas'

let box = document.querySelectorAll('.box')
box[0].setAttribute('class', 'escura')
box[1].setAttribute('class', 'escura')
//box[0].removeAttribute('class')
//box[1].removeAttribute('class')

/////// MODOS DE COR ///////
let tela = document.querySelector('main')

let btnDark = document.querySelector('#btdark')

let btnLight = document.querySelector('#btlight')

btnDark.addEventListener('click', modoDark)
btnLight.addEventListener('click', modoLight)

function modoDark() {
    //event.preventDefault();
    tela.classList.add("dark");
    tela.classList.remove("light");
}

function modoLight() {
    //event.preventDefault();
    tela.classList.remove("dark");
    tela.classList.add("light");
}

/*
titulo.addEventListener('click', mudarId)
function mudarId() {
    titulo.id = 'titulo'
    console.log(titulo.id)
}
*/