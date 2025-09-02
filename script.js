// Нижче логіка секції Modal



// Нижче логіка секції Grid + Cards



// Нижче логіка секції Paginaton + Footer

const paginationLimit = 20; 
const paginationTotal = 29; 
let pagiCurentPage = 1;

async function loadPage(page) {
    const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=2w8E9usrwRr8erGBxyuy6R0lyvqfaeU4&page=${page - 1}&size=${paginationLimit}`);
    const data = await response.json();

    const grid = document.querySelector(".grid");
    grid.innerHTML = ""; 

    const events = data._embedded?.events || [];
    events.forEach(event => {
        const gridVenue = event._embedded?.venues?.[0] || { name: "" };
        grid.innerHTML += `
            <div class="grid-card">
                <img class="grid-img" src="${event.images[0].url}" alt="${event.name}">
                <h3 class="grid-event-name">${event.name}</h3>
                <p class="grid-event-date">${event.dates.start.localDate}</p>
                <div class="grid-event-venue">
                    <img class="grid-event-venue-img" src="/event-booster/assets/cards-location.png" alt="location">
                    <p class="grid-event-venue-p">${gridVenue.name}</p>
                </div>
            </div>
        `;
    });

    renderPagination();
}

function renderPagination() {
    const pagination = document.getElementById("pagination-inner");
    pagination.innerHTML = "";

    let pages = [];

    if (paginationTotal <= 7) {
        pages = Array.from({ length: paginationTotal }, (_, i) => i + 1);
    } else if (pagiCurentPage <= 4) {
        pages = [1, 2, 3, 4, 5, "...", paginationTotal];
    } else if (pagiCurentPage >= paginationTotal - 3) {
        const start = paginationTotal - 4;
        pages = [1, "...", start, start + 1, start + 2, start + 3, start + 4];
    } else {
        pages = [1, "...", pagiCurentPage - 1, pagiCurentPage, pagiCurentPage + 1, "...", paginationTotal];
    }

    pages.forEach(p => {
        const btn = document.createElement("span");
        btn.classList.add("page");
        btn.textContent = p;

        if (p === pagiCurentPage) btn.classList.add("active");

        if (p !== "...") {
            btn.addEventListener("click", () => {
                pagiCurentPage = p;
                loadPage(pagiCurentPage);
            });
        }

        pagination.appendChild(btn);
    });
}


loadPage(pagiCurentPage);

