var db = firebase.database();


function FechaHoy(){
    var fh = new Date();
    return fh.getFullYear()+"-"+(fh.getMonth()+1)+"-"+fh.getDate()+" "+fh.getHours()+":"+fh.getMinutes();
}



 


function GuardarCorreo(email){
    
    db.ref('correos/').push({
        correo:email,
        date:FechaHoy()
     })

     ImprimirListaCorreos();
}
function ImprimirListaCorreos(){
    let listacorreos = document.querySelector("#listaCorreos");            
    let reference = firebase.database().ref('correos/');    
    listacorreos.innerHTML  = "";
    reference.on('child_added',(snapshot) =>{
        let dataCorreos = snapshot.val();       
        listacorreos.innerHTML  += `<li class="email">${dataCorreos.correo}</li>`        
      });
    
}
document.addEventListener("DOMContentLoaded", function(event) {
    ImprimirListaCorreos();
  });



 
document.querySelector("#EnviarCorreo").addEventListener('click',()=>{
    let email = document.querySelector("#email").value;            
    
    GuardarCorreo(email);
  
})
