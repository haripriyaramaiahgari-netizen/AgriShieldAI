const image = document.getElementById("image");
const preview = document.getElementById("preview");

image.addEventListener("change", function() {

    const file = image.files[0];

    if (file) {
        preview.src = URL.createObjectURL(file);
        preview.style.display = "block";
    }

});

function predict() {

    let crop = document.getElementById("crop").value;
    let location = document.getElementById("location").value.toLowerCase();

    let pest = "";
    let risk = "";
    let recommendation = "";
    let confidence = "";

    // Crop Prediction
    if (crop == "Rice") {
        pest = "Brown Planthopper";
        risk = "HIGH";
        recommendation = "Spray Imidacloprid.";
        confidence = "96%";
    }
    else if (crop == "Tomato") {
        pest = "Tomato Leaf Miner";
        risk = "MEDIUM";
        recommendation = "Spray Neem Oil.";
        confidence = "94%";
    }
    else if (crop == "Cotton") {
        pest = "Aphids";
        risk = "LOW";
        recommendation = "Use insecticidal soap.";
        confidence = "95%";
    }
    else if (crop == "Maize") {
        pest = "Fall Armyworm";
        risk = "HIGH";
        recommendation = "Spray Chlorantraniliprole.";
        confidence = "97%";
    }
    else {
        pest = "Rust Disease";
        risk = "MEDIUM";
        recommendation = "Apply fungicide.";
        confidence = "93%";
    }

    document.getElementById("pest").innerHTML = pest;
    document.getElementById("risk").innerHTML = risk;
    document.getElementById("recommendation").innerHTML = recommendation;
    document.getElementById("confidence").innerHTML = confidence;

    // Weather
    if (location == "chennai") {
        document.getElementById("temp").innerHTML = "31°C";
        document.getElementById("humidity").innerHTML = "72%";
        document.getElementById("rain").innerHTML = "15 mm";
    }
    else if (location == "tirupati") {
        document.getElementById("temp").innerHTML = "29°C";
        document.getElementById("humidity").innerHTML = "65%";
        document.getElementById("rain").innerHTML = "8 mm";
    }
    else if (location == "hyderabad") {
        document.getElementById("temp").innerHTML = "33°C";
        document.getElementById("humidity").innerHTML = "58%";
        document.getElementById("rain").innerHTML = "2 mm";
    }
    else {
        document.getElementById("temp").innerHTML = "30°C";
        document.getElementById("humidity").innerHTML = "70%";
        document.getElementById("rain").innerHTML = "10 mm";
    }

    document.getElementById("loading").style.display = "block";

setTimeout(function () {

    document.getElementById("loading").style.display = "none";
    document.getElementById("result").style.display = "block";

}, 2000);

}

function updateTime() {
    const now = new Date();
    document.getElementById("datetime").innerHTML =
        "🕒 " + now.toLocaleString();
}

updateTime();
setInterval(updateTime, 1000);

document.getElementById("result").style.display = "none";
document.getElementById("loading").style.display = "none";