const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]
const apiKey = "a6ce570f8b96f7a0437a5c9479fe91c7";
const cityID = "3530103";
const currentDate = new Date();
const tomorrow = new Date();
const fivedayapiURL = "https://api.openweathermap.org/data/2.5/forecast?id="+cityID+"&appid="+apiKey+"&units=imperial";
const todayapiURL = "https://api.openweathermap.org/data/2.5/weather?id="+cityID+"&appid="+apiKey+"&units=imperial";

fetch(fivedayapiURL)
  .then((response) => response.json())
  .then((jsObject) => {

    days = jsObject.list.filter(function(day) {return day.dt_txt.includes("12:00:00") });

    days.forEach(forecast);

  });

fetch(todayapiURL)
    .then((response) => response.json())
    .then((jsObject) => {

        const current = jsObject.main.temp;
        const humidity = jsObject.main.humidity;
        const summary = jsObject.weather[0].description;
        const icon = jsObject.weather[0].icon;

        document.querySelector('.icon').src = 'https://openweathermap.org/img/w/' + icon + '.png';
        document.querySelector('.temp').textContent = parseInt(current);
        document.querySelector('.humidity').textContent = humidity;
        document.querySelector('.description').textContent = summary;
    });

function forecast(day) {
  tomorrow.setDate(tomorrow.getDate() + 1)
  
  const date = tomorrow.getDate();
  const month = months[tomorrow.getMonth()];

  const weather = day.weather[0];
  const icon = weather.icon;
  const alt = weather.description;
  const temp = day.main.temp_max;
  const forecast = document.querySelector(".forecast");

  const fiveDays = document.createElement("div");
  fiveDays.className = "five-days";

  const name = document.createElement("h4");
  name.className = "weekday";
  name.textContent = month+" "+date;

  const img = document.createElement("img");
  img.className = "weatherIcon";
  img.src = 'https://openweathermap.org/img/w/' + icon + '.png';
  img.alt = alt;

  const curTemp = document.createElement("h4");
  curTemp.className = "curTemp"
  curTemp.innerHTML = parseInt(temp) + "&#730;F";

  fiveDays.appendChild(name);
  fiveDays.appendChild(img);
  fiveDays.appendChild(curTemp);

  forecast.appendChild(fiveDays);
};