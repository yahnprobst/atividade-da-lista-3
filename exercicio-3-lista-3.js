// exercicio 3

function calculator (valor, desconto) {
    let a = valor;
    const b = desconto = 0.10;
    let calculator = valor * desconto;

    return "O desconto é de R$" + calculator;

}



function calculator1 (valor, desconto1) {

    let a = valor;
    const b = desconto1 = valor * 0.10;
    let calculator1 = a - b;

    return "o valor é de R$" + calculator1;
} 

console.log(calculator1(10,1));
console.log(calculator(10,1));