/*
  Corre un persona en promedio kms
*/

const nombre = 'Sacha';
const dias = [
  "lunes", "martes", "miercoles", "jueves","viernes", "sabado", "domingo"
];

function correr() {
  const min = 5, max = 15;
  return Math.floor(Math.random() * (max - min)) + min; //Math.floor nos da el valor más bajo posible
   //Math.random darnos un valor aleatorio en un rango específico (0 - 1)
}

let totalKms = 0;
const length = dias.length; //Evitar que el loop for se pregunte en cada vuelta el tamaño del arreglo

for (let i = 0; i < length; i++) { //Recorrer cada indice del arreglo dias
  const kms = correr(); //Guardar el valor aleatorio de la function correr() en una constante
  totalKms += kms;
  console.log (`El día ${dias[i]} ${nombre} corrió ${totalKms} kms`);
}

const promedioKms = totalKms / length; //Sacar el promedio total de la semana
console.log(`En promedio, ${nombre} corrió ${promedioKms}`);
