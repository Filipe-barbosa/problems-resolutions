const isAnagrama = (teste1, teste2) => {
  let wordMap1 = getMap(teste1);
  let wordMap2 = getMap(teste2);

  if (wordMap1.length != wordMap2.length) {
    return false;
  }
  for (const [letter,_] of Object.entries(wordMap1)) {
    const size1 = wordMap1[letter];
    let size2 = 0;
    if (letter in wordMap2) {
      size2 = wordMap2[letter];
    }
    if (size1 != size2) {
      return false;
    }
  }

  return true;
};

const getMap = (word) => {
  const wordMap = {};
  for (const letter of word) {
    if (!(letter in wordMap)) {
      wordMap[letter] = 0;
    }
    wordMap[letter] += 1;

  //  console.log(wordMap);
  }
  return wordMap;
};

console.log(isAnagrama("roca", "tatu"));
console.log(isAnagrama("roca", "roca"));
console.log(isAnagrama("amor", "roma"));
