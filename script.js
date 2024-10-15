// Countdown Timer to 26 April 2025
const countdown = () => {
    const targetDate = new Date('April 26, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        document.getElementById('days').innerHTML = '0<br>Days';
        document.getElementById('hours').innerHTML = '0<br>Hours';
        document.getElementById('minutes').innerHTML = '0<br>Minutes';
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById('days').innerHTML = `${days}<br>Days`;
    document.getElementById('hours').innerHTML = `${hours}<br>Hours`;
    document.getElementById('minutes').innerHTML = `${minutes}<br>Minutes`;
};

// Update countdown every minute
setInterval(countdown, 60000);
countdown();

// RSVP Button Functionality
document.getElementById('no').addEventListener('click', () => {
    window.scrollTo(0, 0); // Scroll to the top (Image 1)
});
