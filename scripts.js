document.getElementById('playButton').addEventListener('click', function() {
    const audioPlayer = document.getElementById('audioPlayer');
    if (audioPlayer.paused) {
        audioPlayer.play();
        this.textContent = 'Pause Stream';
    } else {
        audioPlayer.pause();
        this.textContent = 'Play Now';
    }
});

function updateDateTime() {
    const now = new Date();
    const dateTimeString = now.toLocaleString('en-US', {
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: 'numeric', 
        minute: 'numeric', 
        second: 'numeric',
        hour12: true
    });
    document.getElementById('dateTime').textContent = dateTimeString;
}

// Update the date and time every second
setInterval(updateDateTime, 1000);

// Initialize the date and time display on page load
updateDateTime();
