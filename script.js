console.log("script funcionando");

/*Creacion del mensaje a mostrar en un correo equivocado*/
const p = document.createElement("p");
p.id = "advertencia";

/*Posicon en donde se mostrara el mensaje*/
const frm = document.querySelector(".formulario");

document.getElementById("btn").addEventListener("click", () => {
    console.log("se presiono el boton");
    let correo = document.getElementById("entrada").value;

    validarCorreo(correo);
});

function validarCorreo(email) {
    let expresion =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (expresion.test(email)) {
        p.textContent = " ";
    } else {
        p.textContent = "inserta un correo valido!";
    }
    frm.insertAdjacentElement("afterend", p);
}
