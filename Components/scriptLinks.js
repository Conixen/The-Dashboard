function loadLinks() {
    const linksContainer = document.getElementById("linksContainer");
    linksContainer.innerHTML = "";

    const links = JSON.parse(localStorage.getItem("savedLinks")) || [];

    links.forEach((link, index) => {
        const linkDiv = document.createElement("div");
        linkDiv.classList.add("link-item");

        const linkElement = document.createElement("a");
        linkElement.href = link.url;
        linkElement.textContent = link.title;
        linkElement.target = "_blank"; // Öppna i ny flik

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "X";
        deleteButton.classList.add("delete-btn");
        deleteButton.onclick = () => deleteLink(index);

        linkDiv.appendChild(linkElement);
        linkDiv.appendChild(deleteButton);
        linksContainer.appendChild(linkDiv);
    });
}

function addLink() {
    const title = prompt("Ange länkens titel:");
    if (!title) return;

    const url = prompt("Ange URL:");
    if (!url) return;

    const links = JSON.parse(localStorage.getItem("savedLinks")) || [];
    links.push({ title, url });
    localStorage.setItem("savedLinks", JSON.stringify(links));

    loadLinks();
}

function deleteLink(index) {
    const links = JSON.parse(localStorage.getItem("savedLinks")) || [];
    links.splice(index, 1);
    localStorage.setItem("savedLinks", JSON.stringify(links));

    loadLinks();
}

document.addEventListener("DOMContentLoaded", () => {
    loadLinks(); 
    document.getElementById("addLink").addEventListener("click", addLink);
});