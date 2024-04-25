let valores = [1, 4, 7, 9, 2, 8, 0, 6, 5, 3]
valores.sort();
for(let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

//----------------

for(pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}