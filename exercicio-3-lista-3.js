// exercicio 10

function exercicio() {

    let valor_inicial = 1000;
    let meses = 5;
    let taxa = 0.02;

    let valor_final = valor_inicial * (1 + taxa) ** meses;

    return "valor inicial = R$ " + valor_inicial +
           " | meses = " + meses +
           " | valor final = R$ " + valor_final.toFixed(2);
}

console.log(exercicio(1000, 5, 0.02));
