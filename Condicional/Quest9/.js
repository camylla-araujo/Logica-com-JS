// 9) Tendo como dados de entrada a altura e o sexo de uma pessoa, construa um algoritmo que
// calcule seu peso ideal, utilizando as seguintes fórmulas:
// ● para homens: (72.7 * h) – 58;
// ● para mulheres: (62.1 * h) – 44.7.

let altura = 1.65
let sexo = 'Feminino'
let pesoIdeal

if (sexo == 'masculino') {
    pesoIdeal = (72.7 * altura) - 58
    console.log('peso ideal :',pesoIdeal)
} else {
    pesoIdeal = (62.1 * altura) - 44.7
    console.log('peso ideal :',pesoIdeal)
}