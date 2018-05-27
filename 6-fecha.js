/*
  Calcular la fecha de nacimiento
*/

const print = (date) => console.log(date); //imprimir el dato

const nacimiento = new Date(1997, 7, 15); //Crear un objeto de tipo Date (año,  mes -1, dia)
const hoy = new Date();//Si no pasas parametros, por defecto es hoy
const tiempo = hoy - nacimiento;//Cuanto tiempo ha pasado desde que naciste en mili-segundos
const tiempoSegundos = tiempo / 1000; //calcular el tiempo en segundos
const tiempoMin = tiempoSegundos / 60; //minutos
const tiempoHr = tiempoMin / 60; //horas
const tiempoDia = tiempoHr / 24; //dias
const proximoCumple = new Date(hoy.getFullYear(), nacimiento.getMonth(), nacimiento.getDate());
//.getFullYear el metodo nos da el año actual
//.getMonth nos da el mes con respecto a la constante nacimiento
//.getDate nos da el dia con respecto a la constante nacimiento

print (nacimiento);
print (hoy);
print (tiempo);
print (tiempoSegundos);           // <-- Imprimir cada una de las constantes
print (tiempoMin);
print (tiempoHr);
print (tiempoDia);
print (proximoCumple);
