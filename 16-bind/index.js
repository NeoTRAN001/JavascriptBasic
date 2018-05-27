/*
  ******************************* Bind *******************************
  Descripción:
  El metodo bind devuelve otra function que asigna el this a lo que nosotros le pasamos como
  parametro
*/
class Toggable {
  constructor(el) {
    //Inicializar el estado interno
    this.el = el;
    this.el.innerHTML = 'OFF';//acceder al texto del boton
    this.activated = false; //valor del boton
    this.onClick = this.onClick.bind(this); //Asignar el this al de la propia function y no al que le asgna el evento addEventListener
    this.el.addEventListener('click', this.onClick);//Escuchar el evento click y llamar a la function onClick
  }
  onClick (ev) {
    //Cambiar el estado interno
    this.activated = !this.activated;// cambiar el estado
    this.toggleText();
  }

  toggleText() {
    //Cambiar el texto
    this.el.innerHTML = this.activated ? 'ON' : 'OFF';//Condicional para sobrescribir el boton
  }
}

const button = document.getElementById ('boton'); //Acceder al id del boton, para poder modificar

const miBoton = new Toggable(button); //crear el objeto y mandar el boton
