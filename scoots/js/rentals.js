rentalData = "data/rental.json"

const active = document.querySelector(".active").textContent;

const popular = document.createElement("span");
popular.className = "popular";
popular.textContent = "Most Popular";

const bestDeal = document.createElement("span");
bestDeal.className = "bestValue";
bestDeal.textContent = "Best value";


fetch(rentalData)
    .then((response) => response.json())
    .then((jsObject) => {

        rentalStuff = jsObject.rentals;

        rentalStuff.forEach(buildTable);
    });

function buildTable(rental) {

    const card = document.createElement("div");
    card.className = "mediaCard";

    const img = document.createElement("img");
    img.src = "images/"+rental.image;
    img.alt = rental.type;

    const name = document.createElement("h3");
    name.textContent = rental.type;

    const hr = document.createElement("hr");

    const passenger = document.createElement("span");
    passenger.className = "passenger";
    passenger.textContent = "Passengers: " + rental.passengers;

    const details = document.createElement("ul");
    details.className = "comments";

    const description = document.createElement("p");
    description.className = "rentalDescription";
    description.textContent = rental.description;

    const book = document.createElement("a");
    book.id = rental.ID;
    book.className = "reserve";
    book.href = "reservations.html";
    book.textContent = 'Reserve';

    const table = document.createElement("table");
    table.className = "pricing";

    const typeHeadings = document.createElement("tr");
    typeHeadings.className = "typeHeading";
    const reserved = document.createElement("th");
    reserved.colSpan = "2";
    reserved.textContent = "Reservation";
    const walkIn = document.createElement("th");
    walkIn.colSpan = "2";
    walkIn.textContent = "Walk-In";

    typeHeadings.appendChild(reserved);
    typeHeadings.appendChild(walkIn);

    const timeHeadings = document.createElement("tr");
    timeHeadings.className = "timeHeading";
    const half1 = document.createElement("th");
    half1.textContent = "Half Day (3 hrs)";
    const full1 = document.createElement("th");
    full1.textContent = "Full Day";
    const half2 = document.createElement("th");
    half2.textContent = "Half Day (3 hrs)";
    const full2 = document.createElement("th");
    full2.textContent = "FullDay";
    

    timeHeadings.appendChild(half1);
    timeHeadings.appendChild(full1);

    timeHeadings.appendChild(half2);
    timeHeadings.appendChild(full2);

    const prices = document.createElement("tr");
    const reserveHalf = document.createElement("td");
    reserveHalf.textContent = rental.reservationRates.halfDay
    const reserveFull = document.createElement("td");
    reserveFull.textContent = rental.reservationRates.fullDay
    const walkHalf = document.createElement("td");
    walkHalf.textContent = rental.walkInRates.halfDay
    const walkFull = document.createElement("td");
    walkFull.textContent = rental.walkInRates.fullDay

    prices.appendChild(reserveHalf);
    prices.appendChild(reserveFull);
    prices.appendChild(walkHalf);
    prices.appendChild(walkFull);

    table.appendChild(typeHeadings);
    table.appendChild(timeHeadings);
    table.appendChild(prices);

    card.appendChild(img)
    card.appendChild(name)

    
    card.appendChild(passenger);
    card.appendChild(details);
    card.appendChild(table);
    card.appendChild(book);

    
    document.querySelector(".rentals").appendChild(card)

    rental.comments.forEach(
        function(note) {
            const comment = document.createElement("li");
            comment.className = "comment";
            comment.textContent = note;
            
            details.appendChild(comment);
        }
    );

    if (rental.bestValue == "true") {
        details.appendChild(bestDeal);
    };

    if (rental.mostPopular == "true") {
        details.appendChild(popular)
    };
};

function toggleMenu() {
    document.getElementsByClassName("menu")[0].classList.toggle("responsive");
};