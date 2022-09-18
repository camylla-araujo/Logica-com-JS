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