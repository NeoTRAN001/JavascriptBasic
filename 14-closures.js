/*
  ******************************* Closures en Javascript *******************************
  Descripción:
  Los closures son funciones que recuerdan el entorno en el cual fuerón creadas, esto quiere decir
  que cuando llamamos una function recordaran las variables que tenian en el momento, ejemplo:

    function saludarFamilia (apellido) {
      return function saludarMiembroDeFamilia (nombre) {
        console.log (`Hola ${nombre} ${apellido}`);
      }
    }
    let saludarPerez = saludarFamilia ('perez');
*/

// ******************************* Function *******************************

function saludarFamilia (apellido) {
  return function saludarMiembroDeFamilia (nombre) { //La functionque retorna se guardara en una variable
    console.log (`Hola ${nombre} ${apellido}`);      // o constante
  }
}

// ******************************* Closures *******************************
//                 Crear nuevas function con una ya existente

const saludarGomez = saludarFamilia ("Gomez"); //Asigrnar a una constante el valor de la function
const saludarPerez = saludarFamilia ("Perez"); //ese valor es otra function
const saludarRomero = saludarFamilia ("Romero"); //haciendo posible que esa constante, actue como function

// ******************************* Other *******************************

saludarGomez ("Pedro");
saludarGomez ("Juan");
saludarGomez ("Jose");
                          // Llamar a la nueva function (closures) y mandarle valores a la function original
saludarPerez ("Dario");
saludarPerez ("Stephen"); //El nuevo valor enviando se concatena con el valor predefinido en el Closures
saludarPerez ("Alan");

saludarRomero ("Ada");

// ******************************* Ejemplo con arrowFunctions *******************************

const generar = (prefijo) => concatenar = (word) => console.log(`${prefijo}${word}`);
const re = generar('re');
re('malo');
