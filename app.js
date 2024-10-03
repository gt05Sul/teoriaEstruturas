/* Exemplo de if-else */
// console.log("-------------");

// let idade = 15;
// if (idade >= 18) {
//     console.log("Maior");
// } else {
//     console.log("Menor");
// }

// console.log("-------------");

// let nota = 7.5;
// if (nota >= 7 && nota <= 10) {
//     console.log("Aprovado");
// } else if (nota >= 5) {
//     console.log("Recuperação");
// } else {
//     console.log("Reprovado")
// }

// console.log("-------------");

// /* Exemplo de Ternário */
// const podeVotar = (idade >= 18) ? "Pode votar" : "Não pode votar";
// console.log(podeVotar);

// console.log("-------------");

// const numero = 7;
// const tipo = (numero % 2 === 0) ? "Par" : "Impar";
// console.log(tipo);

// console.log("-------------");

// /* Exemplo de Switch */
// let categoriaCliente = 'regular';
// let desconto;
// switch (categoriaCliente) {
//     case 'regular':
//         desconto = '5%';
//         break;
//     case 'vip':
//         desconto = '20%';
//         break;
//     default:
//         desconto = '0%';
// }

// console.log(`Desconto aplicado: ${desconto}`);

// console.log("-------------");

/* Estrutura de repetição */

// let contador = 1;

// while (contador <= 10) {
//     console.log(contador);
//     contador++
// }

// do {
//     console.log(contador);
//     contador++
// } while (contador > 10)

// while (true) {
//     console.log("-------")
// }

// for (let i = 0; i > 10000; i++) {
//     console.log(i);
// }

// const numeros = [10, 20, 30, 40, 50, 60];
// let soma = 0;

// for (let i = 0; i < numeros.length; i++) {
//     soma += numeros[i];
// }
// console.log(soma);

// for (let i = 0; ; i++) {
//     console.log("teste")
// }

// let frutas = ["Maçã", "Banana", "Laranja"];

// for (let fruta of frutas) {
//     console.log(fruta);
// }

// let pessoa = { 
//     nome: "Carlos", 
//     idade: 20, 
//     cidade: "Fortal" }

// for (let chave in pessoa) {
//     console.log(`
//         ${chave}: ${pessoa[chave]}`);
// }