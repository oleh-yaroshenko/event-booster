// Нижче логіка секції Modal



// Нижче логіка секції Grid + Cards



// Нижче логіка секції Paginaton + Footer
const paginationLimit = 4;
const paginationTotal = 29;
let pagiCurentPage = 1;

async function loadPage(page) {
  const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=2w8E9usrwRr8erGBxyuy6R0lyvqfaeU4&page=${page - 1}&size=${paginationLimit}`);
  const data = await response.json();

  const postsContainer = document.getElementById("pagination-posts");
  postsContainer.innerHTML = "";

  const events = data._embedded?.events || [];
  events.forEach(event => {
    const div = document.createElement("div");
    div.innerHTML = `<h3>${event.name}</h3><p>${event.dates.start.localDate}</p>`;
    postsContainer.appendChild(div);
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

      
