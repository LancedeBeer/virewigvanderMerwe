// Countdown timer
const countdownDate = new Date("April 26, 2025 00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m`;
}

setInterval(updateCountdown, 60000);
updateCountdown();

// RSVP popups
function noRSVP() {
    document.getElementById("noPopup").style.display = "block";
}

function yesRSVP() {
    document.getElementById("yesPopup").style.display = "block";
}

function closePopup(id) {
    document.getElementById(id).style.display = "none";
    if (id === "noPopup") {
        document.getElementById("image1").scrollIntoView({ behavior: "smooth" });
    }
}

// Optional: add form submission handling for RSVP here
