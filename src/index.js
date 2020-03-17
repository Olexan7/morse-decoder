const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0"
};

function decode(expr) {
  let arrayNumber = [];

  for (let i = 0; i < expr.length; i += 10) {
    arrayNumber.push(expr.substring(i, i + 10));
  }

  let arraySumbol = [];
  for (let i = 0; i < arrayNumber.length; i++) {
    if (arrayNumber[i] === "**********") {
      arrayNumber[i] = " ";
    }

    arraySumbol.push(
      arrayNumber[i]
        .replace(/10/g, ".")
        .replace(/11/g, "-")
        .replace(/0/g, "")
    );
  }
  let words = [];
  arraySumbol.forEach(elementSymbol => {
    Object.keys(MORSE_TABLE).forEach(elementKey => {
      if (elementSymbol === elementKey) {
        words.push(MORSE_TABLE[elementKey]);
      }
    });
    if (elementSymbol === " ") {
      words.push(" ");
    }
  });
  return words.join("");
}

module.exports = {
  decode
};
