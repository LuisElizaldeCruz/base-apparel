console.log("script funcionando");

 /*Creacion del mensaje a mostrar en un correo equivocado*/ 
 const p = document.createElement("p");
 p.id = "advertencia";
 

 /*Posicon en donde se mostrara el mensaje*/
const frm = document.querySelector(".formulario");


document.getElementById("btn").addEventListener("click", ()=>{
 console.log("se presiono el boton");
 let correo = document.getElementById("entrada").value;
 


 if(correo == "luis@gmail.com"){
     console.log("El correo es correcto");
     p.textContent=" ";
 }
 else{
     console.log("El correo es incorrecto");
     p.textContent="inserta un correo valido!";
 }
frm.insertAdjacentElement("afterend",p);

})

/*
let validacion = (correo)=>{
    if(correo != null){

    }
}

*/