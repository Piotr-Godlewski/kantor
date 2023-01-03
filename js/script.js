{
    const euroValue = document.querySelector(".js-euro");
    const poundValue = document.querySelector(".js-pound");
    const dolarValue = document.querySelector(".js-dolar");

    const getCurrencySymbol = () => {
        switch (true) {
            case poundValue.checked:
                return " £";
            case dolarValue.checked:
                return " $";
            case euroValue.checked:
                return " €";
        }
    }

    const getCurrencyValue = () => {
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
        return zlotyValue.value / getCurrencyValue();
    };

    const resultExchange = (event) => {
        event.preventDefault();
        const changeResult = document.querySelector(".js-result");
        changeResult.innerText = ` ${calculateExchange().toFixed(2)} ${getCurrencySymbol()}`;
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", resultExchange);
    };

    init();
}