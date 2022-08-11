
// Acá se declara lo que se hará en caso de que la validación sea correcta
function toDoEnc() {
    // Encriptación
    var contenido = document.getElementById("input").value;
    var textoCifrado = contenido.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    // Cambios en el CSS
    document.getElementById("muneco").remove();
    document.getElementById("instruccion").remove();
    document.getElementById("noencontrado").innerHTML = textoCifrado;

    document.getElementById("copiar").style.opacity = "0.8";
    document.getElementById("contenido").style.opacity = "1";
    document.getElementById("input").style.opacity = "0";
    logo();
}

function toDoDes() {
    // Desencriptación
    var contenido = document.getElementById("input").value;
    var textoCifrado = contenido.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    // Cambios en el CSS
    document.getElementById("muneco").remove();
    document.getElementById("instruccion").remove();
    document.getElementById("noencontrado").innerHTML = textoCifrado;

    document.getElementById("copiar").style.opacity = "0.8";
    document.getElementById("contenido").style.opacity = "1";
    document.getElementById("input").style.opacity = "0";
    logo();
}



// Encriptar texto
function encriptar() {


    // Con esta funcion declaro los caracteres aceptados en el input
    var letras = "abcdefghyjklmnñopqrstuvwxyz";

    function tiene_minusculas(texto) {
        for (i = 0; i < texto.length; i++) {
            if (letras.indexOf(texto.charAt(i), 0) != -1) {
                return 1;
            }
        }
        return 0;
    }




    // Validación de los caracteres ingresaados en el input 
    var miPalabra = document.getElementById("input").value;

    for (var index = 0; index < miPalabra.length; index++) {
        var letraActual = miPalabra.charAt(index);

        if (tiene_minusculas(letraActual) == 0) {
            alert("Solo se aceptan letras minusculas y sin acentos");
            break;
        } else {
            toDoEnc();
            
            break;
        }
    }

}
// Desencriptar texto
function desencriptar() {

// Con esta funcion declaro los caracteres aceptados en el input
var letras = "abcdefghyjklmnñopqrstuvwxyz";

function tiene_minusculas(texto) {
    for (i = 0; i < texto.length; i++) {
        if (letras.indexOf(texto.charAt(i), 0) != -1) {
            return 1;
        }
    }
    return 0;
}




// Validación de los caracteres ingresaados en el input 
var miPalabra = document.getElementById("input").value;

for (var index = 0; index < miPalabra.length; index++) {
    var letraActual = miPalabra.charAt(index);

    if (tiene_minusculas(letraActual) == 0) {
        alert("Solo se aceptan letras minusculas y sin acentos");
        break;
    } else {
        toDoDes();
        
        break;
    }
}


}
// Copiar el resultado al portapapeles
function copiar() {

    var codigoACopiar = document.getElementById("noencontrado");
    var seleccion = document.createRange();
    seleccion.selectNodeContents(codigoACopiar);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(seleccion);
    var res = document.execCommand('copy');
    window.getSelection().removeRange(seleccion);
    alert("Texto copiado!");
    logo();
}
// Funcion para que el input parpade hasta que se escriba algo
var cambio = document.getElementById("input");
if (cambio.className == "sinbordefondo parpadea") {
    cambio.addEventListener("keydown", (event) => {
        cambio.className = "sinbordefondo";
    });

}

function logo(){
    var logo = document.getElementById("logo");
    logo.className = "parpadea";
}





