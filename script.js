document.addEventListener("DOMContentLoaded", () => {
    // Countdown Timer
    const countdown = document.getElementById("countdown");
    const daysSpan = document.getElementById("days");
    const hoursSpan = document.getElementById("hours");
    const minutesSpan = document.getElementById("minutes");
    const secondsSpan = document.getElementById("seconds");

    const launchDate = new Date("2024-12-31T00:00:00").getTime();

    const updateCountdown = setInterval(() => {
        const now = new Date().getTime();
        const distance = launchDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        daysSpan.innerHTML = days;
        hoursSpan.innerHTML = hours;
        minutesSpan.innerHTML = minutes;
        secondsSpan.innerHTML = seconds;

        if (distance < 0) {
            clearInterval(updateCountdown);
            countdown.innerHTML = "EXPIRED";
        }
    }, 1000);

    // Modal Handling
    const subscribeBtn = document.getElementById("subscribeBtn");
    const contactBtn = document.getElementById("contactBtn");
    const homeBtn = document.getElementById("homeBtn");
    const subscribeModal = document.getElementById("subscribeModal");
    const contactModal = document.getElementById("contactModal");
    const closeButtons = document.querySelectorAll(".close");

    subscribeBtn.onclick = () => subscribeModal.style.display = "block";
    contactBtn.onclick = () => contactModal.style.display = "block";
    homeBtn.onclick = () => location.href = "#";

    closeButtons.forEach(button => {
        button.onclick = () => {
            button.closest(".modal").style.display = "none";
        };
    });

    window.onclick = (event) => {
        if (event.target == subscribeModal) subscribeModal.style.display = "none";
        if (event.target == contactModal) contactModal.style.display = "none";
    };

    // Form Interactivity
    const A8 = document.getElementById("A8");
    const A9 = document.getElementById("A9");
    const A11 = document.getElementById("A11");
    const A12A13 = document.getElementById("A12-A13");

    A8.addEventListener('change', () => {
        A9.style.display = A8.checked ? 'block' : 'none';
    });

    A11.addEventListener('change', () => {
        A12A13.style.display = A11.value === "ΓΥΝΑΙΚΑ" ? 'block' : 'none';
    });
});
