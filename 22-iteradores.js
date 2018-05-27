/*
  ******************************* Iteradores *******************************
  Descripción:
  Nos permiten hacer listas infinitas de elementos haciendolos distintos a los arreglos (arrays)
  los cuales tienen un numero finito de elementos definidos.
  Para los iteradores podemos obtener lo siguiente:
    next() - iterar los datos
    value - devuelve el valor del datos
    done - indicador de cuando la listase haya terminado
*/

// ******************************* ejemplo 1 *******************************

function fibonacci() {
  let a = 0, b =1;

  return { //retornora un objeto
    next: function () { //metodo next, que es una function
      let f = a;
      a = b;      // <-- fibonacci
      b = f + a;
      return {value: f, done: false} //que nos devolvera un objeto con un valor y un done
    }
  }
}

const fibo = fibonacci();

fibo.next().value //.next Asignaciones de los valores y .value nos devolvera el valor

// ******************************* ejemplo 2 *******************************

function fibonacci() {
  let a = 0, b =1;

  return { //retornora un objeto
    next: function () { //metodo next, que es una function
      let f = a;
      a = b;      // <-- fibonacci
      b = f + a;
      return {value: f, done: false} //que nos devolvera un objeto con un valor y un done
    }
  }
}

const fibo = {}

fibo[Symbol.iterator] = fibonacci; //indica un metodo, le asignamos el valor de fibonacci

let i = 0;

for (let value of fibo) { //el ciclo llama al next del next del objeto fibo
  console.log(value);
  i++;
  if (i > 20) break; //Cuando pida los primeros 20 numeros rompe el ciclo
}
