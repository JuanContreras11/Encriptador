
function encriptar() {

    var contenido = document.getElementById("input").value;
    var textoCifrado = contenido.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    console.log(contenido);
    console.log(textoCifrado);

    document.getElementById("muneco").remove();
    document.getElementById("instruccion").remove();
    document.getElementById("noencontrado").innerHTML = textoCifrado;

    document.getElementById("copiar").style.opacity = "0.8";
    document.getElementById("contenido").style.opacity = "1";
    document.getElementById("input").style.opacity = "0";

    function esMayuscula(letra)
{
    return letra === letra.toUpperCase();
}
    for(var index = 0; index < contenido.length; index++)
{
    var letraActual = contenido.charAt(index);
    if(esMayuscula(letraActual))
    {
        alert("Solo se aceptan letras minusculas");
    }

          
}
}

function desencriptar() {

    var contenido = document.getElementById("input").value;
    var textoCifrado = contenido.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    console.log(contenido);
    console.log(textoCifrado);

    document.getElementById("muneco").remove();
    document.getElementById("instruccion").remove();
    document.getElementById("noencontrado").innerHTML = textoCifrado;

    document.getElementById("copiar").style.opacity = "0.8";

    function esMayuscula(letra)
{
    return letra === letra.toUpperCase();
}
    for(var index = 0; index < contenido.length; index++)
{
    var letraActual = contenido.charAt(index);
    if(esMayuscula(letraActual))
    {
        alert("Solo se aceptan letras minusculas");
    }
    break;

          
}
}

function copiar() {

    var codigoACopiar = document.getElementById("noencontrado");
    var seleccion = document.createRange();
    seleccion.selectNodeContents(codigoACopiar);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(seleccion);
    var res = document.execCommand('copy');
    window.getSelection().removeRange(seleccion);
    alert("Texto copiado!");

}


var text = document.getElementById("input");
text.addEventListener("keyup",(event) => {
    var inputText = event.path[0].value;
    document.getElementById("contenido").innerHTML = inputText.toUpperCase();
    
});



var cambio = document.getElementById("input");
if(cambio.className == "sinbordefondo parpadea"){
    cambio.addEventListener("keydown",(event) => {
        cambio.className = "sinbordefondo";
    });
    
}
    


var miPalabra = document.getElementById("input").value;
for(var index = 0; index < miPalabra.length; index++)
{
    var letraActual = miPalabra.charAt(index);
    if(esMayuscula(letraActual))
    {
        alert("Solo se aceptan letras minusculas");
    }

          
}