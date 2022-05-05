//Get The last save date of the document
let thisYear = new Date().getFullYear();
document.getElementById("year").innerHTML = thisYear;

let savedate = new Date(document.lastModified);
let month = savedate.toLocaleString("en-US", {month: "long"});
let date = savedate.getDate();
let year = savedate.getFullYear();
let day = savedate.getDay();

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let weekday = weekdays[savedate.getDay()];
let lastChanged = weekday+", "+date+" "+month+" "+year; 

document.getElementById("updated").innerHTML = "Last Updated: "+ lastChanged;

//Toggle the menu display on smaller screens
function toggleMenu() {
    document.getElementsByClassName("menu")[0].classList.toggle("responsive");
}

//Display the Event announcement if the Day is Friday
let currentDate = new Date();
let today = weekdays[currentDate.getDay()];

let fivedays = []

const shortNames = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]
for (i = 0; i < 5; i++) {
    fivedays.push(shortNames[(currentDate.getDay() + i) % 7]);
}


const conditions = [ 
    {
        img: "images/cloudy.svg",
        tag: "cloudy",
        temp: "62&#730;F"
    },
    {
        img: "images/rain.svg",
        tag: "rain",
        temp: "52&#730;F"
    },
    {
        img: "images/snow.svg",
        tag: "snow",
        temp: "28&#730;F"
    },
    {
        img: "images/sunny.svg",
        tag: "sunny",
        temp: "75&#730;F"
    },
    {
        img: "images/thunder.svg",
        tag: "thunder",
        temp: "46&#730;F"
    },
    {
        img: "images/wind.svg",
        tag: "windy",
        temp: "42&#730;F"
    }
]

var theForcast = document.getElementById("forcast");
var theDays = theForcast.children;
for (i = 0; i < theDays.length; i++) {
    var details = theDays[i].children;
    details[0].innerHTML = fivedays[i];
    var weather = conditions[Math.floor(Math.random() * conditions.length)];
    details[1].src = weather.img
    details[1].alt = weather.tag
    details[2].innerHTML = weather.temp

}

if (today == "Friday") {
    document.getElementById("announcement").style.display = "block";
}


//Assign a random forcast to each of the five days


