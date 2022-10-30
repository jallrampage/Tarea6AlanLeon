function myfuncion(){
    let a = document.getElementById("numero_control").value;
    const ercontrol= /^(m|c)?[0-9]{2}(120|121)[0-9]{3}$/;
    var Boolean=false;
    if (ercontrol.test(a)) {
        text="Numero de Control valido";
        Boolean=true;
      }
    else {
      Boolean=false;
        text="Numero de Control no Valido";
    }
    document.getElementById("ncontrol").innerHTML = text;

    let b= document.getElementById("RFC").value ;
    let rfc=b.slice(4,10);
    const errfc=/^[A-Z]{4}[0-9]{2}(0[0-9]|1[0-2])[0-9]{2}[A-Z0-9]{3}$/;

    if (errfc.test(b)) {
        text="RFC valido";
        Boolean=true;
        
      }
    else {
      Boolean =false;
        text="RFC no Valido";
    }
    document.getElementById("validarfc").innerHTML = text;

    let c = document.getElementById("telefono").value;
    const ertel=/^443[0-9]{7}$/;

    if (ertel.test(c)) {
      text="Telefono valido";
      Boolean=true;
      
    }
    else {
      Boolean=false;
      text="Telefono no Valido";
  }
  document.getElementById("validartel").innerHTML = text;

  let d = document.getElementById("Correo").value;
  let z = document.getElementById("numero_control").value;;
  let ercorreo=new RegExp("l"+z+"@morelia.tecnm.mx",'g');

  if (ercorreo.test(d)) {
    text="Correo valido";
    Boolean = true;
    
  }
  else {
    Boolean=false;
    text="Correo no Coincide con numero de control";
}
document.getElementById("validarcorreo").innerHTML = text;

var nom = document.getElementById("nombre").value;
if(Boolean==true){
  text="Usuario Verificado: "+nom+" nacido el "+rfc

}
else{
  text="Completa los pasos necesarios"
}
document.getElementById("validarusuario").innerHTML = text;
    
}