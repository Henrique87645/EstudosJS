function gerar() {
    let num = document.querySelector('#txtnum');
    let tab = document.querySelector('#seltab');

    if (num.value.length == 0 ) {
        alert('[ERRO] Digite um Número!')        
    } else {
        let n = Number(num.value); 
        tab.innerHTML = ''
        for (let c = 1; c <= 10; c++){
            let item = document.createElement('option');
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item);
        };
    };
}