let year = new Date().getFullYear();
document.getElementById("year").innerHTML = year;

let savedate = document.lastModified;
document.getElementById("updated").innerHTML = "Last Updated: "+ savedate;

function toggleMenu() {
    document.getElementsByClassName("menu")[0].classList.toggle("responsive");
}