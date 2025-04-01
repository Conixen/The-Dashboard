function updateClock() {
    const now = new Date();
    const date = now.toLocaleDateString("sv-SE");
    const time = now.toLocaleTimeString("sv-SE", { hour: "2-digit", minute: "2-digit" });
    document.getElementById("clock").textContent = `${date} ${time}`;
}

function setupEditableTitle() {
    const title = document.getElementById("db-titleText");

    const savedTitle = localStorage.getItem("dashboardTitle");
    if (savedTitle) {
        title.textContent = savedTitle;
    }

    title.addEventListener("blur", () => {
        localStorage.setItem("dashboardTitle", title.textContent);
    });

    title.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            title.blur(); 
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    updateClock();
    setInterval(updateClock, 60000); 

    setupEditableTitle(); 
});


