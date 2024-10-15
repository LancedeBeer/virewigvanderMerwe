// Countdown Timer
const countdownDate = new Date("April 26, 2025 00:00:00").getTime();
const daysElem = document.getElementById("days");
const hoursElem = document.getElementById("hours");
const minutesElem = document.getElementById("minutes");

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = countdownDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

    daysElem.textContent = days;
    hoursElem.textContent = hours;
    minutesElem.textContent = minutes;
}

setInterval(updateCountdown, 1000);

// Yes and No Button functionality
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const yesForm = document.getElementById('yesForm');
const noForm = document.getElementById('noForm');

yesButton.addEventListener('click', () => {
    yesForm.style.display = 'block';
});

noButton.addEventListener('click', () => {
    noForm.style.display = 'block';
});

// No form submit takes user to image 1
document.getElementById('noResponse').addEventListener('submit', function (e) {
    e.preventDefault();
    noForm.style.display = 'none';
    window.scrollTo(0, 0); // Scrolls to the top (Image 1)
});

// Yes form submission
document.getElementById('yesResponse').addEventListener('submit', function (e) {
    e.preventDefault();
    yesForm.style.display = 'none';
    alert('Thank you for your response!');
});
