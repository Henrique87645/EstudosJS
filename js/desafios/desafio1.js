
let pessoa = {
    lutador : 'Fedor Vladimirovich',
    nacionalidade : 'Russo',
    idade : 44,
    peso : 106,
    altura : 1.86,
}

document.write(`<hr> <div class="pessoa">
        <p>Lutador: ${pessoa.lutador}</p>
        <img src="../images/desafio1/fedor-2015.jpg">
        <p>Nacionalidade: ${pessoa.nacionalidade}</p>
        <p>Idade: ${pessoa.idade} Anos</p>
        <p>Peso: ${pessoa.peso} Kg</p>
        <p>Altura: ${pessoa.altura} m</p>
        </div> <hr>`)

//segundo
const dia = 10
const mes = 9
const ano = 2021
const FraseDoDia = "É preferível suportar os males que temos do que voar para aqueles que não conhecemos."
const Autoria = "*William Shakespeare*"

document.write(`<div class="citacao">
        <h1>Frase do Dia</h1>
        <p>${dia}/${mes}/${ano}</p>
        <p>${FraseDoDia}</p>
        <p>${Autoria}</p>
        </div> <hr>`)

//terceiro 
let mesesAno = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio']

document.write(`<div class="meses">
        <h1>Meses do Ano</h1>
        <p>${mesesAno [0]}, ${mesesAno [1]}, ${mesesAno [2]}, ${mesesAno [3]}, ${mesesAno [4]}, ...</p>
</div> <hr>`)

//quarto
let jogo = {
    lol : 'League OF Legends - LOL',
    desenvolvedor : 'Riot Games',
    lancamento: 2009,
}

document.write(`<div class="jogo">
        <h1>Lolzinho</h1>
        <span>Título</span>
        <p>Jogo: ${jogo.lol}</p>
        <span>Desenvolvedor</span>
        <p>Desenvolvedor: ${jogo.desenvolvedor}</p>
        <span>Ano do Lançamento</span>
        <p>Ano de Lançamento: ${jogo.lancamento}</p>
</div>`)