//exercicio 4

function calculator (valor, juros, meses) {

const a = valor = 1000;
const b = juros = 1000 * 0.05;
let c = meses;
let calculator = a + b * c

return "o valor total a ser pago é de R$" + calculator

}

function calculator1 (juros, meses) {

const a = juros = 1000 * 0.05;
let b = meses;
let calculator1 = a * b

return "o valor de juros é de R$" + calculator1;

}

console.log(calculator1(1,2));
console.log(calculator(1,1,2));
