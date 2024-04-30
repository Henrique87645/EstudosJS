
var c = 1
while (c <= 5) {
    console.log('laço while '+c)
    c++
}

//---------------------------------

var c = 1
do {
    console.log('laço do '+c)
    c++
}while (c <= 5)

//---------------------------------

for(var c = 1; c <= 5; c++) {
    console.log('laço for '+c)
}

//----------------------------------
let valores =[8, 9, 3, 5, 2, 7, 4, 1, 6,]
valores.sort()
for(var c in valores) {
    console.log(`laço for in ${valores[c]}`)
}