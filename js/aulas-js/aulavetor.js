let valores =[8, 9, 3, 5, 4, 2, 7, 4, 3, 6,]
valores.sort() //coloca em ordem crescente 

for(let pos=0; pos<valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

//------------------------------------------------------------------

for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

