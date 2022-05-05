let temp = parseInt(document.querySelector("#temp").textContent);
console.log(temp);
let windspeed = parseInt(document.querySelector("#wind").textContent);

if (temp < 51 && windspeed > 2.9) {
    var speed = windspeed**0.16;
    var windchill = 35.74 + 0.6215 * temp - 35.75 * speed + 0.4275 * temp * speed;
    console.log(windchill);

    document.querySelector("#chill").innerHTML = Math.round(windchill) + "&#730;F";
} else {
    document.querySelector("#chill").innerHTML = "N/A";
}