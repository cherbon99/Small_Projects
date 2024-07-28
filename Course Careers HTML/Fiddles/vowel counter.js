function countVowelsAndConsonants(inputString) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  let numOfVowels = 0;
  let numOfCons = 0;

  for (let char of inputString) {
    if (vowels.includes(char)) {
      numOfVowels++;
    } else {
      numOfCons++;
    }
  }

  console.log(
    `number of Vowels ${numOfVowels}\n number of Consonants ${numOfCons}`
  );
}

countVowelsAndConsonants("");
