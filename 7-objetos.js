/*
  ******************************* Calcular la distancia entre dos puntos *******************************
  Descripción:
  Vamos a calcular la distancia entre dos puntos, para esto debemos aplicar la operación matemática
  para hacer esto.
  podemos definir los puntos como objetos, para esto escribimos como
    const p1 = {x: 0, y: 4};   const p2 = {x: 3, y: 4};
  Luego podemos crear una function que reciba dos objetos, calcule la distancia y retorne la diferencia.
*/

//******************************* Objetos *******************************
const p1 = {x: 0, y: 4};
const p2 = {x: 3, y: 0};

// ******************************* function *******************************
function distancia (p1, p2) {
  const x = p1.x - p2.x; //Acceder a los atributos del valor de x de los objetos p1 y p2
  const y = p1.y - p2.y; //Acceder a los atributos del valor de y de los objetos p1 y p2

  return Math.sqrt((x * x) + (y * y)); //.sqrt es sacar √
}

console.log (distancia(p1, p2)); //Imprimir la distancia entre los dos puntos
console.log (distancia({x: 3, y: 5}, {x: 9, y: 7})); //También puedes enviar otros valores al atributo
