// Cuando se presiona el boton "calcular"
document.getElementById("calcular").addEventListener("click", function(){

    // capturamos el input de entrada y el mensaje	
    let monto   = document.getElementById("monto").value;
   
    let mensaje = document.getElementById("mensaje");

    //reinicio el valor de la salida
    mensaje.innerHTML = "";
   

    // si los inputs estan vacios, mostramos un mensaje
    if(monto == ""){
        alert("Por favor, complete el campo de montos");
    }
    // caso contrario calculamos el IVA
    else{

        let costo=parseInt(monto)/1.1;
        let iva=monto-costo;
        let texto =  "El costo es: $"+costo.toFixed(2)+" y el iva del 10% es: $"+iva.toFixed(2);   
        mensaje.innerHTML=texto;

       
    }
 
});