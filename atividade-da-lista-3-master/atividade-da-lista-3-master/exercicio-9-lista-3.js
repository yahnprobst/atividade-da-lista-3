// exercicio 9

function exercicio() {

    let valor_total = 500;
    let parcelas = 5;
    let valor_parcela = valor_total / parcelas;

    return "valor total = R$ " + valor_total +
           " | parcelas = " + parcelas +
           " | valor de cada parcela = R$ " + valor_parcela;
}

console.log(exercicio(1000, 5, 100));