// Cuando se presiona el boton "calcular"
document.getElementById("calcular").addEventListener("click", function(){

    // capturamos el input de entrada y el mensaje	
    let edad   = document.getElementById("edad").value;
   
    let mensaje = document.getElementById("mensaje");

    //reinicio el valor de la salida
    mensaje.innerHTML = "";
   

    // si los inputs estan vacios, mostramos un mensaje
    if(edad == ""){
        alert("Por favor, complete el campo con su edad actual");
    }
    // caso contrario procedemos a calcular la edad
    else{

        en_5anos = parseInt(edad) + 5;
        en_10anos = parseInt(edad) + 10;
        en_100anos = parseInt(edad) + 100;
        let texto =  "En 5 años tendrás " + en_5anos + " años, en 10 años tendrás " + en_10anos + " años y en 100 años tendrás " + en_100anos + " años.";
        mensaje.innerHTML=texto;

       
    }
 
});