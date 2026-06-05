document.addEventListener("DOMContentLoaded", function() {

    document.querySelector("form").onsubmit = function() {
        fetch("https://open.er-api.com/v6/latest/USD")
            .then(response => response.json())
            .then(data => {
                const currency = document.querySelector("#currency").value.toUpperCase();
                const rate = data.rates[currency];
                if (rate !== undefined) {
                    document.querySelector("h1").innerText = `1 USD = ${rate.toFixed(4)} ${currency}`;
                } else {
                    document.querySelector("h1").innerText = "Currency not found.";
                }
            })
            .catch(error => {
                console.error("Error fetching exchange rates:", error);
                document.querySelector("h1").innerText = "Error fetching exchange rates.";
            })

        return false;
    }


});