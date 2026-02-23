function checkStorage() {
    const crop = document.getElementById("crop").value;
    const temp = parseFloat(document.getElementById("temp").value);
    const days = parseInt(document.getElementById("days").value);

    let message = "";

    if (crop === "Tomato") {
        if (temp > 25 || days > 5) {
            message = "High spoilage risk. Sell immediately!";
        } else {
            message = "Storage conditions are safe.";
        }
    }

    if (crop === "Onion") {
        if (temp > 30 || days > 10) {
            message = "High spoilage risk for Onion.";
        } else {
            message = "Onion storage is safe.";
        }
    }

    if (crop === "Potato") {
        if (temp > 20 || days > 7) {
            message = "High spoilage risk for Potato.";
        } else {
            message = "Potato storage is safe.";
        }
    }

    document.getElementById("result").innerText = message;
}