//ex: 8 qual numero e duplicado

const numbersArray = [1, 2, 3, 4, 2, 5];

let i = 0;
let hasDuplicate = false;

while (i < numbersArray.length) {
  let j = i + 1;

  while (j < numbersArray.length) {
    if (numbersArray[i] === numbersArray[j]) {
      console.log("Número duplicados:", numbersArray[i]); // 2
      hasDuplicate = true;
      break; //interrompe o loop
    }
    j++;
  }
  if (hasDuplicate) {
    break;
  }
  i++;
}

if (!hasDuplicate) {
  console.log("Não há números duplicados");
}

