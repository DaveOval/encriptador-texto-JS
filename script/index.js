var mensaje = document.getElementById('text-input').value;

function encriptar(){
  mensaje
  .replaceAll('e', 'enter')
  .replaceAll('i', 'imes')
  .replaceAll('a', 'ai')
  .replaceAll('o', 'ober')
  .replaceAll('u', 'ufat');
  console.log(mensaje);
}