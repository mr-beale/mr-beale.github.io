const infoURL = "https://byui-cit230.github.io/weather/data/towndata.json";
const active = document.querySelector(".active").textContent;
console.log(active);


fetch(infoURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        towns = jsObject.towns.filter(function(town) {return town.name == "Preston" || town.name == "Soda Springs" || town.name == "Fish Haven"});
        console.log(towns);

        if (active == "Home") {
            towns.reverse().forEach(townInfo);
        };
    });


    function townInfo(town) {
        const article = document.createElement("article");
        article.className = "town";

        const section = document.createElement("section");
        const h2 = document.createElement("h2");
        h2.textContent = town.name;
        const h3 = document.createElement("h3");
        h3.textContent = town.motto;

        section.appendChild(h2);
        section.appendChild(h3);

        const labels = document.createElement("ul");
        labels.className = "labels";
        const founded = document.createElement("li");
        founded.textContent = "Founded:";
        const population = document.createElement("li");
        population.textContent = "Population:";
        const rainfall = document.createElement("li");
        rainfall.textContent = "Annual Rain Fall:";
    
        labels.appendChild(founded);
        labels.appendChild(population);
        labels.appendChild(rainfall);
    
        const values = document.createElement("ul");
        values.className = "values";
        const foundedValue = document.createElement("li");
        foundedValue.textContent = town.yearFounded;
        const popValue = document.createElement("li");
        popValue.textContent = town.currentPopulation;
        const rainfallValue = document.createElement("li");
        rainfallValue.textContent = town.averageRainfall+'"';

        values.appendChild(foundedValue);
        values.appendChild(popValue);
        values.appendChild(rainfallValue);

        const stats = document.createElement("div");
        stats.className = "stats";

        stats.appendChild(labels);
        stats.appendChild(values);
    
        const img =  document.createElement("img");
        img.src = "images/" + town.photo;
        img.alt = town.name;
    
        article.appendChild(section);
        article.appendChild(stats);
        article.appendChild(img);
    
        document.querySelector('.towns').appendChild(article);
    
    };
