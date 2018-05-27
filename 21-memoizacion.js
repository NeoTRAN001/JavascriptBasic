/*
  ******************************* Memoizacion *******************************
  Descripción:
  Misma funcionalidad que la recursividad, mejor rendimiento
*/

let contador = 0;

function fibonacci(num, memoria = {}) {
  contador ++; //Comprobar cuantas veces se llama la function

  if (memoria[num]) return memoria [num]; //Si el objeto memoria tiene un valor, se ejecutara
  if (num == 1) return 0; //La posición 1 es 0 en la secuencia, este es el caso base
  if (num == 2) return 1; //La posición 2 es 1 en la secuencia, este es el caso base

  return memoria [num] = fibonacci(num - 1, memoria) + fibonacci (num - 2, memoria);
  //Llamar a la function, dentro de ella y enviar el valor de la memoria
}

fibonacci (20); //Se llamara a la function 38 veces
