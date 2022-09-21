<<<<<<< HEAD
// 3) Desenvolver um algoritmo que leia um número não determinado de valores e calcule e escreva a
// média aritmética dos valores lidos, a quantidade de valores positivos, a quantidade de valores
// negativos e o percentual de valores negativos e positivos

=======
>>>>>>> b8c03d56e77a18dfe0d0cde4d0d84ee1bac99136
let numeros = [9, 90, 89, -12, -99, -100];

let soma = 0; 
let qtd_positivos = 0;

for (let n = 0; n < numeros.length; n++) {
    // soma = soma + numeros[n];
    soma += numeros[n];
    
    if (numeros[n] > 0) {
        qtd_positivos++;
    }
}


let qtd_negativos = numeros.length - qtd_positivos;

document.write("Media: ", soma/numeros.length, '<br>');
document.write("Qtd positivos: ", qtd_positivos, '<br>');
document.write("Qtd negativos: ", qtd_negativos, '<br>');
document.write("% positivos: ", (qtd_positivos/numeros.length) * 100, '<br>');
document.write("% negativos: ", (qtd_negativos/numeros.length) * 100, '<br>');