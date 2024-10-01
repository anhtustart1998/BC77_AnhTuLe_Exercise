// Even Odd Checking
function checkEvenOdd() {
  document.querySelector("#numberResult").innerHTML =
    Number(document.querySelector("#checkNumber").value) % 2 === 0
      ? "The Number is Even"
      : "The Number is Odd";
}

// KPI Calculator
function checkKPI() {
  document.querySelector("#kpiResult").innerHTML =
    Number(document.querySelector("#unitQuantity").value) >= 100
      ? "Achieve the KPI."
      : "Not achieve the KPI.";
}

// Discount Checking
function checkDiscount() {
  document.querySelector("#discountResult").innerHTML =
    Number(document.querySelector("#moneyPaid").value) >= 500
      ? `Well Done You receive a discount of 😎 20% equivalent to $ ${
          Number(document.querySelector("#moneyPaid").value) * 0.2
        }`
      : "Your didn't pay enough 🥹, let's pay more please!";
}

const passwordInput = document.querySelector("#password");
const passwordStrength = document.querySelector("#passwordStrength");

function checkPasswordStrength(password) {
  let score = 0;
  if (password.length > 6) score++;
  if (password.length > 10) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  if (score < 2) return "Weak";
  if (score < 4) return "Medium";
  return "Strong";
}

function getStrengthColor(strength) {
  if (strength === "Weak") {
    return "text-red-600";
  } else if (strength === "Medium") {
    return "text-yellow-600";
  } else if (strength === "Strong") {
    return "text-green-600";
  } else {
    return "text-gray-600";
  }
}

passwordInput.addEventListener("input", function () {
  const password = this.value;
  const strength = checkPasswordStrength(password);
  const color = getStrengthColor(strength);

  passwordStrength.className = `text-sm ${color}`;
  passwordStrength.innerHTML = password
    ? `<span class="font-medium">Password strength: ${strength}</span>`
    : "";
});

// Password Reveal
function handlePasswordReveal() {
  let passwordArea = document.querySelector("#password");
  let revealPassword = document.querySelector("#passwordIcon");

  if (passwordArea.type === "password") {
    passwordArea.type = "text";
    revealPassword.className = "fa-regular fa-eye";
  } else {
    passwordArea.type = "password";
    revealPassword.className = "fa-regular fa-eye-slash";
  }
}

// Darkmode Operation:

var themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
var themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");

// Change the icons inside the button based on previous settings
if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  themeToggleLightIcon.classList.remove("hidden");
} else {
  themeToggleDarkIcon.classList.remove("hidden");
}

var themeToggleBtn = document.getElementById("theme-toggle");

themeToggleBtn.addEventListener("click", function () {
  // toggle icons inside button
  themeToggleDarkIcon.classList.toggle("hidden");
  themeToggleLightIcon.classList.toggle("hidden");

  // if set via local storage previously
  if (localStorage.getItem("color-theme")) {
    if (localStorage.getItem("color-theme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }

    // if NOT set via local storage previously
  } else {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  }
});
