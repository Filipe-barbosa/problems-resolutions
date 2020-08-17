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


function getPlayWinner(lista1,lista2){
  let p1= 0;
  let p2=0;
  for (let i = 0;i<lista1.length;i++){
      if (isEven(lista1[i],lista2[i])){
          p1++;
      }else {
          p2 ++;
      }
  }

  if (p1>p2){
      return "PLAYER_1";
  } else if(p1<p2){
      return "PLAYER_2";
  } else {
      return "TIE";
  }
}

function testEvenPlayerWin() {
  var lista1= [3,4,5];
  var lista2 = [2,2,1];
  if (getPlayWinner(lista1,lista2) != "PLAYER_1") {
      console.log("Test EvenPlayerWin failed")
  } else {
      console.log("OK")
  }
}

function testOddPlayerWin() {
  var lista1= [3,4,5];
  var lista2 = [2,2,2];
  if (getPlayWinner(lista1,lista2) != "PLAYER_2") {
      console.log("Test OddPlayerWin failed")
  } else {
      console.log("OK")
  }
}

function testTie() {
  var lista1= [3,4];
  var lista2 = [2,2];
  if (getPlayWinner(lista1,lista2) != "TIE") {
      console.log("Test Tie failed")
  } else {
      console.log("OK")
  }
}

function testTieWithoutPlaying() {
  var lista1= [];
  var lista2 = [];
  if (getPlayWinner(lista1,lista2) != "TIE") {
      console.log("Test TieWithoutPlaying failed")
  } else {
      console.log("OK")
  }
}

testEvenPlayerWin()
testOddPlayerWin()
testTie()
testTieWithoutPlaying()



