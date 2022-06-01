const fillData = "data/fill.json";
const rentals = "data/rental.json";
let states = []

fetch(fillData)
    .then((response) => response.json())
    .then((jsObject) => {
        
        states = jsObject.Data.states;
        fillCountries(jsObject.Data.countries, jsObject.Data.cruiseLines);
        
        
    });

    fetch(rentals)
    .then((response) => response.json())
    .then((jsObject) => {
        
        jsObject.rentals.forEach( function(rental) {
            const option = document.createElement("option");
            option.value = rental.type;
            option.textContent = rental.type;
            document.querySelector("#vehicle").appendChild(option);
        });
    });

function fillCountries(countries, cruiseLines) {

    countries.forEach( function(country) {
        const option = document.createElement("option");
        option.value = country;
        option.textContent = country;
        document.querySelector("#country").appendChild(option);
    });

    cruiseLines.forEach( function(cruise) {
        const option = document.createElement("option");
        option.value = cruise;
        option.textContent = cruise;
        document.querySelector("#cruise").appendChild(option);
    });

};

document.getElementById('country').onchange = function () {
    console.log(country.value);
    if (country.value == "United States") {
        stateList = document.querySelector("#state");
        Placeholder = '<option value="placeholder" selected disabled>State</option>';
        states.forEach( function(state) {
            const option = document.createElement("option");
            option.value = state;
            option.textContent = state;
            stateList.appendChild(option);
        });
    } else {
        while (stateList.fistChild) {
            stateList.removeChild(stateList.lastChild);
        };
        stateList.innerHTML = Placeholder;
    };
};