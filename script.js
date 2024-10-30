// Countdown Timer
function countdownTimer() {
    const targetDate = new Date('April 26, 2025 00:00:00').getTime();

    const countdown = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            clearInterval(countdown);
            document.getElementById('countdown').innerHTML = "It's the day!";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

        document.getElementById('days').innerText = days;
        document.getElementById('hours').innerText = hours;
        document.getElementById('minutes').innerText = minutes;
    }, 1000);
}

// Modal Functionality
document.addEventListener('DOMContentLoaded', () => {
    countdownTimer();

    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const noModal = document.getElementById('noModal');
    const yesModal = document.getElementById('yesModal');
    const closeNoModal = document.getElementById('closeNoModal');
    const closeYesModal = document.getElementById('closeYesModal');

    yesBtn.onclick = () => { yesModal.style.display = 'block'; }
    noBtn.onclick = () => { noModal.style.display = 'block'; }

    closeNoModal.onclick = () => { noModal.style.display = 'none'; }
    closeYesModal.onclick = () => { yesModal.style.display = 'none'; }

    window.onclick = (event) => {
        if (event.target == noModal) {
            noModal.style.display = 'none';
        }
        if (event.target == yesModal) {
            yesModal.style.display = 'none';
        }
    }

    //Handle No RSVP Form
    const noForm = document.getElementById('noForm');
    noForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = document.getElementById('noName').value;

        // Send data to backend
        try {
            await fetch('https://your-backend-url.com/api/rsvp/no', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name })
            });
            alert('Thank you!');
            window.location.href = '#image1';
        } catch (error) {
            console.error('Error:', error);
            alert('There was an error submitting your response.');
        }
    });

    // Handle Yes RSVP Form
    const yesForm = document.getElementById('yesForm');
    yesForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = document.getElementById('yesName').value;
        const starter = document.getElementById('starter').value;
        const main = document.getElementById('main').value;
        const dessert = document.getElementById('dessert').value;
        const song = document.getElementById('song').value;

        // Send data to backend
        try {
            await fetch('https://your-backend-url.com/api/rsvp/yes', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, starter, main, dessert, song })
            });
            alert('Thank you for your response!');
            yesModal.style.display = 'none';
        } catch (error) {
            console.error('Error:', error);
            alert('There was an error submitting your response.');
        }
    });
}); 