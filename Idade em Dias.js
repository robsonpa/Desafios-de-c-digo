/*
Desafio
Você terá o desafio de ler um valor inteiro correspondente à idade de uma pessoa em dias e informe-a em anos, meses e dias

Obs.: apenas para facilitar o cálculo, considere todo ano com 365 dias e todo mês com 30 dias. Nos casos de teste nunca haverá uma situação que permite 12 meses e alguns dias, como 360, 363 ou 364. 

Entrada
O arquivo de entrada contém um valor inteiro.

Saída
Imprima a saída conforme exemplo fornecido.
*/

// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente e têm as seguintes funcionalidades: 
// - "gets" : lê UMA linha com dados de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;
// Abaixo segue o template de código para este desafio, o qual pode ou não utilizar tais funções.

let totalDeDias = parseInt(gets());

// TODO: Calcular a quantidade de anos a patir do 'totalDeDias'.
const qtdAnos = totalDeDias / 365;
//totalDeDias = totalDeDias % 365;

// TODO: Calcular a quantidade de meses a patir do 'totalDeDias' atualizado.
const qtdMeses= ((totalDeDias % 365) / 30);
//totalDeDias = totalDeDias % 30;                           ;

totalDeDia = ((totalDeDias % 365) % 30)
// Impressão do resultado usando interpolação de strings.
// Referência: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Template_literals
print(`${parseInt(qtdAnos)} ano(s)
       ${parseInt(qtdMeses)} mes(es)
       ${parseInt(totalDeDia)} dia(s)`);
       
