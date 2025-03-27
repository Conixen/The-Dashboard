import API_KEYS from "../keys.js";

// Funktion för att hämta väderdata
function fetchWeather(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEYS.weatherApiKey}&units=metric&lang=sv`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const city = data.name;
            const temp = Math.round(data.main.temp);
            const description = data.weather[0].description;
            const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

            document.getElementById("weather").innerHTML = `
                ${city}: ${temp}°C, ${description} 
                <img src="${icon}" alt="Weather icon">
            `;
        })
        .catch(error => {
            document.getElementById("weather").textContent = "Kunde inte hämta vädret.";
            console.error("Fel vid hämtning av väderdata:", error);
        });
}

// Funktion för att hämta användarens plats
function getLocation() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                fetchWeather(lat, lon);
            },
            (error) => {
                document.getElementById("weather").textContent = "Kan inte hämta plats.";
                console.error("Fel vid hämtning av plats:", error);
            }
        );
    } else {
        document.getElementById("weather").textContent = "Geolocation stöds inte i din webbläsare.";
    }
}

// Kör funktionen vid sidstart
document.addEventListener("DOMContentLoaded", getLocation);
