function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.querySelector("#txtano");
    var res = document.querySelector("#res");
    if (fano.value.lenght == 0 || Number(fano.value) > ano) {
        window.alert("[ERRO] Verifique que os dados e tente novamente!")
    } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
        img.style.borderRadius = '75%';
        img.style.padding = '0';
        img.style.width = '350px';
        img.style.height = '450px';
        img.style.boxShadow = '2px 2px 8px #181818';
        img.style.display = 'block';
        img.style.margin = '0 auto';
       if (fsex[0].checked) {
            genero = 'Masculino'
            if (idade >= 0 && idade <= 10) {
                img.setAttribute('src', '/images/exs/criancam.jpg')
            } else if (idade <= 21) {
                img.setAttribute('src', '/images/exs/adolescentem.jpg')
            } else if (idade <= 65) {
                img.setAttribute('src', '/images/exs/homem.jpg')
            } else{
                img.setAttribute('src', '/images/exs/idosom.jpg')
            }
       } else if (fsex[1].checked){
            genero = 'Feminino'
            if (idade >= 0 && idade <= 10) {
                img.setAttribute('src', '/images/exs/criancaf.jpg')
            } else if (idade <= 21) {
                img.setAttribute('src', '/images/exs/adolescentef.jpg')
            } else if (idade <= 65) {
                img.setAttribute('src', '/images/exs/mulher.jpg')
            } else{
                img.setAttribute('src', '/images/exs/idosaf.jpg')
            }
       } else if (fsex[2].checked) {
            genero = 'Eletrolux'
            img.setAttribute('src', '/images/exs/eletrolux.png')
       }
       res.style.textAlign = 'center';
       res.innerHTML = `Você se identifica pelo gênero ${genero} e atualmente tem ${idade} anos de idade.`;
       res.appendChild(img);
    };
}
