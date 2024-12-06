// Selecciona el botón con la clase ".button__secondary" y lo asigna a la variable "boton".
const boton = document.querySelector(".button__secondary");

// Imprime el elemento botón en la consola.
console.log(boton);

// Añade un evento al botón para que cuando se haga clic, se ejecute la función "disponibleParaCambiarDatos".
boton.addEventListener("click", disponibleParaCambiarDatos);

// Añade un evento al botón para que cuando se haga clic, se ejecute la función "cambiarValorBoton".
boton.addEventListener("click", cambiarValorBoton);

// Define la función "disponibleParaCambiarDatos".
function disponibleParaCambiarDatos() {
  // Selecciona todos los elementos con la clase ".value" y los asigna a la variable "datosCuenta".
  let datosCuenta = document.querySelectorAll(".value");

  // Convierte la lista de elementos en un array.
  datosCuenta = Array.from(datosCuenta);

  // Imprime el array de elementos en la consola.
  console.log(datosCuenta);

  // Itera sobre cada elemento del array "datosCuenta".
  for (let i in datosCuenta) {
    // Asigna el elemento actual a la variable "dato".
    let dato = datosCuenta[i];

    // Obtiene el contenido de texto del elemento y lo asigna a "valorDato".
    let valorDato = dato.textContent;

    // Crea un nuevo elemento "input".
    let entradaLogin = document.createElement("input");

    // Añade la clase "login__input" al nuevo elemento "input".
    entradaLogin.classList.add("login__input");

    // Establece varios atributos de estilo y otros en el nuevo elemento "input".
    entradaLogin.setAttribute(
      "style",
      "height: 45px;margin-bottom: 20px;padding: 0 12px;border: none;border-radius: 10px;background: var(--text-input-field);color: var(--very-light-pink);font-size: var(--medium);font-weight: 300;outline: none;"
    );

    // Establece diferentes atributos basados en la posición del elemento en el array.
    if (i === "0") {
      entradaLogin.setAttribute("value", valorDato);
      entradaLogin.setAttribute("type", "text");
      entradaLogin.setAttribute("id", "nombre");
      entradaLogin.setAttribute("autocomplete", "name");
    } else if (i === "1") {
      entradaLogin.setAttribute("value", valorDato);
      entradaLogin.setAttribute("type", "email");
      entradaLogin.setAttribute("id", "correo");
      entradaLogin.setAttribute("autocomplete", "email");
    } else if (i === "2") {
      entradaLogin.setAttribute("value", valorDato);
      entradaLogin.setAttribute("type", "password");
      entradaLogin.setAttribute("id", "contrasena");
      entradaLogin.setAttribute("autocomplete", "new-password");
    }

    // Obtiene el nodo padre del elemento "dato".
    let nodoPadre = dato.parentNode;

    // Reemplaza el elemento "dato" con el nuevo elemento "input".
    nodoPadre.replaceChild(entradaLogin, dato);
  }
}

// Define la función "cambiarValorBoton".
function cambiarValorBoton() {
  // Cambia el valor del botón a "Guardar".
  boton.value = "Guardar";

  // Reemplaza la clase "button__secondary" con "login__button".
  boton.classList.replace("button__secondary", "login__button");
}

