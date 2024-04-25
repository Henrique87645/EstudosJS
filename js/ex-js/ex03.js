function contar() {
    var ini = document.getElementById('txtini');
    var fim = document.getElementById('txtfim');
    var pas = document.getElementById('txtpas');
    var res = document.getElementById("res");

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        res.innerHTML = 'Impossivel contar!'
        // alert("[ERRO] dados faltando")
    } else {
        res.innerHTML = 'Contando: <br>'   
        let i = Number(ini.value);
        let f = Number(fim.value);
        let p = Number(pas.value);
        if (p <=0 ){
            alert('Passo invalido, considere passo como 1')
            p = 1
        }
        if(i < f) {
            //contagem crescente
            for (let c = i ; c <= f ; c += p) {
                res.innerHTML += ` ${c} \u{1f449}`
            }
         } else {
            //contagem regressiva
            for(let c = i ; c >= f ; c -= p){
                res.innerHTML += ` ${c} \u{1f449}`
                }
            }
            res.innerHTML += `\u{1F3C1}`
    }
}