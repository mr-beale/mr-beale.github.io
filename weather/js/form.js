function setSeverity(severity) {
    document.querySelector(".severity").textContent = severity;
};

function submitted() {
    window.location.href="thanks.html";
    return false;
};

function redirect() {
    setTimeout(function(){
        window.location.href="index.html";
    }, 5000);
};