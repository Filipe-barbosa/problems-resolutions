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

function getparouimpar(lista1,lista2,i){
  var result = lista1[i] + lista2[i];
  console.log(result%2);
  if ((result % 2 ==0)){
    return true
  }else {
    return false
  }

}


var lista1= [3,4,5,8,9,10];
var lista2 = [2,2,1,2,1,2];
let p1= 0; 
let p2=0;
let i = 0;



console.log("seja bem vindo ao jogo de par ou impar");
for (;i<lista1.length;){
  if (getparouimpar(lista1,lista2,i)==true){ 
  p1++;
  }else {
    p2 ++;
  }
  i++;
} 

if (p1>p2){
  console.log("o jogador 1 venceu a partida");
} if(p1<p2){
  console.log("o jogador 2 vendeu a partida");
} if(p1==p2){
  console.log("Empate");
}

