    var encrypted = "";
    var text = document.getElementById('text-input').value;
    var letras = "abcdefghijklmnñopqrstuvwxyz";
    var desplazamiento = 1;

function encriptar(text, desplazamiento) {
    var encrypted = "";
  for (var i = 0; i < text.length; i++) {
    var letter = text[i];
    // Si es una letra, se encripta
    if (letter.match(/[a-z]/i)) {
      var code = text.charCodeAt(i);
      // Se convierte a mayúsculas
      if ((code >= 65) && (code <= 90)) {
        letter = String.fromCharCode(((code - 65 + desplazamiento) % 26) + 65);
      }
      // Se convierte a minúsculas
      else if ((code >= 97) && (code <= 122)) {
        letter = String.fromCharCode(((code - 97 + desplazamiento) % 26) + 97);
      }
      console.log(encrypted)
    }
    encrypted += letter;
  }
  return encrypted;
    
    
}
