
function parimpar(b) {
    if (b%2==0){
        return 'Par'
    } else {
        return 'Impar'
    }
}
console.log(parimpar(12))

//----------------------------

function soma(n1=0 , n2=0) {
    return n1 + n2
}
console.log(soma(2, 7))

//----------------------------

let v = function(x) {
    return x*2
}
console.log(v(5))

//----------------------------

function fatorial(a) {
    let fat = 1 
    for(let c = a; c > 1; c--){
        fat *= c
    }
    return fat 
}
console.log(fatorial(5))

//---------------------------
//RECURSIVIDADE
function Fatorial(m){
    if(m==1) {
        return 1
    } else {
        return m*Fatorial(m-1)
    }
}
console.log(Fatorial(5))