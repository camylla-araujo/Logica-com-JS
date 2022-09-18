let peso = 57
let altura = 1.65
let imc = peso / (altura*altura)

if (imc < 18.5){
    console.log('Abaixo do peso')
}

if (imc >= 18.5 && imc <= 25){
    console.log('Peso normal')
}

if (imc >= 25 && imc <=30) {
    console.log('Acima do peso')
}

if (imc > 30){
    console.log('Obeso')
}
