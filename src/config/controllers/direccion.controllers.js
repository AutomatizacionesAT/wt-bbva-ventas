import nt_Principal from '@views/direcciones/procesoDirecciones.html';
import '@styles/view_direcciones.scss';

export default () => {
    const subdocument = document.createElement('div');
    subdocument.innerHTML = nt_Principal;

    const button2 = subdocument.querySelector('#button2');
    const resetButton = subdocument.querySelector('#resetButton');
    const ciudadesInput = subdocument.querySelector('#ciudades');
    const departamentoSelect = subdocument.querySelector('#departamentoSelect');

    // Definir un mapeo de ciudades a departamentos
    const ciudadesDepartamentos = {
        'BOGOTÁ': 'BOGOTÁ',
        'MEDELLÍN': 'ANTIOQUIA',
        'CALI': 'VALLE DEL CAUCA',
        'BARRANQUILLA': 'ATLÁNTICO',
        'CARTAGENA': 'BOLÍVAR',
        'SANTA MARTA': 'MAGDALENA',
        'VILLAVICENCIO': 'META',
        'MANIZALES': 'CALDAS',
        'PEREIRA': 'RISARALDA',
        'IBAGUÉ': 'TOLIMA',
        'BUCARAMANGA': 'SANTANDER',
        'CÚCUTA': 'NORTE DE SANTANDER',
        'POPAYÁN': 'CAUCA',
        'NEIVA': 'HUILA',
        'PASTO': 'NARIÑO',
        'TUNJA': 'BOYACÁ',
        'ARMENIA': 'QUINDÍO',
        'SINCELEJO': 'SUCRE',
        'MONTERÍA': 'CÓRDOBA',
        'VALLEDUPAR': 'CESAR',
        'RIOHACHA': 'LA GUAJIRA',
        'QUIBDÓ': 'CHOCÓ',
        'FLORENCIA': 'CAQUETÁ',
        'YOPAL': 'CASANARE',
        'PUERTO CARREÑO': 'VICHADA',
        'MOCOA': 'PUTUMAYO',
        'SAN JOSÉ DEL GUAVIARE': 'GUAVIARE',
        'MITÚ': 'VAUPÉS',
        'INÍRIDA': 'GUAINÍA',
    };


    // Puedes seguir añadiendo más ciudades y departamentos según tus necesidades.


    // Agregar el evento 'input' al campo de ciudad para el autocompletado
    ciudadesInput.addEventListener('input', () => {
        const ciudadIngresada = ciudadesInput.value;

        // Verificar si la ciudad ingresada está en el mapeo
        if (ciudadIngresada in ciudadesDepartamentos) {
            const departamentoCorrespondiente = ciudadesDepartamentos[ciudadIngresada];
            departamentoSelect.value = departamentoCorrespondiente;
        } else {
            departamentoSelect.value = '';
        }
    });

    // Definir la función para mostrar la dirección
    function mostrarDireccion() {
        const calle = subdocument.querySelector('#calle').value;
        const numeroInput = subdocument.querySelector('#numero').value;
        const restante = subdocument.querySelector('#restante').value;
        const ciudadesInput = subdocument.querySelector('#ciudades').value;
        const departamento = subdocument.querySelector('#departamentoSelect').value;

        // Verificar si algún campo está vacío
        if (calle === '' || numeroInput.value === '' || ciudadesInput === '' || departamento === '') {
            // Resaltar los campos vacíos en rojo
            if (calle === '') {
                subdocument.querySelector('#calle').classList.add('error');
            } else {
                subdocument.querySelector('#calle').classList.remove('error');
            }
            if (numeroInput.value === '') {
                subdocument.querySelector('#numero').classList.add('error');
            } else {
                subdocument.querySelector('#numero').classList.remove('error');
            }
            if (ciudadesInput === '') {
                subdocument.querySelector('#ciudades').classList.add('error');
            } else {
                subdocument.querySelector('#ciudades').classList.remove('error');
            }
            if (departamento === '') {
                subdocument.querySelector('#departamentoSelect').classList.add('error');
            } else {
                subdocument.querySelector('#departamentoSelect').classList.remove('error');
            }
            return;
        }


        // Definir una expresión regular para buscar y reemplazar los caracteres no deseados
        const caracteresNoDeseados = /[.\-,:_/*"#$%&]/g;

        // Eliminar los caracteres no deseados de numero y restante
        const numeroLimpio = numeroInput.replace(caracteresNoDeseados, '');
        const restanteLimpio = restante.replace(caracteresNoDeseados, '');

        // Construir la dirección completa
        const direccionCompleta = `${calle} ${reemplazarAbreviaciones(numeroLimpio)} ${reemplazarAbreviaciones(restanteLimpio)} ${reemplazarAbreviaciones(ciudadesInput)} ${reemplazarAbreviaciones(departamento)}`;

        function reemplazarAbreviaciones(texto) {
            texto = texto.replace(/\bMZ\b/gi, 'MANZANA');
            texto = texto.replace(/\bMZA\b/gi, 'MANZANA');
            texto = texto.replace(/\bVIS\b/gi, 'BIS');
            texto = texto.replace(/\bNTO\b/gi, 'NORTE');
            texto = texto.replace(/\bNT\b/gi, 'NORTE');
            texto = texto.replace(/\bNTR\b/gi, 'NORTE');
            texto = texto.replace(/\bCNJO\b/gi, 'CONJUNTO');
            texto = texto.replace(/\bCNJ\b/gi, 'CONJUNTO');
            return texto;
        }


        // Convertir la dirección completa a mayúsculas
        const direccionEnMayusculas = direccionCompleta.toUpperCase();

        // Mostrar la dirección en un elemento div
        const direccionMostrada = document.querySelector('#direccionMostrada');
        direccionMostrada.textContent = `Dirección: ${direccionEnMayusculas}`;

        // Cambiar el color del texto
        direccionMostrada.style.color = '#028484'; // Cambia 'blue' al color que desees


    }
    // Agregar un evento click al botón
    button2.addEventListener('click', mostrarDireccion);


    resetButton.addEventListener("click", function () {
        const form = subdocument.querySelector('form');
        form.reset();

        subdocument.querySelector('#calle').classList.remove('error');
        subdocument.querySelector('#numero').classList.remove('error');
        subdocument.querySelector('#restante').classList.remove('error');
        subdocument.querySelector('#departamentoSelect').classList.remove('error');
        subdocument.querySelector('#ciudades').classList.remove('error');

        const direccionMostrada = subdocument.querySelector('#direccionMostrada');
        direccionMostrada.textContent = '';
    });

    // Función para copiar la dirección al portapapeles
    subdocument.querySelector('#copiarDireccion').addEventListener('click', function () {
        const direccionMostrada = subdocument.querySelector('#direccionMostrada');
        const direccionTexto = direccionMostrada.textContent;

        const textarea = document.createElement('textarea');
        textarea.value = direccionTexto;
        document.body.appendChild(textarea);

        textarea.select();
        document.execCommand('copy');

        document.body.removeChild(textarea);
    });

    return subdocument;
};
