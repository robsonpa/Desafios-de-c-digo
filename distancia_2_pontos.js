/**
 * Desafio
Leia os quatro valores correspondentes aos eixos x e y de dois pontos quaisquer no plano, p1(x1,y1) e p2(x2,y2) e calcule a distância entre eles, mostrando 4 casas decimais após a vírgula, conforme a fórmula:

Distancia =

Entrada
O arquivo de entrada contém duas linhas de dados. A primeira linha contém dois valores de ponto flutuante: x1 y1 e a segunda linha contém dois valores de ponto flutuante x2 y2.

Saída
Calcule e imprima o valor da distância segundo a fórmula fornecida, com 4 casas após o ponto decimal.
 */

// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde: 
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

let p1 = gets().split(" ");
let p2 = gets().split(" ");

let x1 = parseFloat(p1[0]);
let y1 = parseFloat(p1[1]);

let x2 = parseFloat(p2[0]);
let y2 = parseFloat(p2[1]);


// TODO: Calcule e imprima o valor da distância segundo a fórmula fornecida, com 4 casas após o ponto decimal.
let x = parseFloat(x2 - x1)
let y = parseFloat(y2 - y1)

let distancia = Math.pow(x,2) + Math.pow(y,2)
     
print(Math.sqrt(distancia).toFixed(4));