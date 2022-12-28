let euroValue = document.querySelector(".js-euro");
let poundValue = document.querySelector(".js-pound");
let dolarValue = document.querySelector(".js-dolar");
let zlotyValue = document.querySelector(".js-zloty");
let changeResult = document.querySelector(".js-result");
let formElement = document.querySelector(".js-form");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    switch (true) {
        case poundValue.checked:
            let changePound = zlotyValue.value / poundValue.value;
            changeResult.innerText = changePound.toFixed(2) + " £";
            break;
        case dolarValue.checked:
            let changeDolar = zlotyValue.value / dolarValue.value;
            changeResult.innerText = changeDolar.toFixed(2) + " $";
            break;
        case euroValue.checked:
            let changeEuro = zlotyValue.value / euroValue.value;
            changeResult.innerText = changeEuro.toFixed(2) + " €";
            break;
    }

});