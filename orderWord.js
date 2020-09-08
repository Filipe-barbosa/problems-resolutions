const readline = require("readline-sync");
function isOrder(word) {
  let validOrder;
  for (let i = 0; i < word.length; i++) {   
    if ( word[i].toLowerCase().charCodeAt() <= validOrder) {
      return"N";
    } else {
      validOrder = word[i].charCodeAt();
    }
  } return"O"; 
}
function userInput(number){
  let stokinput=[]; 
  var twoPoints=":"
  for (let i=0; i<number;i++){
    stokinput[i] = readline.question("Digite uma palavra\n");
  }
  console.log(number);
  for(let i = 0; i<number;i++){

    console.log(stokinput[i].concat(twoPoints),isOrder(stokinput[i]))
  }
} 

var numberInput = readline.question("entre com o numero de palavras que deseja \n");
userInput(numberInput);



