// 8) Escreva um algoritmo que leia três valores inteiros e diferentes e mostre-os em ordem
// decrescente. 

let numbers = [30, 60, 10];

let numbersDesc = numbers.sort(function(a, b) {
    return b-a;
});
 console.log(numbersDesc);
