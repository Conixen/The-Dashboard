function setupNotes() {
    const notesArea = document.getElementById("notes");

    notesArea.value = localStorage.getItem("quickNotes") || "";

    notesArea.addEventListener("input", () => {
        localStorage.setItem("quickNotes", notesArea.value);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    setupNotes();
});
