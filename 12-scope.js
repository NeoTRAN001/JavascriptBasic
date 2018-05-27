/*
  ******************************* scope de las variables *******************************
  Descripción:
  Escope es un conjunto de variables y functions que podemos llamar en una parte del codigo
  si definimos una variable en el scope global (window en el navegador) podemos acceder a ella dentro de
  cualquier lugar del codigo
  si definimos una variable dentro de una function solo lo podemos utilizar  dentro de esa function si lo
  declaramos con var, de lo declaramos con let solo podemos acceder a ella en el bloque de codigo
*/

var nombre = "Sacha"; //Variable global (Se puede acceder a ella desde cualquier parte del codigo)

function saludar10() {
  var nombre; //variable local, solo existe dentro de la function
  if (true) {
    nombre  = "Erick";
  }

  console.log (`Hola ${nombre}`);
}

saludar ("Sacha");
console.log(`La variable nombre tiene el valor ${nombre}`);

function saludarSacha10() {
  const nombre = "Sacha";

  for (let i = 0; i < 10; i++) {
    console.log (`Hola ${nombre}`);
  }
}
