
function encriptar() {
    var text = document.getElementById('text-input').value;
    if (text === '') {
        alert("Ingresa un texto")
        return
    } else {
        document.getElementById("text-input").innerHTML = " ";
        document.getElementById("text-header").innerHTML = " ";
        document.getElementById("text-out").innerHTML = text;  
    }
    
    
}
