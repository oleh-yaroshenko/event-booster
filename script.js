// Нижче логіка секції Modal

const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('closeModal');

function openModal(event) {
    document.getElementById('modal-header').src = event.images[0].url;
    document.getElementById('modal-poster').src = event.images[0].url;
    document.getElementById('modal-info').textContent = event.info || 'No description available.';
    document.getElementById('modal-when').innerHTML = `${event.dates.start.localDate}<br>${event.dates.start.localTime || ''} (${event.dates.timezone || ''})`;
    const venue = event._embedded?.venues?.[0] || {};
    document.getElementById('modal-where').innerHTML = `${venue.city?.name || ''}, ${venue.country?.name || ''}<br>${venue.name || ''}`;
    document.getElementById('modal-who').textContent = event._embedded?.attractions?.[0]?.name || 'Unknown';

    document.getElementById('modal-price-standard').textContent = event.priceRanges ? `${event.priceRanges[0].min}-${event.priceRanges[0].max} ${event.priceRanges[0].currency}` : 'Price not available';
    document.getElementById('modal-price-vip').textContent = event.priceRanges && event.priceRanges.length > 1 ? `${event.priceRanges[1].min}-${event.priceRanges[1].max} ${event.priceRanges[1].currency}` : 'VIP not available';

    modal.style.display = 'block';
}

closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Нижче логіка секції Paginaton + Footer

const paginationLimit = 20;
let paginationTotal = 29;
let pagiCurentPage = 1;
let currentSearch = "";

async function loadPage(page, keyword = "") {
    const response = await fetch(
        `https://app.ticketmaster.com/discovery/v2/events.json?apikey=2w8E9usrwRr8erGBxyuy6R0lyvqfaeU4&page=${page - 1}&size=${paginationLimit}&keyword=${encodeURIComponent(keyword)}`
    );
    const data = await response.json();

    const grid = document.querySelector(".grid");
    grid.innerHTML = "";

    const events = data._embedded?.events || [];

    if (events.length === 0) {
        grid.innerHTML = `<p class="grid-no-events">No events found.</p>`;
        paginationTotal = 1;
        renderPagination();
        return;
    }

    events.forEach(event => {
        const gridVenue = event._embedded?.venues?.[0] || { name: "" };
        const eventCard = document.createElement('div');
        eventCard.className = 'grid-card';
        eventCard.innerHTML = `
            <img class="grid-img" src="${event.images[0].url}" alt="${event.name}">
            <h3 class="grid-event-name">${event.name}</h3>
            <p class="grid-event-date">${event.dates.start.localDate}</p>
            <div class="grid-event-venue">
                <img class="grid-event-venue-img" src="./assets/cards-location.png" alt="location">
                <p class="grid-event-venue-p">${gridVenue.name}</p>
            </div>
        `;
        eventCard.addEventListener('click', () => openModal(event));
        grid.appendChild(eventCard);
    });

    paginationTotal = Math.min(data.page.totalPages || 1, 29);
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
        const btn = document.createElement("div");
        btn.classList.add("page");
        btn.textContent = p;

        if (p === pagiCurentPage) btn.classList.add("active");

        if (p !== "...") {
            btn.addEventListener("click", () => {
                pagiCurentPage = p;
                loadPage(pagiCurentPage, currentSearch);
            });
        }

        pagination.appendChild(btn);
    });
}
const searchInput = document.querySelector(".header_input");

searchInput.addEventListener("input", _.debounce((e) => {
    currentSearch = e.target.value.trim();
    pagiCurentPage = 1;
    loadPage(pagiCurentPage, currentSearch);
}, 1000, { leading: true, trailing: true }));

loadPage(pagiCurentPage);