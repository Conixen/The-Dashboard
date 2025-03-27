// Uppdatera klockan (Visar bara timmar och minuter)
function updateClock() {
    const now = new Date();
    const date = now.toLocaleDateString("sv-SE");
    const time = now.toLocaleTimeString("sv-SE", { hour: "2-digit", minute: "2-digit" });
    document.getElementById("clock").textContent = `${date} ${time}`;
}

// Hantera redigerbar rubrik
function setupEditableTitle() {
    const title = document.getElementById("db-titleText");

    // Ladda sparad rubrik från localStorage om den finns
    const savedTitle = localStorage.getItem("dashboardTitle");
    if (savedTitle) {
        title.textContent = savedTitle;
    }

    // Spara ändringar när användaren slutar redigera (trycker Enter eller klickar utanför)
    title.addEventListener("blur", () => {
        localStorage.setItem("dashboardTitle", title.textContent);
    });

    // Tillåta Enter för att slutföra redigeringen
    title.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            title.blur(); // Avsluta redigering
        }
    });
}

// Kör funktionerna när sidan laddats
document.addEventListener("DOMContentLoaded", () => {
    updateClock();
    setInterval(updateClock, 60000); // Uppdatera varje minut

    setupEditableTitle(); // Gör titeln redigerbar och sparbar
});


