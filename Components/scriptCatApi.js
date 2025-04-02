import API_KEYS from "../keys.js";

document.addEventListener("DOMContentLoaded", () => {
    const catContainer = document.getElementById("catImages");
    const loadCatsButton = document.getElementById("loadCats");

    async function fetchCats() {
        try {
            const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=1", {
                headers: { "x-api-key": API_KEYS.catApiKey } // API_KEY
            });

            if (!response.ok) {
                throw new Error("Något gick fel vid hämtning av kattbilder.");
            }

            const data = await response.json();
            catContainer.innerHTML = ""; 
            
            data.forEach(cat => {
                const img = document.createElement("img");
                img.src = cat.url;
                img.alt = "Söt katt";
                catContainer.appendChild(img);
            });
        } catch (error) {
            console.error("Fel vid hämtning av kattbilder:", error);
        }
    }

    // Ladda katter vid start
    fetchCats();

    // Hämta nya bilder vid knapptryck
    loadCatsButton.addEventListener("click", fetchCats);
});