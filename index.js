//Entrada de dados
let readlineSync = require('readline-sync');

let nome = readlineSync.question("Qual seu nome?\n");
let nota1 = parseFloat(readlineSync.question("Informe a nota 1\n"));
let nota2 = parseFloat(readlineSync.question("Informe a nota 2\n"));
let nota3 = parseFloat(readlineSync.question("Informe a nota 3\n"));
let nota4 = parseFloat(readlineSync.question("Informe a nota 4\n"));
let nota5 = parseFloat(readlineSync.question("Informe a nota 5\n"));

//Processamento
nome = nome.toUpperCase();
// Somar todas as notas 
let = soma_notas = nota1 + nota2 + nota3 + nota4 + nota5;
//Dividir o valor da soma por 5
let = divisao_notas = soma_notas / 5
// Saida
console.log(`OLA ${nome}`);
console.log(soma_notas)
// media final 
console.log(divisao_notas)