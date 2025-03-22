// Cuando se presiona el boton "enviar"
document.getElementById("enviar").addEventListener("click", function(){

    // capturamos los valores de los inputs y el mensaje
    let nombre   = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let edad = document.getElementById("edad").value;
    let mensaje = document.getElementById("mensaje");

    //reinicio el valor de la salida
    mensaje.innerHTML = "";
   

    // si los inputs estan vacios, mostramos un mensaje
    if(nombre == "" || apellido == "" || edad == ""){
        alert("Por favor, complete todos los campos");
    }
    // caso contrario procedemos a la conversion
    else{
        let texto =  "Bienvenido " + nombre + " " + apellido + " a nuestra página web " + ", sientete a gusto y disfruta de tus " + edad + " años con alegría";
        mensaje.innerHTML=texto;

        //agregamos esta modificación para que actualize la página antes que 
        // se muestre el mensaje alert

        setTimeout(() => {
            alert(texto);	
        }, 10);

        
    }
 
});