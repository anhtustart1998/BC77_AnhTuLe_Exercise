/* ---------------------------- Common Functions ---------------------------- */
const getElement = (selector) => {
  return document.querySelector(selector);
};

const convertMillion = (moneyInput) => {
  return moneyInput * 1000000;
};

/* ---------------------------- Main JS Functions --------------------------- */

// #Master: Adding new number to the array:
let numberArray = [];
const generateArray = () => {
  const numInput = getElement("#user-number").value;

  if (numInput.trim() === "" || isNaN(numInput)) {
    alert("Please input a valid number!");
    return;
  }
  numberArray.push(+numInput);
  getElement("#number-array").innerHTML = `[${numberArray.join(", ")}]`;
};

// #1: Sum of positive numbers.
const calPositive = () => {
  let positiveSum = 0;

  for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] >= 0) {
      positiveSum += numberArray[i];
    }
  }
  getElement(
    "#positive-sum"
  ).innerHTML = `The Sum of Positive Num => ${positiveSum}`;
};

// #2: Count of positive numbers.
const countPositive = () => {
  getElement("#positive-count").innerHTML = `The Number of Positive Number => ${
    numberArray.filter((num) => num >= 0).length
  }`;
};

// #3: Find the smallest Number.
const findSmallestNum = () => {
  getElement("#smallest-number").innerHTML = `The Smallest Num => ${Math.min(
    ...numberArray
  )}`;
};

// #4: Find The Smallest Positive Number.
const findSmallestPositive = () => {
  const positiveNumbers = numberArray.filter((num) => num > 0);
  const smallestPositive =
    positiveNumbers.length > 0 ? Math.min(...positiveNumbers) : "N/A";
  getElement(
    "#smallest-positive-number"
  ).innerHTML = `The Smallest Positive Number is ${smallestPositive}`;
};

// #5: Find The Last Even Number.

const findLastEven = () => {
  const lastEven = numberArray
    .slice()
    .reverse()
    .find((num) => num % 2 === 0);
  getElement("#last-even").innerHTML = `Last Even Number: ${
    lastEven !== undefined ? lastEven : "N/A"
  }`;
};

// #6: Swap Places.

const swapPlace = () => {
  const index1 = +getElement("#index1").value;
  const index2 = +getElement("#index2").value;

  if (
    isNaN(index1) ||
    isNaN(index2) ||
    !Number.isInteger(index1) ||
    !Number.isInteger(index2) ||
    index1 < 0 ||
    index2 < 0 ||
    index1 >= numberArray.length ||
    index2 >= numberArray.length
  ) {
    alert(
      `Please enter valid integer indexes within the array range of ${
        numberArray.length - 1
      }!`
    );
    return;
  }

  [numberArray[index1], numberArray[index2]] = [
    numberArray[index2],
    numberArray[index1],
  ];

  getElement("#reindex-array").innerHTML = `New Array => ${numberArray}`;
};

// #7: Sort numbers in ascending order

const sortAscending = () => {
  numberArray.sort((a, b) => a - b);
  getElement(
    "#sorted-array"
  ).innerHTML = `Sort Ascending Array => ${numberArray}`;
};

// #8: Find the first Prime Number.

const findFirstPrime = () => {
  const firstPrime = numberArray.find((num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  });

  getElement("#first-prime").innerHTML = `First Prime Number: ${
    firstPrime !== undefined ? firstPrime : "N/A"
  }`;
};

// #9: Count the Integer Numbers:

let numberArray2 = [];
const generateArray2 = () => {
  const numInput2 = getElement("#user-number-2").value;

  if (numInput2.trim() === "" || isNaN(numInput2)) {
    alert("Please input a valid number!");
    return;
  }
  numberArray2.push(+numInput2);
  getElement("#number-array-2").innerHTML = `[${numberArray2.join(", ")}]`;
};

const countInteger = () => {
  getElement("#integer-count").innerHTML = `The Number of Integer Number => ${
    numberArray2.filter((num) => Number.isInteger(num)).length
  }`;
};

// #10: Compare Number Of Positive Numbers With That Of Negative Numbers.
const comparePosNeg = () => {
  const positiveCount = numberArray.filter((num) => num >= 0).length;
  const negativeCount = numberArray.filter((num) => num < 0).length;

  if (positiveCount > negativeCount) {
    getElement("#compare-result").innerHTML =
      "Number of Positive Ones is > the Negative Ones";
  } else if (positiveCount === negativeCount) {
    getElement("#compare-result").innerHTML =
      "Number of Positive Ones is = the Negative Ones";
  } else {
    getElement("#compare-result").innerHTML =
      "Number of Positive Ones is < the Negative Ones";
  }
};

/* --------------------------- Darkmode Operation --------------------------- */

const themeToggleDarkIcon = getElement("#theme-toggle-dark-icon");
const themeToggleLightIcon = getElement("#theme-toggle-light-icon");

if (document.documentElement.classList.contains("dark")) {
  themeToggleLightIcon.classList.remove("hidden");
  themeToggleDarkIcon.classList.add("hidden");
} else {
  themeToggleDarkIcon.classList.remove("hidden");
  themeToggleLightIcon.classList.add("hidden");
}

const modeOperation = () => {
  themeToggleDarkIcon.classList.toggle("hidden");
  themeToggleLightIcon.classList.toggle("hidden");

  document.documentElement.classList.toggle("dark");
};
