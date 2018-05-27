/*
******************************* Datos Inmutables *******************************
Descripción:
El operador === nos ayuda a comparar objetos, ejecutando la operación no directamente a los
datos del objeto sino, a la referencia del objeto.
La inmutabilidad tiene por objetivo hacer que los parametros de un objeto sean no modificables
o Inmutables
*/
let sacha = {nombre: 'Sacha', apellido: 'Lifszyc' };
let otroSacha = sacha;

otroSacha === sacha; //Deberia de regresar true
