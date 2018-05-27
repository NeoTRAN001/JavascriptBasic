/*
  Goku vs Superman
*/

let vidaGoku = 100, vidaSuperman = 100;
let round = 0;

const MIN_POWER = 5, MAX_POWER = 12; //Maximo y minimo de un ataque

const ambosSigueVivos = () => vidaGoku > 0 && vidaSuperman > 0; //Duvuelve false si uno tine 0 de vida
const calcularGolpe = () => Math.round(Math.random() * (MAX_POWER - MIN_POWER) + MIN_POWER); //Calcular el daño del golpe
const gokuSigueVivo = () => vidaGoku > 0; //Dira el ganador de la pelea


while (ambosSigueVivos()) { //Se repetira hasta que la Condicional sea igual a false
  round++;
  console.log (`Round: ${round}`);

  const golpeGoku = calcularGolpe(); //Obtener un valor de daño aleatorio
  const golpeSuperman = calcularGolpe(); // que sera el que baje la vida del oponente

  if (golpeGoku > golpeSuperman) {
    console.log (`Goku ataca a Superman con un golpe de ${golpeGoku}`);
    vidaSuperman -= golpeGoku; //Restarle a la vida de Superman el daño del golpe
    console.log (`Superman queda con ${vidaSuperman} puntos de vida`);
  } else {
    console.log (`Superman ataca a Goku con un golpe de ${golpeSuperman}`);
    vidaGoku -= golpeSuperman;//Restarle a la vida de Goku el daño del golpe
    console.log (`Goku queda con ${vidaGoku} puntos de vida`);
  }
}

if (gokuSigueVivo()) { //Condicional que mostrara quien gano la batalla, llamando a la function gokuSigueVivo
  console.log (`Goku gano la pelea, su vida es de ${vidaGoku}`);
} else {
  console.log (`Superman gano la pelea, su vida es de ${vidaSuperman}`);
}
