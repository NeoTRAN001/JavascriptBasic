/*
  ******************************* Objetos avanzados *******************************
                          Agregar métodos para mover puntos
  Descripción:
  Los métodos son funciones dentro de un objeto, en este caso podemos agregar una function al objetos
  Punto, para poder cambiar las coordenadas del puntos.
  Podemos definir el método como:
    const p1 = {x: 0, y: 1, moverEnX: function(x) {this.x = this.x + x}}
*/

//******************************* Objetos *******************************
const p1 = {x: 0, y: 4, moverEnX: function(x) {this.x += x}, moverEnY: function(y) {this.y += y}};
const p2 = {x: 3, y: 0, moverEnX: function(x) {this.x += x}, moverEnY: function(y) {this.y += y}};
//this hace referencia al valor padre

// ******************************* functions *******************************
const print = (number) => { //Imprimir el valor de los atributos
  if (number == 0) {
    console.log (`El valor de x en P1: ${p1.x} \n El valor de Y en P1: ${p1.y}`);
  } else if (number == 1){
    console.log (`El valor de x en P2: ${p2.x} \n El valor de Y en P2: ${p2.y}`);
  } else {
    console.log (`El valor de x en P1: ${p1.x} \n El valor de Y en P1: ${p1.y}`);
    console.log (`El valor de x en P2: ${p2.x} \n El valor de Y en P2: ${p2.y}`);
  }
}

function distancia (p1, p2) {
  const x = p1.x - p2.x; //Acceder a los atributos del valor de x de los objetos p1 y p2
  const y = p1.y - p2.y; //Acceder a los atributos del valor de y de los objetos p1 y p2

  return Math.sqrt((x * x) + (y * y)); //.sqrt es sacar √
}

// ******************************* other *******************************

console.log (distancia(p1, p2)); //Imprimir la distancia entre los dos puntos
console.log (distancia({x: 3, y: 5}, {x: 9, y: 7})); //También puedes enviar otros valores al atributo
print (3);

p1.moverEnX(10); //Cambiar el valor del atributo X en p1
p1.moverEnY(5); //Cambiar el valor del atributo Y en p1
p2.moverEnX(3); //Cambiar el valor del atributo X en p2
p2.moverEnY(17); //Cambiar el valor del atributo Y en p2
print(3);

console.log (distancia(p1, p2));
