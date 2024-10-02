/* Exemplo de if-else */
console.log("-------------");

let idade = 15;
if (idade >= 18) {
    console.log("Maior");
} else {
    console.log("Menor");
}

console.log("-------------");

let nota = 7.5;
if (nota >= 7 && nota <= 10) {
    console.log("Aprovado");
} else if (nota >= 5) {
    console.log("Recuperação");
} else {
    console.log("Reprovado")
}

console.log("-------------");

/* Exemplo de Ternário */
const podeVotar = (idade >= 18) ? "Pode votar" : "Não pode votar";
console.log(podeVotar);

console.log("-------------");

const numero = 7;
const tipo = (numero % 2 === 0) ? "Par" : "Impar";
console.log(tipo);

console.log("-------------");

/* Exemplo de Switch */
let categoriaCliente = 'regular';
let desconto;
switch (categoriaCliente) {
    case 'regular':
        desconto = '5%';
        break;
    case 'vip':
        desconto = '20%';
        break;
    default:
        desconto = '0%';
}

console.log(`Desconto aplicado: ${desconto}`);

console.log("-------------");