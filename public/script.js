// Countdown Timer
const countdownDate = new Date("April 26, 2025 00:00:00").getTime();
const countdownTimer = setInterval(function() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("days").innerHTML = days + "d";
    document.getElementById("hours").innerHTML = hours + "h";
    document.getElementById("minutes").innerHTML = minutes + "m";

    if (distance < 0) {
        clearInterval(countdownTimer);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);

// Button Click Events
document.getElementById("yes").onclick = function() {
    let formHTML = `
        <form id="weddingForm">
            <label>Name: <input type="text" name="name" required></label><br>
            <label>Starter: 
                <select name="starter">
                    <option value="Option1">Option 1</option>
                    <option value="Option2">Option 2</option>
                </select>
            </label><br>
            <label>Main: 
                <select name="main">
                    <option value="Option1">Option 1</option>
                    <option value="Option2">Option 2</option>
                </select>
            </label><br>
            <label>Dessert: 
                <select name="dessert">
                    <option value="Option1">Option 1</option>
                    <option value="Option2">Option 2</option>
                    <option value="Option3">Option 3</option>
                    <option value="Option4">Option 4</option>
                </select>
            </label><br>
            <label>Song Recommendation: <input type="text" name="song" required></label><br>
            <button type="submit">Submit</button>
        </form>
    `;
    document.body.innerHTML += formHTML;
};

document.getElementById("no").onclick = function() {
    const name = prompt("Please enter your name:");
    if (name) {
        alert("Thank you, " + name + "!");
        window.location.reload(); // Reset to image 1
    }
};
