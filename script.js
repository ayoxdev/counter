// Définir la date cible pour le décompte
var countDownDate = new Date("Jully 02, 2024 05:45:00").getTime();

// Mettre à jour le décompte toutes les secondes
var x = setInterval(function () {

    // Obtenir la date et l'heure actuelles
    var now = new Date().getTime();

    // Calculer la différence entre la date actuelle et la date cible
    var distance = countDownDate - now;

    // Calculer les jours, heures, minutes et secondes
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Afficher le résultat dans l'élément avec l'id "countdown"
    document.getElementById("day_countdown").innerHTML = days;
    document.getElementById("heures_countdown").innerHTML = hours;
    document.getElementById("minutes_countdown").innerHTML = minutes;
    document.getElementById("seconds_countdown").innerHTML = seconds;

    // Si le décompte est terminé, afficher un message
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("day_countdown").innerHTML = "00";
        document.getElementById("heures_countdown").innerHTML = "00";
        document.getElementById("minutes_countdown").innerHTML = "00";
        document.getElementById("seconds_countdown").innerHTML = "00";
    }
}, 1000);