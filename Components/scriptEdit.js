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
            title.blur(); // Avsluta redigering
        }
    });
}
document.addEventListener("DOMContentLoaded", () => {

    setupEditableTitle(); // Gör titeln redigerbar och sparbar
});
