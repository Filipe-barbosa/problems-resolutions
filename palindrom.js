const testCase = [
  "ana",
  "ovo",
  "maconha",
  "arara",
  " socorram me subi no onibus em marrocos ",
];
const falseCase = ["pod chorar", "aleatorio"];

const isPalindrom = (word) => {
  let wordWithoutSpace = "";
  for (let j = 0; j < word.length; j++) {
    if (word.charAt(j) != " ") {
      wordWithoutSpace += word[j]; 
    }
  }
  for (let count = 0; count < wordWithoutSpace.length / 2; count++) {
    if (
      wordWithoutSpace[count] !=
      wordWithoutSpace[wordWithoutSpace.length - 1 - count]
    ) {
      return false;
    }
  }
  return true;
};

for (const test of testCase) {
  console.assert(isPalindrom(test),test);
}
for (const test of falseCase) {
 console.assert(!isPalindrom(test));
}
