/*
  ******************************* This, _this *******************************
  Descripción:
  This hace referencia a un objeto y su valor depende de donde lo usemos
*/

// ******************************* class *******************************

class Persona {
  constructor (nombre, amigos = []) {
    this.nombre = nombre;
    this.amigos = amigos;
  }

  listarAmigos () { //Forma 1 de manejar el problema de this externo
    const _this = this;//Ya que this.nombre no esta definido, para que podamos acceder al constructor

    this.amigos.forEach (function (amigo) {
      console.log (`Hola, mi nombre es ${_this.nombre} y soy amigo de ${amigo}`);//_this para acceder a las variables del constructor
    });
  }

  listarAmigos2 () { //Forma 2 de manejar el problema de this externo

    this.amigos.forEach (function (amigo) {
      console.log (`Hola, mi nombre es ${this.nombre} y soy amigo de ${amigo}`);//_this para acceder a las variables del constructor
    }.bind (this));//.bind Para hacer referencia al this fuera de la function, externo
  }

  listarAmigos3 () { //Forma 3 de manejar el problema de this externo

    this.amigos.forEach (function (amigo) => {
      console.log (`Hola, mi nombre es ${this.nombre} y soy amigo de ${amigo}`);//_this para acceder a las variables del constructor
    });//Con arrowFuntion se asigna por defecto que el this sera externo
  }
}

// ******************************* Objeto *******************************

const sacha = new Persona ("Sacha", ["Pedro", "Juan", "Pepe"]);
