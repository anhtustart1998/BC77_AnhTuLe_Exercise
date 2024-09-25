// Salary Calculation Function:
function salaryCal() {
    var salaryPerHour = document.getElementById('hourSalary').value;

    var totalWorkingHour = document.getElementById('workingHour').value;

    document.getElementById('finalSalary').innerHTML = salaryPerHour * totalWorkingHour
}


// Median Calculation Fuction:

function averageCal() {
    var num1 = Number(document.getElementById('number1').value);
    var num2 = Number(document.getElementById('number2').value);
    var num3 = Number(document.getElementById('number3').value);
    var num4 = Number(document.getElementById('number4').value);
    var num5 =Number(document.getElementById('number5').value);

    document.getElementById('averageNum').innerHTML = (num1 + num2 + num3 + num4 + num5) / 5
}


// Currency Converter:

function currencyConvert() {
    const usdToVnd = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });

    var exchangeRate = Number(document.getElementById('exchangeRate').value);

    var moneyAmount = Number(document.getElementById('moneyAmount').value);

    document.getElementById('vndResult').innerHTML = 
    usdToVnd.format(exchangeRate * moneyAmount)
}


// Perimeter & Area Calculation:
function calPerimeterArea() {
    const perimeterNum = Number(document.getElementById('lenght').value);

    const areaNum = Number(document.getElementById('width').value);

    document.getElementById('perimeterResult').innerHTML = (perimeterNum + areaNum)*2;

    document.getElementById('areaResult').innerHTML = perimeterNum * areaNum

}






// Darkmode Operation:

var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function() {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
    
});