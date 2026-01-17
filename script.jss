let startTime, elapsedTime = 0, timerInterval;

function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);

    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);

    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);

    let diffInMs = (diffInSec - ss) * 100;
    let ms = Math.floor(diffInMs);

    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    let formattedMS = ms.toString().padStart(2, "0");

    return `${formattedMM}:${formattedSS}:${formattedMS}`;
}

function startStop() {
    if (document.getElementById("startPause").innerHTML === "Start") {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(function printTime() {
            elapsedTime = Date.now() - startTime;
            document.getElementById("display").innerHTML = timeToString(elapsedTime);
        }, 10);
        document.getElementById("startPause").innerHTML = "Pause";
    } else {
        clearInterval(timerInterval);
        document.getElementById("startPause").innerHTML = "Start";
    }
}

function reset() {
    clearInterval(timerInterval);
    document.getElementById("display").innerHTML = "00:00:00";
    elapsedTime = 0;
    document.getElementById("startPause").innerHTML = "Start";
    document.getElementById("lapsList").innerHTML = "";
}

function lap() {
    let li = document.createElement("li");
    li.innerText = timeToString(elapsedTime);
    document.getElementById("lapsList").appendChild(li);
}
