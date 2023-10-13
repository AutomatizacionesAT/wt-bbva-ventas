import '../js/componentes/datoBuscado.js'
import Home from '@views/home.html'

export default () => {
    const subdocument = document.createElement('div')
    subdocument.className = 'hook'
    subdocument.innerHTML = Home

    /** FUNCIONES INTERNAS DEL ELEMENTO**/

    const inputBusqueda = document.getElementById('busqueda');
    const articulos = document.querySelectorAll('.header__listdropdown__checklists a');

    document.getElementById('srcDatos').style.display = 'none';

    inputBusqueda.addEventListener('input', function () {
        const valorBusqueda = inputBusqueda.value.toLowerCase();

        articulos.forEach(articulo => {
            const nombre = articulo.dataset.nombre.toLowerCase();
            if (nombre.includes(valorBusqueda)) {
                articulo.style.display = 'block';
            } else {
                articulo.style.display = 'none';
            }
        });

        const algunArticuloVisible = Array.from(articulos).some(articulo => articulo.style.display !== 'none');
        const formulario = document.getElementById('srcDatos');

        // Mostrar el formulario si hay resultados coincidentes, de lo contrario, ocultarlo
        formulario.style.display = algunArticuloVisible ? 'block' : 'none';
    });

    // Manejar cuando el campo de búsqueda se borra
    inputBusqueda.addEventListener('blur', function () {
        if (inputBusqueda.value === '') {
            articulos.forEach(articulo => {
                articulo.style.display = 'none';
            });
            document.getElementById('srcDatos').style.display = 'none';
        }
    });
    /** **/

    return subdocument
}