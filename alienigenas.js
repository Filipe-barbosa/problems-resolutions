/* divisão do problema.
  ok passo 1 identificar quantas entradas possui o caso de teste
  ok passo 2 identificar quantas letras distintas existem nesse caso de teste
  ok passo 3 identificar quantas vezes cada letra se repete em uma unica entrada 
  ok passo 4 comparar essas entradas e no fim do laço identificar quntos mDNA distintos possui cada entrada. */

const testcase = 
  [
    ["AAA", "AAB", "ABC"],
    ["AAAB", "AABA", "ABAA", "BAAA"],
  ];


const indentifyDistintesMdna = (testCase) => {
    for (const mdna of testCase) {
      const comparateSpecies = new Set();
      for (const alienMdna of mdna) {
        let convertesDateSpaciesIntoNumbers = 0;
        for (const letter of alienMdna) {
          convertesDateSpaciesIntoNumbers += letter.charCodeAt();
        }
        comparateSpecies.add(convertesDateSpaciesIntoNumbers);
      } 
      console.log(comparateSpecies.size);
    }
  
};
indentifyDistintesMdna(testcase);
