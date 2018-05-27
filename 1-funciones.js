
/*
function triangleArea(base, height)
{
  return base * height / 2;
}

console.log (`El area de un triangulo de base 5 y altura 7 es: ${triangleArea(base, height)}`);
*/

let base = 5, height = 7, radio = 5; //Variables

const triangleArea =  (base, height) => base * height / 2; //Funciona igual que una function
const area = (radio) => Math.pow (radio, 2);

console.log (`El area de un triangulo de base 5 y altura 7 es: ${triangleArea(base, height)}`);
console.log (`El area de un circulo con un radio de ${radio} es de: ${area(radio)}`);
