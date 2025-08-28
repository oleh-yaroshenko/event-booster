// Нижче логіка секції Modal



// Нижче логіка секції Grid + Cards
const grid = document.querySelector(".grid");

fetch("https://app.ticketmaster.com/discovery/v2/events.json?apikey=2w8E9usrwRr8erGBxyuy6R0lyvqfaeU4&size=100")
    .then(gridResponse => gridResponse.json())
    .then(gridData => {
        const gridEvents = gridData._embedded.events;
        gridEvents.forEach(gridEvent => {
            const gridVenue = gridEvent._embedded.venues[0];
            grid.innerHTML += `
             <div class="grid-card">
                 <img class="grid-img" src="${gridEvent.images[0].url}" alt="${gridEvent.name}">
                 <h3 class="grid-event-name">${gridEvent.name}</h3>
                 <p class="grid-event-date">${gridEvent.dates.start.localDate}</p>
                 <div class="grid-event-venue">
                  <img class="grid-event-venue-img" src="/event-booster/assets/cards-location.png" alt="location">
                  <p class="grid-event-venue-p">${gridVenue.name}, ${gridVenue.city.name}</p>
                 </div>
             </div>
            `;
        });
    })
    .catch(gridErr => console.error(gridErr));





// Нижче логіка секції Paginaton + Footer

