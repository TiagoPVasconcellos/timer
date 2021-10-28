(function timer() {
    const countSeconds = () => {
        const date = new Date(seconds * 1000);
        return date.toLocaleTimeString("pt-BR", {
            timeZone: "UTC",
        });
    };
    const clock = document.querySelector(".clock");
    let seconds = 0;
    let counter;

    const turnClockOn = () => {
        counter = setInterval(() => {
            seconds++;
            clock.innerHTML = countSeconds(seconds);
        }, 1000);
    };
    document.addEventListener("click", e => {
        const element = e.target;
        if (element.classList.contains("restart")) {
            clearInterval(counter);
            clock.innerHTML = "00:00:00";
            clock.classList.remove("stoped");
            seconds = 0;
        };
        if (element.classList.contains("start")) {
            clock.classList.remove("stoped");
            clearInterval(counter);
            turnClockOn();
        };
        if (element.classList.contains("pause")) {
            clearInterval(counter);
            clock.classList.add("stoped");
        };
    });
})();