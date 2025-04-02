

function changeBackground() {
    const apiUrl = `https://api.unsplash.com/photos/random?client_id=${API_KEYS.unisplashApiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log("Fullt API-svar:", data); 

            if (data && data.urls && data.urls.full) {
                const imageUrl = data.urls.full;
                document.body.style.backgroundImage = `url('${imageUrl}')`;
                document.body.style.backgroundSize = "cover";
                document.body.style.backgroundPosition = "center";
                localStorage.setItem("dashboardBackground", imageUrl);
            } else {
                console.error("Fel: Ingen bilddata eller URL hittades i svaret.");
            }
        })
        .catch(error => {
            console.error("Fel vid hämtning av bild:", error);
        });
}

function loadBackground() {
    const savedImage = localStorage.getItem("dashboardBackground");
    if (savedImage) {
        console.log("Laddar sparad bakgrundsbild från localStorage:", savedImage);
        document.body.style.backgroundImage = `url('${savedImage}')`;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    loadBackground();

    const bgButton = document.getElementById("changeBackground");
    if (bgButton) {
        bgButton.addEventListener("click", changeBackground);
    }
});