// Countdown Timer
const countdown = () => {
    const targetDate = new Date('April 26, 2025 00:00:00').getTime();
  
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
  
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  
      document.getElementById('days').innerText = days;
      document.getElementById('hours').innerText = hours;
      document.getElementById('minutes').innerText = minutes;
  
      if (distance < 0) {
        clearInterval(interval);
        document.getElementById('countdown').innerText = "Event Started";
      }
    }, 1000);
  };
  
  countdown();
  
  // RSVP Button Interaction
  document.getElementById('no').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  document.getElementById('yes').addEventListener('click', () => {
    document.getElementById('rsvp-form').style.display = 'block';
  });
  
  // RSVP Form Cancel Button
  document.getElementById('cancel').addEventListener('click', () => {
    document.getElementById('rsvp-form').style.display = 'none';
  });
  