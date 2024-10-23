function updateClock() {
    const now = new Date();
    const currentHours = now.getHours();
    const currentMinutes = now.getMinutes();
    const currentSeconds = now.getSeconds();

    const hourDeg = (currentHours % 12) * 30 + (currentMinutes / 60) * 30;
    const minuteDeg = currentMinutes * 6 + (currentSeconds / 60) * 6;
    const secondDeg = currentSeconds * 6;

    document.getElementById('hour').style.transform = `rotate(${hourDeg}deg)`;
    document.getElementById('minute').style.transform = `rotate(${minuteDeg}deg)`;
    document.getElementById('second').style.transform = `rotate(${secondDeg}deg)`;

    document.getElementById('timeDisplay').textContent = 
        `${currentHours.toString().padStart(2, '0')}:${currentMinutes.toString().padStart(2, '0')}:${currentSeconds.toString().padStart(2, '0')}`;
}

updateClock();
setInterval(updateClock, 1000);
