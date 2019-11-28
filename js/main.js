const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setTime() {

    const nowTime = new Date();
    // Seconds
    const seconds = nowTime.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    // Minutes
    const minutes = nowTime.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minutesDegrees}deg)`;

    // Hours
    const hours = nowTime.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;


    if (secondsDegrees === 90) {
        secondHand.style.transition = "none"
    }
}

setInterval(setTime, 1000)