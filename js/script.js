class Carta {
  constructor(n, p) {
    this.numero = n;
    this.pinta = p;
    this.audio = "audio/1 oro.mp3";
  }
}

var pool = [];
pool.push(new Carta(1, "Oro", "audio/1 oro.mp3"));
pool.push(new Carta(2, "Oro"));
pool.push(new Carta(3, "Oro"));
pool.push(new Carta(4, "Oro"));
pool.push(new Carta(5, "Oro"));
pool.push(new Carta(6, "Oro"));
pool.push(new Carta(7, "Oro"));
pool.push(new Carta(10, "Oro"));
pool.push(new Carta(11, "Oro"));
pool.push(new Carta(12, "Oro"));
pool.push(new Carta(1, "Basto"));
pool.push(new Carta(2, "Basto"));
pool.push(new Carta(3, "Basto"));
pool.push(new Carta(4, "Basto"));
pool.push(new Carta(5, "Basto"));
pool.push(new Carta(6, "Basto"));
pool.push(new Carta(7, "Basto"));
pool.push(new Carta(10, "Basto"));
pool.push(new Carta(11, "Basto"));
pool.push(new Carta(12, "Basto"));
pool.push(new Carta(1, "Espada"));
pool.push(new Carta(2, "Espada"));
pool.push(new Carta(3, "Espada"));
pool.push(new Carta(4, "Espada"));
pool.push(new Carta(5, "Espada"));
pool.push(new Carta(6, "Espada"));
pool.push(new Carta(7, "Espada"));
pool.push(new Carta(10, "Espada"));
pool.push(new Carta(11, "Espada"));
pool.push(new Carta(12, "Espada"));
pool.push(new Carta(1, "Copa"));
pool.push(new Carta(2, "Copa"));
pool.push(new Carta(3, "Copa"));
pool.push(new Carta(4, "Copa"));
pool.push(new Carta(5, "Copa"));
pool.push(new Carta(6, "Copa"));
pool.push(new Carta(7, "Copa"));
pool.push(new Carta(10, "Copa"));
pool.push(new Carta(11, "Copa"));
pool.push(new Carta(12, "Copa"));

var boton = document.getElementById("seleccionar");
boton.addEventListener("click", seleccionarCarta);

var resultado = document.getElementById("muestra");
var carta, res;


function seleccionarCarta(){
  carta = aleatorio();
  eleccion = pool[carta];
  aparecio = pool[carta].aparecio = true;
  resultado.innerHTML = resultado.innerHTML +  eleccion.numero + " de " + eleccion.pinta + "<br>";
  var resto = pool.splice(carta, 1);
  console.log(carta);
  console.log(eleccion);
  console.log(pool.length);
}

function aleatorio(){
  var min = 0;
  var max = pool.length;
  carta = Math.floor(Math.random() * max);
  return carta;
}
