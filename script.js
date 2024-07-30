const Days = document.getElementById("days");
const Hours = document.getElementById("hours");
const Minutes = document.getElementById("minutes");
const Secs = document.getElementById("secs");

function Countown() {
    const CurrentYear = new Date().getFullYear();
    const NewYear = new Date(`January 1 ${CurrentYear + 1} 00:00:00`);
    const CurrentDate = new Date();
    const differ = NewYear - CurrentDate;

    const d = Math.floor(differ / 1000 / 60 / 60 / 24);
    const h = Math.floor((differ / 1000 / 60 / 60) % 24);
    const m = Math.floor((differ / 1000 / 60) % 60);
    const s = Math.floor((differ / 1000) % 60);

    Days.innerHTML = d < 10 ? '0' + d : d;
    Hours.innerHTML = h < 10 ? '0' + h : h;
    Minutes.innerHTML = m < 10 ? '0' + m : m;
    Secs.innerHTML = s < 10 ? '0' + s : s;
}

setInterval(Countown, 1000);
