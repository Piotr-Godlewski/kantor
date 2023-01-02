{

    const euroValue = document.querySelector(".js-euro");
    const poundValue = document.querySelector(".js-pound");
    const dolarValue = document.querySelector(".js-dolar");
    const zlotyValue = document.querySelector(".js-zloty");
    const changeResult = document.querySelector(".js-result");
    const formElement = document.querySelector(".js-form");

    formElement.addEventListener("submit", (event) => {
        event.preventDefault();

        let rate;
        let currencySymbol;

        switch (true) {
            case poundValue.checked:
                rate = poundValue.value;
                currencySymbol = " $";
                break;
            case dolarValue.checked:
                rate = dolarValue.value;
                currencySymbol = " $";
                break;
            case euroValue.checked:
                rate = euroValue.value;
                currencySymbol = " €";
                break;
        }

        const result = zlotyValue.value / rate;
        changeResult.innerText = ` ${result.toFixed(2)} ${currencySymbol}`;

    });
}