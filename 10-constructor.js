/*
  ******************************* Object.create *******************************
  Descripción:
  En Javascript tenemos varias formas para crear objetos, ahora vamos a crear un nuevo constructor del
  objeto punto.
*/

//******************************* Objetos *******************************

const Punto = {
  init: function  init (x, y) { //Atributo init es para inicializar como constructor
    this.x = x;
    this.y = y;
  },
  moverEnX: function moverEnX(x) {
    this.x += x;
  },
  moverEnY: function moverEnY(y) {
    this.y += y;
  },
  distancia: function distancia(p) {
    const x = this.x - p.x;
    const y = this.y - p.y;

    return Math.sqrt (x * x + y * y);
  }

}

const p1 = Object.create (Punto);//crear objeto y inicializar el tipo del cual queremos crear (const Punto)
const p2 = Object.create (Punto);
p1.init(0, 4);//Luego lo inicializamos (init)
p2.init(3, 0);

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
