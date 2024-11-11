document.addEventListener("DOMContentLoaded", function() {
    // Select all table cells in all tables
    const cells = document.querySelectorAll("table td");

    // Loop through each cell to check its content
    cells.forEach(cell => {
        if (cell.textContent.trim() === "Increase") {
            cell.classList.add("increase");
        } else if (cell.textContent.trim() === "Decrease") {
            cell.classList.add("decrease");
        }
    });
});
