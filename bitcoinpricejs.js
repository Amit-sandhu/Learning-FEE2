const button = document.getElementById("priceBtn");

button.addEventListener("click", getBitcoinPrice);

async function getBitcoinPrice() {
    try {
        const response = await fetch(
            "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd,inr&include_24hr_change=true&include_last_updated_at=true"
        );

        const data = await response.json();

        const bitcoin = data.bitcoin;

        document.getElementById("price").textContent =
            `Price: ${bitcoin.inr.toLocaleString()}`;

        document.getElementById("change").textContent =
            `24 Hour Change: ${bitcoin.inr_24h_change.toFixed(6)}%`;

        const date = new Date(bitcoin.last_updated_at * 1000);

        document.getElementById("updated").textContent =
            `Last Updated: ${date.toLocaleString()}`;

    } catch (error) {
        console.error(error);
        alert("Unable to fetch Bitcoin price.");
    }
}