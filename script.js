// Countdown timer
const countdownDate = new Date("April 26, 2025 00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("countdown").innerHTML = `${days} Days ${hours} Hours ${minutes} Mins`;
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

// Form submition for noRSVP
function submitNoRSVP() {
    const name = document.getElementById("name").value;
  
    fetch("http://localhost:5000/api/rsvp/no", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
        closePopup("noPopup");
    })
    .catch((error) => console.error("Error:", error));
}
  
// Form submit for yesRSVP
function submitYesRSVP() {
    const name = document.getElementById("guestName").value;
    const songRecommendation = document.getElementById("songRecommendation").value;
    const songArtist = document.getElementById("songArtist").value;
  
    fetch("http://localhost:5000/api/rsvp/yes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, songRecommendation, songArtist }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
        closePopup("yesPopup");
    })
    .catch((error) => console.error("Error:", error));
}
  
