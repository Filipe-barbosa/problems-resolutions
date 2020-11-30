// key word frecons

// entre uma lista de palavras keyWords e um text

const keyWords = ["carro", "bolo", "fimose", "morroida"];

const text =
  "carro fimose moto bolo bolo carroça morroida carro bolo moto moto bolo moto";

/* carro 2 
 fimose 1
 moto 4 - 
 morroida 1 
 carroça 1 -  
 bolo 4  
 retorne as 2 palavras que mais aparecem no texto que estão definidas em keywords 
 */
const converteAndMapText = (text, keyWords) => {
  const splitText = text.split(" ");
  const wordMap = {};
  for (const word of splitText) {
    if (!(word in wordMap)) {
      wordMap[word] = 0;
    }
    wordMap[word] += 1;
  }
  return perternceKeyWordsInKeyWords(wordMap, keyWords);
};

const perternceKeyWordsInKeyWords = (wordMap, keyWords) => {
  for (const word in wordMap) {
    if (!keyWords.includes(word)) {
      delete wordMap[word];
    }
  }
   
  return returnsHigherValue(wordMap);
};

const returnsHigherValue = (wordMap) => { //código duplicado
  let greateRepetition = 0;
  let secoundRepetition = 0;
  let secoundRepetitionkey = "";
  let greateRepetitionKey = "";
  for (const momentbigValue of Object.entries(wordMap)) {
    // console.log(momentbigValue);
    if (momentbigValue[1] > greateRepetition) {
      greateRepetition = momentbigValue[1];
      greateRepetitionKey = momentbigValue[0];
    }
  }
  for (const momentbigValue2 of Object.entries(wordMap)) {
    // console.log(momentbigValue);
    if (
      momentbigValue2[1] < greateRepetition &&
      momentbigValue2[1] > secoundRepetition
    ) {
      secoundRepetition = momentbigValue2[1];
      secoundRepetitionkey = momentbigValue2[0];
     
    }
  }
  // console.log(greateRepetitionKey)
  console.log(greateRepetitionKey,secoundRepetitionkey)
  return greateRepetitionKey, secoundRepetitionkey;
};

converteAndMapText(text, keyWords);
