/* FATORIA2 - Fatorial
Dado um inteiro N, determine quanto vale N fatorial (escreve-se N!). O
Entrada
A entrada é composta por uma única linha que contém o inteiro N.
Saída
A saída deve consistir de apenas uma linha contendo o valor de N!.
Restrições
0 ≤ N ≤ 12 
*/

const readline = require('readline-sync');
function getfatorial(input){
let aux = 1;
for(let i=input;i>1;i--){
 aux = aux*i ; 
 console.log(aux);
}
return aux;
}

console.log("bem vindo ao programa de fatorial");
const input= readline.question ("entre com um numero que deseja calcular");
if(input<=0 ||input>12){
  console.log("numero invalido/n o numero digitado tem que ser maior que zero e menor que 12 /n");
}else{
  console.log("O resultado é  " +getfatorial(input));

}
