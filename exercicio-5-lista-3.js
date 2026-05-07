//exercicio 5

function calculator (vendas1, comissão, comissão1) {

    const a = vendas1;
    const b = comissão = vendas1 * 0.05;
    let calculator = a + b;
    

    return "valor total das vendas é R$" + calculator;
}

function calculator1 (vendas1, comissão1) {

    const a = vendas1;
    const b = comissão1 = vendas1 * 0.05;
    let calculator1 = b;

    return "a comissão das vendas  é R$" + calculator1


}


console.log(calculator1(100000));
console.log(calculator(1000000));
