let num =  [5,2,3,4]
num.sort() //ordena os valores de um vetor
/*
console.log( `o vetor tem ${num.length} posições`)
for (let pos= 0; pos < num.length; pos++) {
    console.log (`A posição ${pos} tem o valor ${num[pos]}`)
    }

for(let pos in num){
    console.log(`${num[pos]}`)
}
*/
let pos = num.indexOf(4) // vai procurar no vetor e retornar a posição dele
console.log(`O valor 4 está na posição ${pos}`)