import nt_Principal from '@views/direcciones/procesoDirecciones.html'
import '@styles/view_direcciones.scss'

export default () => {
    // Crear un elemento div
    const subdocument = document.createElement('div');

    // Asignar un valor a subdocument.innerHTML. Asumo que 'nt_Principal' es una variable definida previamente.
    subdocument.innerHTML = nt_Principal;

    // Obtener una referencia al botón con el id 'button2'
    const button2 = subdocument.querySelector('#button2');
    const resetButton = subdocument.querySelector('#resetButton');
    // Definir la función para mostrar la dirección
    function mostrarDireccion() {
        const calle = subdocument.querySelector('#calle').value;
        const numero = subdocument.querySelector('#numero').value;
        const restante = subdocument.querySelector('#restante').value;
        const departamento = subdocument.querySelector('#departamento').value;


        // Verificar si algún campo está vacío
        if (calle === '' || numero === '' || restante === '' || departamento === '') {

            // Resaltar los campos vacíos en rojo
            if (calle === '') {
                subdocument.querySelector('#calle').classList.add('error');
            } else {
                subdocument.querySelector('#calle').classList.remove('error');
            }
            if (numero === '') {
                subdocument.querySelector('#numero').classList.add('error');
            } else {
                subdocument.querySelector('#numero').classList.remove('error');
            }
            if (restante === '') {
                subdocument.querySelector('#restante').classList.add('error');
            } else {
                subdocument.querySelector('#restante').classList.remove('error');
            }
            if (departamento === '') {
                subdocument.querySelector('#departamento').classList.add('error');
            } else {
                subdocument.querySelector('#departamento').classList.remove('error');
            }
            return;
        }


        // Si todos los campos están completos, muestra la dirección
        const direccionCompleta = `${calle} - ${numero} - ${restante} - ${departamento}`;

        // Mostrar la dirección en un elemento div
        const direccionMostrada = subdocument.querySelector('#direccionMostrada');
        direccionMostrada.textContent = `Dirección: ${direccionCompleta}`;

        // Cambiar el color del texto
        direccionMostrada.style.color = '#028484'; // Cambia 'blue' al color que desees
    }

    // Agregar un evento click al botón
    button2.addEventListener("click", mostrarDireccion);


    resetButton.addEventListener("click", function () {
        // Reiniciar el formulario
        const form = subdocument.querySelector('form');
        form.reset();

        // Borrar la dirección mostrada
        subdocument.querySelector('#calle').classList.remove('error');

        subdocument.querySelector('#numero').classList.remove('error');

        subdocument.querySelector('#restante').classList.remove('error');

        subdocument.querySelector('#departamento').classList.remove('error');

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

    // Devolver el subdocument para su posterior uso
    return subdocument;

}