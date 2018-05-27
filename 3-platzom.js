/*
  *******************************  Reglas  *******************************

  1 - Si la palabra termina con 'ar' se le quitan esas dos letras
  2 - Si la palabra inicia con Z se le añade "pe" al final
  3 - Si la palabra traducida tiene 10 o mas letras, se debe de partir en dos por la mitad
      y unir con un guion medio
  4 - Si la palabra es un palindromo, ninguna de las reglas anteriores cuentan y se devuelve la misma
      palabra intercalando mayusculas y minusculas (sometemos = SoMeTeMoS)
*/

function platzom (str) {
  let translation = str;


  //*************************************** Regla 4 ***************************************
  const reverse = (str) => str.split('').reverse().join('');
    //.split nos permite dividir un String, parecido a un arreglo ejemplo "Dr.Pepper.split('') el resultado en consola: ["D", "r", ".", "P", "e", "p", "p", "e", "r"]"
    //.reverse nos permite invertir el orden la un arreglo
    //.join nos permite volver un arreglo en String

  function minMay (str) {
    const length = str.length; //Obtener longitud del String
    let translation = '';
    let capitalize = true;

    for (let i = 0; i < length; i++) {
      const char = str.charAt(i); //.charAt guardar un caracter con las posiciones
      translation += capitalize ? char.toUpperCase() : char.toLowerCase();//.toUpperCase volver caracteres en mayusculas
      capitalize = !capitalize; //Regresar capitalize a true
    }

    return translation;
  }

  if (str == reverse(str))  return minMay(str);

  //*************************************** Regla 1 ***************************************
  if (str.toLowerCase().endsWith ('ar'))  translation = str.slice(0, -2);
    //.toLowerCase convertir el String en minuscula y .endsWith es comparar si termina con unas letras especificas
    //.slice nos permite eliminar caracteres

  //*************************************** Regla 2 ***************************************
  if (str.toLowerCase().startsWith('z')) translation += 'pe';
    //.starsWith comparar si empieza con uno o varios caracteres

  //*************************************** Regla 3 ***************************************
  const length = translation.length;
  if (length >= 10) {
    const firstHalf = translation.slice (0, Math.round(length / 2)); //Partir la mitad y obtener del inicio al final
    const secondHalf = translation.slice (Math.round(length / 2));//Obtener de la mitad al final del valor
    translation = `${firstHalf}-${secondHalf}`; //Unir las dos mitades con el guion en medio
  }

  return translation;
}

alert (platzom ('programar'));
alert (platzom ('zorro'));
alert (platzom ('Zarpar'));
alert (platzom ('abcedarios'));
alert (platzom ('sometemos'));
