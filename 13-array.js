/*
  ******************************* Array en Javascript *******************************
  Descripción:
  Si queremos hacer una functions que reciba N numeros y devuelva la suma de estos, podemos escribirlo
  como
    function suma (...params) {return params.reduce((acumulativo, actual) => {
      acumulativo + actual
    }, 0)}

  Ahora si queremos ejecutar una operación sobre cada uno de ellos, utilixamos la metodo nmap
    function doble (...params) {return params.map (x=>x*2)}

  Si queremos filtrar cieros valores de un array, tenemos otro metodo para poder hacer esto, con keyword
  const pares = (...numeros) => numeros.filter (x => x % 2 == 0);
*/

function suma (...params) {
  return params.reduce(function (acumulativo, actual)  { //.reduce nos permite ir iterando por todo el array y acumulandi el valor de la variable
      acumulativo += actual;
      return acumulativo;
  }, 0);
}

const doble = (...params) => params.map (x=>x*2); //.nmap se ejecuta la acción por cada uno de los elementos

const pares = (...numeros) => numeros.filter (x => x % 2 == 0); //.filter nos permite devolver los valores que cumplen con la condición

console.log (suma(1,2,3,4));
console.log (doble(1,2,3,4));
console.log (pares(1,2,3,4));
