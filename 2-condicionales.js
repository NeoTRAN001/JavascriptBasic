const starWars7 = 'star Wars: El despertar de la fuerza',
      pgStarWars7 = 13,
      nameSasha = 'Sasha',  ageSasha = 26,
      nameSanti = 'Santi',  ageSanti = 12; //Constantes

/*function canWatchStarWars7 (name, age, isWithAdult = false){
  if (age >= pgStarWars7) {
    alert (`${name} puede pasar a ver ${starWars7}`);
  }else if (isWithAdult) {
    alert (`${name} puede pasar a ver ${starWars7}. Aunque su edad es ${age} años y necesita tener ${pgStarWars7}`);
  } else {
    alert (`${name} no puede pasar a ver ${starWars7}. Tiene ${age} años y necesita tener ${pgStarWars7}`);
  }
}*/

const canWatchStarWars7 = (name, age, isWithAdult = false) => {
  if (age >= pgStarWars7) { //Condicional que decidi si puedes ver o no la pelicula
    alert (`${name} puede pasar a ver ${starWars7}`);
  }else if (isWithAdult) {
    alert (`${name} puede pasar a ver ${starWars7}. Aunque su edad es ${age} años y necesita tener ${pgStarWars7}`);
  } else {
    alert (`${name} no puede pasar a ver ${starWars7}. Tiene ${age} años y necesita tener ${pgStarWars7}`);
  }
}

canWatchStarWars7 (nameSasha, ageSasha); //Enviar el valor de las constantes a la function
canWatchStarWars7 (nameSanti, ageSanti, true);
