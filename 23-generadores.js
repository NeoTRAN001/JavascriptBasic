/*
  ******************************* Generadores *******************************
  Descripción:
    function (asterisco) <-- forma en la que le decimos a javascript que nuestra function es
                             un generador
*/

// ******************************* ejemplo 1 *******************************

function* fibonacci() { ///El asterico es lo que indica que es un Generador
  let a = 0, b =1;

  while (true) {
    let f = a;
    a = b;      // <-- fibonacci
    b = f + a;

    let reset = yield f; //parecido a un return
    if (reset) a = 0, b =1;
  }
}

const fibo = fibonacci();
fibo; //Regresa un objeto

for (let i = 0; i < 20; i++) {
  fibo.next();
}
