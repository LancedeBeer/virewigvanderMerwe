// Countdown Timer
const countdownDate = new Date("April 26, 2025 00:00:00").getTime();
const countdownTimer = setInterval(function() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;

    if (distance < 0) {
        clearInterval(countdownTimer);
        document.getElementById("days").innerText = "00";
        document.getElementById("hours").innerText = "00";
        document.getElementById("minutes").innerText = "00";
    }
}, 1000);

// RSVP Button Functionality
document.getElementById("rsvp-no").addEventListener("click", function() {
    document.getElementById("image-1").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("rsvp-yes").addEventListener("click", function() {
    document.getElementById("rsvp-form").style.display = "flex";
});

// Modal Close
const modal = document.getElementById("rsvp-form");
const span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
