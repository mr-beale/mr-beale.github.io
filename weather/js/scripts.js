let thisYear = new Date().getFullYear();
document.getElementById("year").innerHTML = thisYear;


const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let savedate = new Date(document.lastModified);
let month = savedate.toLocaleString("en-US", {month: "long"});
let date = savedate.getDate();
let year = savedate.getFullYear();
let day = savedate.getDay();
let weekday = weekdays[savedate.getDay()];
let lastChanged = weekday+", "+date+" "+month+" "+year; 

document.getElementById("updated").innerHTML = "Last Updated: "+ lastChanged;

function toggleMenu() {
    document.getElementsByClassName("menu")[0].classList.toggle("responsive");
}