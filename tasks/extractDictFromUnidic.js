const CHAR_LENGTH = 5;


const fs = require("fs");
const path = require("path");


const unidic = fs.readFileSync(path.join(__dirname, "../lib/unidic-cwj-3.1.0/lex_3_1.csv"));
const vocabs = unidic.toString().split("\n");

const dict = vocabs.map(vocab => {
  const vocabElems = vocab.split(",");

  if (vocabElems[4] === "名詞" && vocabElems[5] === "普通名詞" && vocabElems[10].length === CHAR_LENGTH) {
    return `"${vocabElems[10].replace(/[ァ-ン]/g, char => String.fromCharCode(char.charCodeAt(0) - 0x60))}"`;
  }

  return null;
}).filter((pron, i, prons) => {
  return pron && prons.indexOf(pron) === i;
});

console.log(dict.length);

fs.writeFileSync(path.join(__dirname, "../lib/unidic-cwj-3.1.0/dict.csv"), dict.join(","));