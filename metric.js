const oneMetre = 3.28084;
const oneLitre =  0.264172;
const onekilo = 2.20462;

const oneFeet = 0.3048;
const oneGallon = 3.78541;
const onePound = 0.453592;

function change(){
    let userInput = document.getElementById('user-input').value;

    let feetResult = userInput * oneMetre;
    let gallonResult = userInput * oneLitre;
    let poundResult = userInput * onekilo;

    let metreResult = userInput * oneFeet;
    let litreResult = userInput * oneGallon;
    let kiloResult = userInput * onePound;

    document.getElementById("user-input-1").textContent = userInput;
    document.getElementById("user-input-2").textContent = userInput;
    document.getElementById("user-input-3").textContent = userInput;
    document.getElementById("user-input-4").textContent = userInput;
    document.getElementById("user-input-5").textContent = userInput;
    document.getElementById("user-input-6").textContent = userInput;
    document.getElementById("feet-result").textContent = feetResult.toFixed(3);
    document.getElementById("gallon-result").textContent = gallonResult.toFixed(3);
    document.getElementById("pound-result").textContent = poundResult.toFixed(3);
    document.getElementById("metre-result").textContent = metreResult.toFixed(3);
    document.getElementById("litre-result").textContent = litreResult.toFixed(3);
    document.getElementById("kilo-result").textContent = kiloResult.toFixed(3);
}