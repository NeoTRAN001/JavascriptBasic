/*
  ******************************* Clase punto *******************************
  Descripción:
  Cuando tenemos varios objetos que compartan la misma estructura podemos crear un prototipo del cual
  podemos crear los objetos que queramos.
  Para nuestro ejercicio de los puntos podemos crear esta estructura como

    functionPunto (x, y) {this.x = x; this.y = y;} const p1 = new Punto (0, 4);

  Con el Keyword new creamos un nuevo objetos
  Los objetos se vinvulan con otros objetos a traves de prototype, en el navegador lo puedes ver como
  __proto__ y mostrara el proto con el que fue creado
*/

//******************************* functions *******************************

function Punto (x, y) {
  this.x = x; //This hace referencia al objeto que crea Javascript al hacer el prototipo
  this.y = y;
}

Punto.prototype.moverEnX = function moverEnX (x) { //asignarle un nuevo metodo al prototipo Punto
  this.x += x; //this hace referencia a cada uno de los puntos
}

Punto.prototype.moverEnY = function moverEnY (y) { //asignarle un nuevo metodo al prototipo Punto
  this.y += y; //this hace referencia a cada uno de los puntos
}

Punto.prototype.distancia = function distancia (p) { //agregar la function distancia al metodo p1, ejemplo anterior de objetos avanzados al tener moverEnY y moverEnX
  const x = this.x - p.x;
  const y = this.y - p.y;

  return Math.sqrt (x * x + y * y);
}

//******************************* Objetos *******************************

const p1 = new Punto (0, 4);//crear objeto y asignarle el prototipo que definimos en la function
const p2 = new Punto (3, 0);

//******************************* other *******************************

console.log (p1.distancia(p2)); //Calcular la distancia de p1 con respecto a p2
console.log (p2.distancia(p1));
p1.moverEnX (10);
console.log (p1.distancia(p2));
p2.moverEnY (-4);
console.log (p1.distancia(p2));

//modificar __proto__
p1.__proto__.moverEnX = function() {alert ("HOLA!!");} //Al modificar el prototipo tambien afecta a p2
p2.moverEnX(200); //Al ser modificado imprimira el mensaje hola, pues el metodo fue modificado al cambiar __proto__
