/*
  ******************************* function recursiva *******************************
  Descripción:
  Una function recursiva es aquella que se llama a si misma.
  Este comportamiento es muy importante para solucionar cosas como series y algoritmos que tomen
  en cuenta los valores pasados.
  La recursividad se comopone de dos partes indispensables:
    A) Un caso base
    B) El llamado de la function dentro de la misma function
  Sin un caso base, la functionse se llamara infinitamente
*/

function fibonacci(num) {
  if (num == 1) return 0; //La posición 1 es 0 en la secuencia, este es el caso base
  if (num == 2) return 1; //La posición 2 es 1 en la secuencia, este es el caso base

  return fibonacci(num - 1) + fibonacci (num - 2); //Llamar a la function, dentro de ella
}

fibonacci (1); //Dar el numero de la secuencia fibonacci en la posición 1
fibonacci (20); //Se llamara a la function 6764 veces, lo que genera un problema cuello de botella
