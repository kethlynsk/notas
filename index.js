let notas = [7.5, 8.0, 6.0, 9.5, 5.0, 8.5, 7.0, 10.0, 6.5, 9.0]
let notaMaior = 0
let notaMenor = notas[0]
let notasAcimaMedia = 0
let notaabaixoaMedia = 0

function maiorNota(){
    for (let i = 0; i < notas.length; i++) {
        if (notas[i] > notaMaior) {
            notaMaior = notas[i]
        }
        }
        return notaMaior
    }
    console.log(maiorNota())


function menorNota(){
    for (let i = 0; i < notas.length; i++) {
        if (notas[i] < notaMenor) {
            notaMenor = notas[i]
        }
        }
    return notaMenor
    }
    console.log(menorNota())

    function acima(){
        for (let i = 0; i < notas.length; i++) {
        if(notas[i] >= 6) {
        console.log(notas[i])
        notasAcimaMedia++
    }}
    return notasAcimaMedia
}
console.log(acima())

function abaixo(){
    for (let i = 0; i < notas.length; i++) {
    if(notas[i] <= 6) {
    console.log(notas[i])
    notasAbaixoMedia++
}}
return notasAbaixoMedia
}

console.log(abaixo())