const timeH = document.querySelector("h4");
let timesecond = 60;
let countDownTexto = document.getElementById("countdown");

displayTime(timesecond);

function ComienzaElCountdown() {
  const countDown = setInterval(() => {
    timesecond--;
    displayTime(timesecond);
    if (timesecond == 6) {
      playPip();
      countDownTexto.classList.remove("gray");
      countDownTexto.classList.add("red");
    }
    if (timesecond <= 0 || timesecond < 1) {
      endTime();
      clearInterval(countDown);
      stopPip();
    }
  }, 1000);
}

function displayTime(second) {
  const min = Math.floor(second / 60);
  const sec = Math.floor(second % 60);
  timeH.innerHTML = `${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}`;
}

function endTime() {
  reiniciarPosicionBotones();
  myModal.show();
  //countdownFalse.classList.remove("visually-hidden");
  countdownContinuar.classList.remove("visually-hidden");
  countdown.classList.toggle("visually-hidden");
}
