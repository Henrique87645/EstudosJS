let amigo = {nome:'José', sexo: 'M', peso: 75.8 , engordou(p=0){
    console.log('Engordou')
    this.peso += p
}}
amigo.engordou(5)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)
