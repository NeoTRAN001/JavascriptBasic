/*
  ******************************* Class en Javascript *******************************
  Descripción:
  Una funcionalidad agregada en EcmaScript 2015, es poder escribir el constructor de los objetos con el
  keyword class.
*/

// ******************************* class *******************************

class Punto { //una clase puede verse de la misma manera que un prototipo
  constructor (x, y) {
    this.x = x;
    this.y = y;
  }
  moverEnX(x) {
    this.x += x;
  }
  moverEnY(y) {
    this.y += y;
  }
  distancia(p) {
    const x = this.x - p.x;
    const y = this.y - p.y;

    return Math.sqrt (x * x + y * y);
  }
}

// ******************************* objetos *******************************
const p1 = new Punto (0,4); //Declarar el objeto Punto y asi poder acceder a sus metodos
const p2 = new Punto (0,3);

// ******************************* main *******************************
console.log (p1.distancia(p2)); //Calcular la distancia de p1 con respecto a p2
console.log (p2.distancia(p1));
p1.moverEnX (10);
console.log (p1.distancia(p2));
p2.moverEnY (-4);
console.log (p1.distancia(p2));

//modificar __proto__
p1.__proto__.moverEnX = function() {alert ("HOLA!!");} //Al modificar el prototipo tambien afecta a p2
p2.moverEnX(200); //Al ser modificado imprimira el mensaje hola, pues el metodo fue modificado al cambiar __proto__
