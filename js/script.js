{
    const euroValue = document.querySelector(".js-euro");
    const poundValue = document.querySelector(".js-pound");
    const dolarValue = document.querySelector(".js-dolar");

    const selectCurrencySymbol = () => {
        switch (true) {
            case poundValue.checked:
                return " £";
            case dolarValue.checked:
                return " $";
            case euroValue.checked:
                return " €";
        }
    }

    const selectCurrency = () => {
        switch (true) {
            case poundValue.checked:
                return poundValue.value;
            case dolarValue.checked:
                return dolarValue.value;
            case euroValue.checked:
                return euroValue.value;
        }
    };

    const calculateExchange = () => {
        const zlotyValue = document.querySelector(".js-zloty");
        return zlotyValue.value / selectCurrency();
    };

    const resultExchange = (event) => {
        event.preventDefault();
        const changeResult = document.querySelector(".js-result");
        changeResult.innerText = ` ${calculateExchange().toFixed(2)} ${selectCurrencySymbol()}`;
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", resultExchange);
    };

    init();
}