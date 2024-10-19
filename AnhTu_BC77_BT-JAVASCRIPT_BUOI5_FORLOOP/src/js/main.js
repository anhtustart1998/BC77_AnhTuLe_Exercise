/* ---------------------------- Common Functions ---------------------------- */
const getElement = (selector) => {
  return document.querySelector(selector);
};

const convertMillion = (moneyInput) => {
  return moneyInput * 1000000;
};

/* ---------------------------- Main JS Functions --------------------------- */

// #1: Print Odd/Even Integers
const printOddEven = () => {
  let oddNums = [];
  let evenNums = [];

  for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
      evenNums.push(i);
    } else {
      oddNums.push(i);
    }
  }
  getElement("#odd-int").innerHTML = oddNums.join(", ");
  getElement("#even-int").innerHTML = evenNums.join(", ");
};

// #2: Calculate the sum of even numbers from 1 to n.
const sumEvenNum = () => {
  const nNumber = +getElement("#number-n").value;

  let evenSum = 0;
  for (let i = 1; i <= nNumber; i++) {
    if (i % 2 === 0) {
      evenSum += i;
    }
  }

  getElement("#sum-even").innerHTML = evenSum;
};

// #3: How many numbers are divisible by 3 from 0 to 1000?
const divideByThree = () => {
  let numbersDiviByThree = [];

  for (let i = 0; i <= 1000; i++) {
    if (i % 3 === 0) {
      numbersDiviByThree.push(i);
    }
  }

  getElement("#numbers-devide-three").innerHTML = numbersDiviByThree.length;
};

// #4: Create a program that prints 10 divs on button click: red for even, blue for odd.
const generateDivs = () => {
  const container = getElement("#ten-divs");
  container.innerHTML = "";

  for (let i = 1; i <= 10; i++) {
    const div = document.createElement("div");
    div.textContent = `Div ${i}`;

    if (i % 2 === 0) {
      div.style.backgroundColor = "red";
    } else {
      div.style.backgroundColor = "blue";
    }

    div.style.color = "white";
    div.style.padding = "10px";
    div.style.margin = "5px";

    container.appendChild(div);
  }
};

// #5: Find the smallest positive integer satisfy: 1 + 2 + ... + n > 10,000.

const findSmallestInt = () => {
  let finalSum = 0;
  let i = 0;

  for (i = 1; ; i++) {
    finalSum += i;
    if (finalSum > 10000) {
      break;
    }
  }
  getElement("#smallest-N").innerHTML = i;
};

// #6: Write a program that inputs two numbers, x and n, and calculates the sum: S(n) = x + x² + x³ + ... + xⁿ.

const calGeometric = () => {
  const numberX = +getElement("#number-X").value;
  const numberN = +getElement("#number-N").value;

  let sum = 0;
  let currentX = numberX;

  for (let i = 1; i <= numberN; i++) {
    sum += currentX;
    currentX *= numberX;
  }

  getElement("#geometric-result").innerHTML = sum;
};

// #7: Enter n. Calculate the factorial 1×2×…×n.
const calFactorial = () => {
  const nNumber = +getElement("#amount-numbers").value;
  let factorialResult = 1;
  for (let i = 1; i <= nNumber; i++) {
    factorialResult *= i;
  }
  getElement("#factorial-result").innerHTML = factorialResult;
};

// #8: Enter n. Print integers from 1 to n.
function printIntegers() {
  const n = +getElement("#input-n").value;
  let result = "";
  for (let i = 1; i <= n; i++) {
    result += i + " ";
  }
  getElement("#integer-result").innerText = result;
}

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
