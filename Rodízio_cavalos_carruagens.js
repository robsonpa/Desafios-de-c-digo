/*
Desafio
O rodízio de veículos de Bravoos é uma restrição à circulação de veículos na cidade. Com o propósito de melhorar as condições ambientais reduzindo a carga de poluentes na atmosfera,incluindo na região de Westeros, se consolidou como um instrumento para reduzir congestionamentos nas principais vias da cidade, nos horários de maior movimento. Nas ruas delimitadoras não é permitido o tráfego de cavalos e carruagens que estejam dentro da restrição. Há uma escala que determina em quais dias da semana quais veículos não podem circular. Essa escala é regida pelo último dígito da placa do animal, sendo:

Segunda-feira, digito final da placa 1 e 2
Terça-feira, digito final da placa 3 e 4
Quarta-feira, digito final da placa 5 e 6
Quinta-feira, digito final da placa 7 e 8
Sexta-feira, digito final da placa 9 e 0
Os motoristas que são flagrados violando a restrição de circulação são autuados com multa de 4 galinhas e condenados a passar 1 semana na Muralha.

Entrada
A primeira linha de entrada representa a quantidade de testes N (0 <= N < 1000) que deverão ser considerados. As demais entradas são cadeia de caracteres com tamanho máximo S (1 <= S <= 100) que representam cada placa que deverá ser analisada, de tal forma que, cada placa fique em uma única linha de entrada. O formato esperado para uma placa veicular válida em Bravoos é "AAA-9999", tal que A é um caracter válido em [A-Z], e 9 um dígito numérico válido em [0-9].

Saída
O conjunto de valores válidos como saída são: SEGUNDA, TERCA, QUARTA, QUINTA e SEXTA, de acordo com a tabela de restrições predefinida, e FALHA caso a placa não apresente o padrão definido.

*/

// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente e têm as seguintes funcionalidades: 
// - "gets" : lê UMA linha com dados de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;
// Abaixo segue o template de código para este desafio, o qual pode ou não utilizar tais funções.

const N = parseInt(gets());
// Expressão regular para validação de uma placa.
// Referência: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions
const regexPlacaValida = new RegExp("^[A-Z]{3}-[0-9]{4}$");

for(let i = 0; i < N; i++){
  const placa = gets();
  
  if (placa.match(regexPlacaValida)) {
    // TODO: Recupere o digito final da placa e o atribua à constante "digito".
    // TODO: A partir do "digito", crie as condições necessárias para imprimir o dia da semana.
    
    //console.log(placa.length - 1);
    const digito = placa.slice(-1);
    
    if(parseInt(digito) == 1 || parseInt(digito) == 2){
      print("SEGUNDA");
    } else if(parseInt(digito) == 3 || parseInt(digito) == 4){
      print("TERCA");
    } else if(parseInt(digito) == 5 || parseInt(digito) == 6){
      print("QUARTA");
    } else if(parseInt(digito) == 7 || parseInt(digito) == 8){
      print("QUINTA");
    } else if(parseInt(digito) == 0 || parseInt(digito) == 9){
      print("SEXTA");
    }
    
    
  } else {
    print("FALHA");
  }
}
