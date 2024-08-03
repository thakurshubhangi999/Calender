const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

function renderCalendar(month, year) {
    const monthYear = document.getElementById("monthYear");
    const dates = document.getElementById("dates");

    dates.innerHTML = "";

    const firstDay = new Date(year, month).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    monthYear.textContent = `${monthNames[month]} ${year}`;

    // Add empty cells for days of the week before the first day
    for (let i = 0; i < firstDay; i++) {
        const cell = document.createElement("div");
        dates.appendChild(cell);
    }

    // Add cells for each day of the month
    for (let day = 1; day <= lastDate; day++) {
        const cell = document.createElement("div");
        cell.textContent = day;
        dates.appendChild(cell);
    }
}

document.getElementById("prevMonth").addEventListener("click", () => {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    renderCalendar(currentMonth, currentYear);
});

document.getElementById("nextMonth").addEventListener("click", () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    renderCalendar(currentMonth, currentYear);
});

// Initial render
renderCalendar(currentMonth, currentYear);
