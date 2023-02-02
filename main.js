//1 task
function enterString(line) {
  let answer = prompt(`Enter your ${line} string`);

  while (!answer) {
    answer = prompt(`Error! Re-enter ${line} string`);
  }

  return answer;
}

const arrayOfStrings = [
  enterString("First string"),
  enterString("Second string"),
  enterString("Third string"),
];
const lineResult = [];

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === j) {
      continue;
    }

    for (let a = 0; a < 3; a++) {
      if (i === a || j === a) {
        continue;
      }
      lineResult.push(
        arrayOfStrings[i] + arrayOfStrings[j] + arrayOfStrings[a]
      );
    }
  }
}

console.log(lineResult);

//2 task
function enterNumber() {
  let enteredNumber = Number(prompt("Enter a five-digit number"));

  while (
    isNaN(enteredNumber) ||
    Math.abs(enteredNumber) < 10000 ||
    Math.abs(enteredNumber) > 99999
  ) {
    enteredNumber = Number(prompt("Error! Re-enter five-digit number"));
  }

  return Math.round(enteredNumber);
}

let number = enterNumber();
const numberResult = [];

for (let i = 10000; number; i /= 10) {
  numberResult.push(Math.trunc(number / i));
  number = Math.abs(number % i);
}

console.log(numberResult.join(" "));
