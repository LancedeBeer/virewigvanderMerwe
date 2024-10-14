// Countdown timer
const countdown = () => {
    const weddingDate = new Date('April 26, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("days").innerHTML = days + " Days";
    document.getElementById("hours").innerHTML = hours + " Hours";
    document.getElementById("minutes").innerHTML = minutes + " Minutes";
};

// Update every minute
setInterval(countdown, 60000);
countdown();
