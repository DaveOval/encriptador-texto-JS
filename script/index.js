var inputMensaje = document.getElementById('text-input');
var inputResultado = document.getElementById('')
var salida = document.getElementById('text-out');


function encriptar(){
  if(inputMensaje.value == ""){
    alert('Escribe un mensaje para ser encriptado por favor.');
    return
  }else{
  var mensaje = inputMensaje.value;
  var mensajeEncriptado = mensaje
  .replaceAll("e", "enter")
  .replaceAll("i", "imes")
  .replaceAll("o", "ober")
  .replaceAll("a", "ai")
  .replaceAll("u", "ufat");
  document.getElementById('text-out').innerHTML = mensajeEncriptado;
  document.getElementById('text-header').style.display = "none";
  document.getElementById('muneco').style.display = "none";
  }
}

function desencriptar(){
  if(inputMensaje.value == ""){
    alert('Escribe un mensaje para ser desencriptado por favor.');
    return
  }else{
  var mensajeEncriptado = inputMensaje.value;
  var mensaje = mensajeEncriptado
  .replaceAll("ai", "a")
  .replaceAll("enter", "e")
  .replaceAll("imes", "i")
  .replaceAll("ober", "o")
  .replaceAll("ufat", "u")
  console.log(mensaje);
  }
}

function copiar(){
  var mensajeEncriptado = inputResultado.value;
  navigator.clipboard.writeText(mensajeEncriptado);
}