// ============================================
// SISTEMA DE REGISTRO DE USUARIOS
// ============================================

// BUENA PRACTICA (2), SE ELIMINO INFORMACION TECNICA Y SENSIBLE DEL ENCABEZADO

// Variables globales (accesibles desde toda la aplicación)
var registros = [];
var contador = 0;

// Configuración del sistema
const CONFIG = {
    maxRegistros: 1000,
    debugMode: false
    // BUENA PRACTICA (2), SE ELIMINO INFORMACION TECNICA
};

// BUENA PRACTICA (3), IMPRESIÓN DE MENSAJES DE SALIDA

// Función principal de inicialización
function inicializar() {
    // BUENA PRACTICA (3), IMPRESIÓN DE MENSAJES DE SALIDA
    // Event listener para el formulario
    document.getElementById('registroForm').addEventListener('submit', function(e) {
        e.preventDefault();
        guardarRegistro();
    });
    
    // BUENA PRACTICA (3), IMPRESIÓN DE MENSAJES DE SALIDA
}

// Función para guardar un registro
function guardarRegistro() {
    // BUENA PRACTICA (3), IMPRESIÓN DE MENSAJES DE SALIDA
    
    // Obtener valores del formulario
    var nombre = document.getElementById('nombre').value;
    var apellido1 = document.getElementById('apellido1').value;
    var apellido2 = document.getElementById('apellido2').value;
    var telefono = document.getElementById('telefono').value;
    var curp = document.getElementById('curp').value;
    var email = document.getElementById('email').value;
    
    // BUENA PRACTICA (5), SE ELIMINO MENSAJE DE ERROR CON INFORMACION TECNICA
    if (nombre === "") {
        alert("Error de validación. Verifique los datos ingresados.");
        return;
    }

    // BUENA PRACTICA (6), BORRE CODIGO COMENTADO 

    
    // Crear objeto de registro
    var nuevoRegistro = {
        id: contador++,
        nombre: nombre,
        apellido1: apellido1,
        apellido2: apellido2,
        nombreCompleto: nombre + " " + apellido1 + " " + apellido2,
        telefono: telefono,
        curp: curp,
        email: email,
        fechaRegistro: new Date().toISOString()
            // BUENA PRACTICA (7), SE ELIMINO INFORMACION TECNICA
    };
    
    // BUENA PRACTICA (8), SE ELIMINO INFORMACION DE CONSOLA

    // Agregar al arreglo global
    registros.push(nuevoRegistro);
    
    // BUENA PRACTICA (9), SE ELIMINO INFORMACION DE CONSOLA

    // Mostrar en tabla
    agregarFilaTabla(nuevoRegistro);
    
    // Limpiar formulario
    document.getElementById('registroForm').reset();
    
    // BUENA PRACTICA (10), SE ELIMINO INFORMACION DE CONSOLA

    // BUENA PRACTICA (11), SE ELIMINO HARDCODE
}

// BUENA PRACTICA (13), SE MODIFICO LA FUNCIONÓN DE LA TABLA PARA EVITAR INYECCIÓN XSS 
// Función para agregar fila a la tabla
function agregarFilaTabla(registro) {
    const tabla = document.getElementById('tablaRegistros');

    const fila = document.createElement('tr');

    const tdNombre = document.createElement('td');
    tdNombre.textContent = registro.nombreCompleto;

    const tdTelefono = document.createElement('td');
    tdTelefono.textContent = registro.telefono;

    const tdCurp = document.createElement('td');
    tdCurp.textContent = registro.curp;

    const tdEmail = document.createElement('td');
    tdEmail.textContent = registro.email;

    fila.appendChild(tdNombre);
    fila.appendChild(tdTelefono);
    fila.appendChild(tdCurp);
    fila.appendChild(tdEmail);

    tabla.appendChild(fila);
}

// BUENA PRACTICA (12), SE ELIMINO FUNCION DE ENVIAR SERVIDOR QUE EXPONIA INFORMACION DEL SISTEMA

// BUENA PRACTICA (13), BORRE CODIGO COMENTADO 

// BUENA PRACTICA (14), SE ELIMINO FUNCION DE DIAGNOSTICO QUE EXPONIA INFORMACION DEL SISTEMA

// BUENA PRACTICA (15), BORRE CODIGO COMENTADO 

// Variable global adicional
var ultimoRegistro = null;

// Inicializar cuando cargue el DOM
window.addEventListener('DOMContentLoaded', function () {
    inicializar();

    // BUENA PRACTICA (16), SE EVITO EXPONER VARIABLES GLOBALES EN WINDOW
});

// BUENA PRACTICA (16), SE ELIMINARON MENSAJES DE VERSION Y DATOS DEL DESARROLLADOR

/**
LAS BUENAS PRACTICAS QUE ENCONTRE
 * Validación de entrada
 * Código comentado
 * Mensajes de error
 * Contenido URL
 * Valores Quemados 
 * Impresión de mensajes de salida
 * Menor privilegio
 */