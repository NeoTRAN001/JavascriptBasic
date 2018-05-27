/*
  ******************************* Callbacks *******************************
  Descripción:
  Devuelven un proceso, comunmente despues de un evento de tiempo, al completarse un
  request o al terminar de leer un archivo.
  Son importantes para evitar sobrecargar de procesos activos la consola, lo que generalmente
  se le conoce como cuello de botella
*/

// ******************************* Callback *******************************

setTimeout (function callback() { //setTimeout retorna un numero,el tiempo asignado
  console.log ('El segundo a terminado');
}, 1000); //Recibe una cantidad de tiempo en mili segundos, que es lo que esperara para ejecutar

//******************************* Cuello de botella *******************************

for (let i = 0; i < 999999999999; i++); //sobrecargar la consola para que tarde mas esta ejecución
                                 //haciendo que el tiempo de espera del setTimeout se "invalide"

//******************************* Other *******************************

//Ejemplo de la funcionalidad del callback, observar el orden de ejecución
console.log('Hola');
