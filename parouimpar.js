/*  Dado duas listas de números inteiros, cada uma contendo a sequência de escolhas de um jogador em uma partida de par ou ímpar, indicar o vencedor da partida.
O primeiro jogador sempre escolhe par e, consequentemente, o segundo jogador escolhe ímpar.
Imprimir na tela:

PRIMEIRO, caso o primeiro jogador tenha vencido;
SEGUNDO, caso o segundo jogador tenha vencido;
EMPATE, caso a partida tenha terminado empatada.
Ex:
primeiro = [3, 4, 5, 8, 9, 7]
segundo= [2, 2, 1, 5, 9, 3]

questionamentos: 
1 As duas listas sao sempre do mesmo tamanho ?

resultado: PRIMEIRO
*/

function isEven(lista1,lista2){
  var result = lista1 + lista2;
  return(result % 2 ==0)
}


var lista1= [3,4,5,8,9,10];
var lista2 = [2,2,1,2,2,2];
let p1= 0; 
let p2=0;

console.log("seja bem vindo ao jogo de par ou impar");

for (let i = 0;i<lista1.length;i++){
  if (isEven(lista1[i],lista2[i])){ 
  p1++;
  }else {
    p2 ++;
  }
} 

if (p1>p2){
  console.log("o jogador 1 venceu a partida");
} else if(p1<p2){
  console.log("o jogador 2 vendeu a partida");
} else
{
  console.log("Empate");
}

