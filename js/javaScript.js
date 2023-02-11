function desplegar(id, id_2, id_3, id_4) {
  id.addEventListener("click", (e) => {
    id_2.classList.toggle("ocultar");
    id_3.classList.toggle("ocultar");
    id_4.classList.toggle("ocultar");
  });
}

// DESPLEGABLE

const abrir = document.getElementById("abrir");
const cerrar = document.getElementById("cerrar");
const titulo = document.getElementById("titulo");
const presentacion = document.getElementById("presentacion");

desplegar(abrir, presentacion, abrir, cerrar);
desplegar(titulo, presentacion, abrir, cerrar);
desplegar(cerrar, presentacion, abrir, cerrar);

// DESPLEGABLE CONOCIMIENTOS

const abrir2 = document.getElementById("abrir2");
const cerrar2 = document.getElementById("cerrar2");
const titulo2 = document.getElementById("titulo2");
const conocimientos = document.getElementById("conocimientos");

desplegar(abrir2, conocimientos, abrir2, cerrar2);
desplegar(titulo2, conocimientos, abrir2, cerrar2);
desplegar(cerrar2, conocimientos, abrir2, cerrar2);

// DESPLEGABLE "EXPERIENCIA LABORAL"

const abrir3 = document.getElementById("abrir3");
const cerrar3 = document.getElementById("cerrar3");
const titulo3 = document.getElementById("titulo3");
const educacion = document.getElementById("educacion");

desplegar(abrir3, educacion, abrir3, cerrar3);
desplegar(titulo3, educacion, abrir3, cerrar3);
desplegar(cerrar3, educacion, abrir3, cerrar3);
