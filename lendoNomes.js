/**
 * 
Desafio
Faça um programa com as características abaixo:

Leia 10 nomes, sem espaço em branco;
Imprima o terceiro nome da lista;
Imprima o sétimo nome da lista;
Imprima o nono nome da lista.
Entrada
A entrada consiste vários arquivos de teste, cada um com dez linhas e em cada linha tem um nome de no até 30 caracteres e sem espaço em branco. Conforme mostrado no exemplo de entrada a seguir.

Saída
Para cada arquivo da entrada, terá um arquivo de saída. E como mencionado no Desafio, gere três linhas conforme os procedimentos 2, 3 e 4. Use o exemplo abaixo para clarear o que está sendo pedido.
 * 
 */

// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde: 
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

// TODO:  Crie um código que retorne o terceiro, sétimo e nono nome da lista

let nomes = new Array(10)

		//nomes = ['USP','UFPE','UFRN','UFRJ','IME','ITA','UNIOESTE','URI','UFG','UnB']
		
for(let i=0 ; i<10; i++)
    nomes[i] = gets();
			
print(nomes[2])
print(nomes[6])
print(nomes[8])