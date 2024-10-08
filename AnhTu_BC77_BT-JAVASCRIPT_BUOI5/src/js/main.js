/* ---------------------------- Common Functions ---------------------------- */
const getElement = (selector) => {
  return document.querySelector(selector);
};

const convertMillion = (moneyInput) => {
  return moneyInput * 1000000;
};

/* ---------------------------- Main JS Functions --------------------------- */

// Exercise #1: Examiation Function:
const checkExam = () => {
  const standardScore = getElement("#cut-off-score").value * 1;
  const testScore =
    getElement("#firstScore").value * 1 +
    getElement("#secondScore").value * 1 +
    getElement("#thirdScore").value * 1;
  const areaInput = getElement("#candidate-area").value;
  const candidateType = getElement("#candidate-type").value;

  let areaScore;
  if (areaInput === "A") {
    areaScore = 2;
  } else if (areaInput === "B") {
    areaScore = 1;
  } else if (areaInput === "C") {
    areaScore = 0.5;
  } else {
    areaScore = 0;
  }

  let candidatePrioScore;
  if (candidateType === "1") {
    candidatePrioScore = 2.5;
  } else if (candidateType === "2") {
    candidatePrioScore = 1.5;
  } else if (candidateType === "3") {
    candidatePrioScore = 1;
  } else {
    candidatePrioScore = 0;
  }

  const totalScore = testScore + areaScore + candidatePrioScore;

  getElement("#exam-score").innerHTML =
    totalScore >= standardScore ? `🔺${totalScore}` : `🔻${totalScore}`;
  getElement("#exam-result").innerHTML =
    totalScore >= standardScore
      ? "🥰 Congratulations! You Made It"
      : "🥺 Oh no, bad luck this time. Don't give Up, Let's crush it next time!";
};

// Exercise #2: Electricity Consumption Bill:
const calcElectricBill = () => {
  const customerName = getElement("#customer-name").value;
  const electricConsump = +getElement("#electric-consump").value;
  const finalBill = getElement("#final-bill");

  let billAmount = 0;
  if (electricConsump <= 50) {
    billAmount = 500 * 50;
  } else if (electricConsump <= 100) {
    billAmount = 500 * 50 + 650 * (electricConsump - 50);
  } else if (electricConsump <= 200) {
    billAmount = 500 * 50 + 650 * 50 + 850 * (electricConsump - 100);
  } else if (electricConsump <= 350) {
    billAmount =
      500 * 50 + 650 * 50 + 850 * 100 + 1100 * (electricConsump - 200);
  } else {
    billAmount =
      500 * 50 +
      650 * 50 +
      850 * 100 +
      1100 * 150 +
      1300 * (electricConsump - 250);
  }
  const formattedBill = billAmount.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  finalBill.innerHTML = `Mr./Ms. ${customerName}, your electric bill is ${formattedBill}.`;
};

// Exercise 3: Tax Calculation
const calcTax = () => {
  const taxPayer = getElement("#tax-payer").value;
  const annualIncome = +getElement("#annual-income").value / 1000000;
  const dependent = +getElement("#dependent-num").value;

  let netTax;
  if (annualIncome <= 60) {
    netTax = annualIncome * 0.05;
  } else if (annualIncome <= 120) {
    netTax = 60 * 0.05 + (annualIncome - 60) * 0.1;
  } else if (annualIncome <= 210) {
    netTax = 60 * 0.05 + 60 * 0.1 + (annualIncome - 120) * 0.15;
  } else if (annualIncome <= 384) {
    netTax = 60 * 0.05 + 60 * 0.1 + 90 * 0.15 + (annualIncome - 210) * 0.2;
  } else if (annualIncome <= 624) {
    netTax =
      60 * 0.05 +
      60 * 0.1 +
      90 * 0.15 +
      174 * 0.2 +
      (annualIncome - 384) * 0.25;
  } else if (annualIncome <= 960) {
    netTax =
      60 * 0.05 +
      60 * 0.1 +
      90 * 0.15 +
      174 * 0.2 +
      240 * 0.25 +
      (annualIncome - 624) * 0.3;
  } else {
    netTax =
      60 * 0.05 +
      60 * 0.1 +
      90 * 0.15 +
      174 * 0.2 +
      240 * 0.25 +
      336 * 0.3 +
      (annualIncome - 960) * 0.35;
  }

  const finalTax = convertMillion(netTax - 4 - dependent * 1.6);

  if (finalTax < 0) {
    getElement("#final-tax").innerHTML = "No tax due";
    return;
  }
  const formattedTax = finalTax.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  getElement(
    "#final-tax"
  ).innerHTML = `Mr./Ms.${taxPayer}, your tax is ${formattedTax}`;
};

// Exercise 4: Starlink TV Service Fee Calculator:

// Downdown content reveal mechanism:
const connectSection = getElement("#connect-section");
getElement("#customer-type").addEventListener("change", function () {
  const selectOption = this.value;
  if (selectOption === "enterprise") {
    connectSection.classList.remove("hidden");
  } else {
    connectSection.classList.add("hidden");
  }
});

// Main Function Operations:
const calStarlinkBill = () => {
  const customerType = getElement("#customer-type");
  const premiumChannel = +getElement("#premium-num").value;
  const starID = getElement("#customer-id").value;
  const connectNum = +getElement("#connect-num").value;

  let finalFee;
  if (customerType.value === "individual") {
    finalFee = 4.5 + 20.5 + 7.5 * premiumChannel;
  } else {
    if (connectNum <= 10) {
      finalFee = 15 + 75 + 50 * premiumChannel;
    } else {
      finalFee = 15 + 75 + (connectNum - 10) * 5 + 50 * premiumChannel;
    }
  }

  const formattedFee = finalFee.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  getElement(
    "#starlink-fee"
  ).innerHTML = `Mr./Mrs ${starID} has the Starlink fee of: ${formattedFee}`;
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
