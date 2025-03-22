// Cuando se presiona el boton "convertir"
document.getElementById("convertir").addEventListener("click", function(){

    // capturamos los valores de los inputs y la salida
    let Fah   = document.getElementById("numero").value;
    let salida = document.getElementById("salida");

    //reinicio el valor de la salida
    salida.innerHTML = "resultado";
   

    // si los inputs estan vacios, mostramos un mensaje
    if(Fah == ""){
        alert("Ingrese un valor");
    }
    // caso contrario procedemos a la conversion
    else{
        let conversion = (Fah - 32) * 5/9;	
        salida.innerHTML = conversion.toFixed(2) + " °C";

        //agregamos esta modificación para que actualize la página antes que 
        // se muestre el mensaje alert

        setTimeout(() => {
            alert("El valor en grados centígrados: " + conversion.toFixed(2) + " °C");
        }, 10);

        
    }
 
});