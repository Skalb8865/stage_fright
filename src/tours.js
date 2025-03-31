document.addEventListener("DOMContentLoaded", () => {
    const tourCards = document.querySelector(".tours");
    const toursJson = "/data/tours.json";

    // Modal elements
    // const modal = document.getElementById("tourModal");
    // const modalTitle = document.getElementById("modalTitle");
    // const modalDate = document.getElementById("modalDate");
    // const modalLocation = document.getElementById("modalLocation");
    // const modalPlace = document.getElementById("modalPlace");
    // const modalPrice = document.getElementById("modalPrice");
    // const closeBtn = document.getElementById("closeModal");

    fetch(toursJson)
        .then((response) => response.json())
        .then((data) => {
            data.forEach((tour) => {
                const { date, location, venue, bg_identifier, tour_link } = tour;
                tourCards.innerHTML += `
            <div class="tour-card">
                <img src="${bg_identifier}" alt="">
                <div class="tour_card-overlay"></div>
                <p class="tour-dates">${date}</p>
                <p class="tour-location">${location}</p>
                <p class="tour-venue">${venue}</p>
                <a href="${tour_link}" class="tours-btn">Buy Tickets</a>
            </div>
            `;
            });
        });
});