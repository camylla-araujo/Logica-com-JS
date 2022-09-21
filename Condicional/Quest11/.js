// 11) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço
// normal deetiqueta e a escolha da condição de pagamento. Utilize os códigos da tabela a seguir
// para ler qual acondição de pagamento escolhida e efetuar o cálculo adequado.
// Código Condição de pagamento
// 1 À vista em dinheiro ou cheque, recebe 10% de desconto
// 2 À vista no cartão de crédito, recebe 15% de desconto
// 3 Em duas vezes, preço normal de etiqueta sem juros
// 4 Em duas vezes, preço normal de etiqueta mais juros de 10%

let preco = 450
let Dinheiro = false
let Cheque = false
let Credito1X = false
let Credito2X = true
let Credito3X = false

let valorTotal 

      if (Dinheiro == true) {
         valorTotal = preco - (valor * 0.10);
}
      if (Cheque == true) {
         valorTotal = preco - (valor * 0.10);
}
      if (Credito1X == true) {
         valorTotal = preco - (valor * 0.15);
}
      if (Credito2X == true) {
         valorTotal = preco;
}
      if (Credito3X == true) {
         valorTotal = preco + (valor * 0.10);
}

         console.log(valorTotal)