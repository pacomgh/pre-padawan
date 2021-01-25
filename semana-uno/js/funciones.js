function showForm() {
    var x = document.getElementById("form-activity");
    if (x.style.display === "none") {
        x.style.display = "flex";
    } else {
        x.style.display = "none";
    }
}

/*function cambiarModo() {
    var body = document.body;
    var header = document.getElementsByTagName("span");
    body.classList.toggle("body-oscuro");
    header.classList.toggle("span-oscuro");
}*/
/*Funcion para cambiar a modo oscuro*/
function switchModeSheet() {
    //obtenemos el id theme que esta en el link del css
    let theme = document.getElementById("theme");
    //si tenemos el css normal lo cambiamos al dark
    if (theme.getAttribute("href") == "css/styles.css") {
        theme.href = "css/dark-styles.css";
    } else {
        //si tenemos el dark cambiamos al normal
        theme.href = "css/styles.css";
    }
}

//funcion para leer la barra espaciadora
document.addEventListener("keydown", function(event) {
    var x = event.keyCode;
    if (x == 32) {
        // url en prod window.open("https://kata2.glitch.me/form.html");
        //url en local     
        //window.open('C:/Users/panch/Documents/hackademy/pre-padawan/semana-uno/index.html')
        window.open("/index.html");
    }
});