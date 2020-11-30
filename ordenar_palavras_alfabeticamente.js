// Ordene as palavras alfabeticamente.
// 2 palavras rertorne -1 se a primeira palavra vem antes da segunda
//  0 se forem iguas
//  1 se a segunda vem antes da primeira

//  ex carro carro  0
//     frango  peixe -1
//     moranga  abobora 1
//     amora   amor 1 se um for menor que outro e o prefixo for igual retorna o menor

const words = ["carro", "carro"];
const words1 = ["frango", "peixe"];
const words2 = ["moranga", "abobora"];
const word3 = ["amora", "amor"];

const orderWords = (words) => {
  for (let i = 0; i < words.length - 1; i++) {
    for (let j = 0; i < words.length - i; i++) {
      if (words[i][j].charCodeAt() < words[i + 1][j].charCodeAt()) {
        return -1;
      } else if (words[i][j].charCodeAt() > words[i + 1][j].charCodeAt()) {
        return 1;
      }
    }
    if (words[0].length > words[1].length) {
      console.log("e nois ");
      return 1;c17
    } else if (words[0].length < words[1].length) {
      return -1;
    }
    return 0;
  }
};

console.log(orderWords(words));


