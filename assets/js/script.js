const ingreso = document.querySelector(".ingreso");
const retorno = document.querySelector(".retorno");
const btnEncriptar = document.querySelector(".encriptar");
const btnDesencriptar = document.querySelector(".desencriptar");
const infoRetorno = document.querySelector(".informacion_retorno");
const btnCopiar = document.querySelector(".copiar");


function encriptar(textoIngresado) {
    let codigo = [["e","enter"],["i","imes"],["a", "ai"],["o","ober"],["u","ufat"]];
    
    textoIngresado = textoIngresado.toLowerCase();

    for (let i = 0; i < codigo.length; i++) {
        if (textoIngresado.includes(codigo[i][0])) {
            textoIngresado = textoIngresado.replaceAll(codigo[i][0],codigo[i][1]);
        }
    }
    return textoIngresado;
}

function desencriptar(textoEncriptado) {
    let codigo = [["e","enter"],["i","imes"],["a", "ai"],["o","ober"],["u","ufat"]];
    
    textoDesencriptado = textoEncriptado.toLowerCase();

    for (let i = 0; i < codigo.length; i++) {
        
        if (textoDesencriptado.includes(codigo[i][1])) {
            textoDesencriptado = textoDesencriptado.replaceAll(codigo[i][1],codigo[i][0]);
        }
    }
    return textoDesencriptado;
}

function botonCopiar() {
    navigator.clipboard.writeText(retorno.value);
    retorno.value = "";
    btnCopiar.value = "Copiado";
    setTimeout(() => {
       btnCopiar.value = "Copiar"; 
    }, 1000);
}

function botonEncriptar() {
    retorno.value = encriptar(ingreso.value);
    ingreso.value = "";
}

function botonDesencriptar() {
    retorno.value = desencriptar(ingreso.value);
    ingreso.value = "";
}

function comprobarRetorno() {
    
    if (retorno.value === "") {
        btnCopiar.style.display = "none";
        infoRetorno.style.display = "block";
    } else {
        retorno.style.height = "100%";
        btnCopiar.style.display = "block";
        infoRetorno.style.display = "none";
    }

    
}


function comprobarAncho() {
    
    if (window.innerWidth > 1024) {
        infoRetorno.style.bottom = "0";
        if (retorno.value === "") {
            retorno.style.backgroundImage = "url(assets/media/muneco.png)";
        } else {
            retorno.style.backgroundImage = "none";
        }
    } else {
        infoRetorno.style.bottom = "30%";
        retorno.style.backgroundImage = "none";
    }
}


setInterval(() => {
    comprobarAncho();
}, 50);

setInterval(() => {
    comprobarRetorno();
}, 500);


ingreso.addEventListener("keyup", function(event) {
    if (event.code === 'Enter') {
        botonEncriptar();
    }
});

btnEncriptar.onclick = botonEncriptar;
btnDesencriptar.onclick = botonDesencriptar;
btnCopiar.onclick = botonCopiar;
