/*
  ******************************* Call y Apply *******************************
  Descripción:
  Con call y apply podemos definir el valor de this y ejecutar la function
*/

const sacha = {
  nombre: 'Sacha';
  apellido: 'Lifszyc';
}

function saludar (veces, uppercase) {
  let str = `Hola ${this.nombre} ${this.epellido}`;
  str = uppercase ? str.toUpperCase() : str; //Si es true convertir en mayusculas
  for (let i = 0; i < veces; i++) {
    console.log (str);
  }
}

const params = [3, true];
saludar.call (sacha, ...params); //.call llamar a la function, enviando quien es this y los parametros de la propia function
saludar.apply (3, true); //.apply misma funcionalidad solo que enviamos un array
