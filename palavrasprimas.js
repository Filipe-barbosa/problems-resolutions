const readline = require("readline-sync");
// Dividir em um array de letras ok
// capturar o valor de cada letra e soma-los
// Verificar se o resultado da soma e um número primo

const letterToNumber = { a: 1, b: 2, c: 3 };
function converterLetterToNumber(letter){
  if (letter.charCodeAt(0)<91){  // Valida se o parametro é ou nao Maiúsculo
    return letter.charCodeAt(0) -38 //converte A -> 27
  }
  return  letter.charCodeAt(0) - 96 //converte a-> 1
}
function isWordPrime(word) { 
  const wordValue = calcWordValue(word);
  const primeValue = isPrime(wordValue);
  if (primeValue) {
    console.log("é primo");
  } else {
    console.log("é irmao kkkkk");
  }
}

function calcWordValue(word) {
  let total = 0;
  for (let i = 0; i < word.length; i++) {
    total += converterLetterToNumber(word[i]);
  }
  return total;
}

function isPrime(wordValue) { 
  if (wordValue < 2) {
    return false;
  }
  for (let i = wordValue - 1; i > 1; i--) {
    if (wordValue % i == 0) {
      return false;
    }
  }
  return true;
}

const testcase = "aab";
isWordPrime(testcase);
isWordPrime("a");
isWordPrime("Cb");
isWordPrime("z");
isWordPrime("Z");

