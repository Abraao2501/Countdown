import Countdown from "./countdown.js";

const tempoParaOAniversario = new Countdown("29 May 2021 00:00:00 GMT-0300");
const tempos = document.querySelectorAll("[data-time]");

function mostrarTempo() {
  tempos.forEach((tempo, index) => {
    tempo.innerHTML = tempoParaOAniversario.total[index];
  });
}
mostrarTempo();
setInterval(mostrarTempo, 1000);
