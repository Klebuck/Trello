/*window.donload = function() {
 
   var sendButton = document.getElementsByName("enviar")[0];
   var thinkInput = document.getElementsByName("texto")[0];
   var timeLine = document.getElementsByName("tarjeta")[0];
   var container = document.getElementById("imagen");

   sendButton.onclick = function() {

       if (thinkInput.value == "") {
           alert("tienes que escribir algo");
       } else {
           var tarjetaDiv = document.createElement("div");
           var nameSpan = document.createElement("span");
           var dateSpan = document.createElement("span");
           var tuitP = document.createElement("p");
           var texta = document.createElement("textarea");
           tarjetaDiv.appendChild(nameSpan);
           tarjetaDiv.appendChild(dateSpan);
           tarjetaDiv.appendChild(tuitP);
           tarjetaDiv.appendChild(texta);
           tarjetaDiv.className = "tarjetastrello"
           texta.className = "tarjetas"
   
           tuitP.textContent = thinkInput.value;
           
            container.insertBefore(tarjetaDiv, container.children[0]);
           }
       
               
       }
    
}