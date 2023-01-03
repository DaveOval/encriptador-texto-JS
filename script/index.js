
function encriptar() {
    var text = document.getElementById('text-input').value;
    var letras = "abcdefghijklmnñopqrstuvwxyz";
    var desplazamiento = 1;

    if (text === '') {
        alert("Introduce un texto")
        return
    } else {
        for (let i = 0; i<text.length; i++){
            if(letras.indexOf(texto[i])!=-1){
                let posicion = ((letras.indexOf(texto[i])+desplazamiento))
                resultado += letras[posicion];
                document.getElementById("text-input").innerHTML = " ";
        document.getElementById("text-header").innerHTML = " ";
        document.getElementById("text-out").innerHTML = resultado;
            }
        }
        
          
    }
    
    
}
