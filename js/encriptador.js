document.addEventListener('DOMContentLoaded', function() {
    var figureNoText = document.getElementById('ContNoText');
    if (manejarResolucion() == 3) {
        figureNoText.style.display = ''; // Resetea el estilo inline de display
        figureNoText.classList.remove('display-none-important');
    } else {
        figureNoText.classList.add('display-none-important');
        figureNoText.style.display = "none"; // Esconde el figure si no está en resolución de computadora
    }
});

function encriptarDesencriptar(accion) {
    var texto = document.getElementById('inputTexto').value;
    var contenedorNoText = document.getElementById('contMsjNoText');
    var mostrarText = document.getElementById('mostrarTexto');
    var figureNoText = document.getElementById('ContNoText');


    // Verifica si el campo está vacío
    if (texto.trim() === "") {
        if (manejarResolucion() == 3) {
            figureNoText.style.display = ''; // Resetea el estilo inline de display
            figureNoText.classList.remove('display-none-important');
        } else {
            figureNoText.classList.add('display-none-important');
            figureNoText.style.display = "none"; // Esconde el figure si no está en resolución de computadora
        }
        
        contenedorNoText.style.display = "flex";
        mostrarText.style.display = "none";
        return;  
    }

    // Verifica si el texto contiene solo letras minúsculas sin acentos ni caracteres especiales
    var regex = /^[a-z\s]+$/;
    if (!regex.test(texto)) {
        if (manejarResolucion() == 3) {
            figureNoText.style.display = ''; // Resetea el estilo inline de display
            figureNoText.classList.remove('display-none-important');
        } else {
            figureNoText.classList.add('display-none-important');
            figureNoText.style.display = "none"; // Esconde el figure si no está en resolución de computadora
        }
        
        contenedorNoText.style.display = "flex";
        mostrarText.style.display = "none";
        alert("El texto solo debe contener letras minúsculas sin acentos ni caracteres especiales.");
        return;  
    }

    // Si las validaciones pasan, procede con la encriptación o desencriptación
    var textoProcesado = procesarVocales(texto, accion);

    // Esconde el contenedor de "ningún mensaje fue encontrado"
    contenedorNoText.style.display = "none";

    // Esconde la imagen de ningun mensaje en computadora
    if (manejarResolucion() == 3) {
        figureNoText.classList.add('display-none-important');
    }

    // Muestra el contenedor con el texto procesado
    mostrarText.style.display = "flex";
    
    // Actualiza el contenido con el texto procesado
    mostrarText.innerText = textoProcesado;
}

function procesarVocales(texto, accion) {
    const mapEncriptacion = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat'
    };

    const mapDesencriptacion = {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u'
    };

    if (accion === 'encriptar') {
        return texto.split('').map(letra => {
            return mapEncriptacion[letra] || letra;
        }).join('');
    } else if (accion === 'desencriptar') {
        let textoDesencriptado = texto;
        for (const [clave, valor] of Object.entries(mapDesencriptacion)) {
            textoDesencriptado = textoDesencriptado.split(clave).join(valor);
        }
        return textoDesencriptado;
    }
}

// funciones para los botones
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btnEncriptar').addEventListener('click', function() {
        encriptarDesencriptar('encriptar');
    });

    document.getElementById('btnDesencriptar').addEventListener('click', function() {
        encriptarDesencriptar('desencriptar');
    });
});



function autoResize(textarea) {
    textarea.style.height = 'auto';  // Resetea la altura antes de ajustar
    textarea.style.height = textarea.scrollHeight + 'px';  // Ajusta la altura al contenido
    textarea.style.overflowY = 'hidden'; // Esconde la barra de desplazamiento vertical
}

// Función para obtener y manejar la resolución
function manejarResolucion() {
    const ancho = window.innerWidth;
    const alto = window.innerHeight;
    
  
    // Aquí puedes añadir la lógica que necesitas dependiendo de la resolución
    if (ancho < 768) {
      return 1; /* Retona 1 si detecta resolucion de un celular */
    } else if (ancho >= 768 && ancho < 1024) {
      return 2; /* Retorna 2 si detecta la resolucion de una tablet */
    } else {
      return 3; /* Retorna 3 si detecta la resolucion de una compu */
    }
  }
  

  