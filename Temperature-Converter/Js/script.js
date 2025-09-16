/* console.log('Welcome to 🌡️ Temperature Converter');

const tempLoad = () => {
    let fa = document.getElementById('fa');
    fa.innerHTML = "&#xf2cb";
    fa.style.color = "#ffa41b";

    setTimeout(() => {
        fa.innerHTML = "&#xf2ca;";
        fa.style.color = "#ffa41b";
    }, 1000)

    setTimeout(() => {
        fa.innerHTML = "&#xf2c9;";
    }, 2000)

    setTimeout(() => {
        fa.innerHTML = "&#xf2c8;";
    }, 3000)

    setTimeout(() => {
        fa.innerHTML = "&#xf2c7;";
        fa.style.color = "#ff5151";
    }, 4000)
}

setInterval(() => {
    fa.style.color = "#ffa41b";
    tempLoad();
}, 5000);


tempLoad();

const calculateTemp = () => {
    const numberTemp = document.getElementById('temp').value;
    // console.log(numberTemp);

    const tempSelected = document.querySelector('#temp_diff');
    const valeTemp = temp_diff.options[tempSelected.selectedIndex].value;
    // console.log(valeTemp);


    // Convert temperature from Celcius to Fahrenheit
    const celTOfah = (cel) => {
        let fahrenheit = (cel * (9 / 5) + 32);
        return fahrenheit;
    }

    // Convert temperature from Fahrenheit to Celsius
    const fahTOcel = (fehr) => {
        let celsius = ((fehr - 32) * 5 / 9);
        return celsius;
    }

    let result;
    if (valeTemp == "cel") {
        result = celTOfah(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result}°Fahrenheit`;
    } else {
        result = fahTOcel(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result}°Celsius`;
    }

    setTimeout(() => {
        window.location.reload();
    }, 1500);
} */


// --- SETUP ---
// Get references to HTML elements once to avoid searching the DOM repeatedly.
const tempInput = document.getElementById('temp');
const unitSelect = document.getElementById('temp_diff');
const resultContainer = document.getElementById('resultContainer');
const faIcon = document.getElementById('fa');

// --- ANIMATION LOGIC ---
// This function animates the thermometer icon.
const tempLoad = () => {
    // A guard clause to prevent errors if the icon element doesn't exist.
    if (!faIcon) return;

    // Reset icon to its initial state
    faIcon.innerHTML = "&#xf2cb";
    faIcon.style.color = "#ffa41b";

    // Chain of animations with setTimeout
    setTimeout(() => { faIcon.innerHTML = "&#xf2ca;"; }, 1000);
    setTimeout(() => { faIcon.innerHTML = "&#xf2c9;"; }, 2000);
    setTimeout(() => { faIcon.innerHTML = "&#xf2c8;"; }, 3000);
    setTimeout(() => {
        faIcon.innerHTML = "&#xf2c7;";
        faIcon.style.color = "#ff5151"; // Hot temperature color
    }, 4000);
};

// Initial call to start the animation on page load.
tempLoad();
// Set the animation to repeat every 5 seconds.
setInterval(tempLoad, 5000);


// --- CALCULATION LOGIC ---
const calculateTemp = () => {
    const inputValue = tempInput.value;
    const selectedUnit = unitSelect.value;

    // 1. Handle empty input: If the input box is cleared, clear the result.
    if (inputValue === "") {
        resultContainer.innerHTML = "";
        return;
    }

    // 2. Validate input: Check if the entered value is a valid number.
    const numberTemp = parseFloat(inputValue);
    if (isNaN(numberTemp)) {
        resultContainer.innerHTML = "Please enter a valid number";
        return;
    }

    // 3. More concise conversion functions using arrow syntax.
    const celToFah = (cel) => (cel * 9 / 5) + 32;
    const fahToCel = (fah) => (fah - 32) * 5 / 9;

    let result;

    if (selectedUnit === "cel") {
        result = celToFah(numberTemp);
        // 4. Format the output to 2 decimal places for a cleaner look.
        resultContainer.innerHTML = `= ${result.toFixed(2)} °Fahrenheit`;
    } else {
        result = fahToCel(numberTemp);
        resultContainer.innerHTML = `= ${result.toFixed(2)} °Celsius`;
    }
};

// --- EVENT LISTENERS ---
// 5. Calculate in real-time instead of using a submit button and reloading.
tempInput.addEventListener('input', calculateTemp);
unitSelect.addEventListener('change', calculateTemp);

