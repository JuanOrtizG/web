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

        let iva=parseInt(monto)*1.1;
        let texto =  "El monto ingresado es: $"+monto+" y el monto con IVA del 10% es: $"+iva.toFixed(2);   
        mensaje.innerHTML=texto;

       
    }
 
});