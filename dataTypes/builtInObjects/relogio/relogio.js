const div_relogio = document.getElementById("div_relogio");

function relogio() {
  const data = new Date();
  let hora = data.getHours();
  hora = hora < 10 ? "0" + hora : hora;
  let min = data.getMinutes();
  min = min < 10 ? "0" + min : min;
  let seg = data.getSeconds();
  seg = seg < 10 ? "0" + seg : seg;

  const horaCompleta = hora + ":" + min + ":" + seg;
  div_relogio.innerHTML = horaCompleta;
}

relogio();

const intervalo = setInterval(relogio, 1000);
