import '@styles/view_objeciones.scss'
import ObjecionesHTML from '@views/manual/objeciones.html'
import { API_ManualObjeciones } from '../bases/Api_ManualObj'

export default () => {
    const subdocument = document.createElement('div') // *``
    subdocument.className = 'hook' // * Puedes agregar otra clase sin eliminar esta 'hook'
    subdocument.insertAdjacentHTML('afterbegin', ObjecionesHTML)

    /** FUNCIONES INTERNAS DEL ELEMENTO**/
    const boxObjeciones = subdocument.querySelector('#boxObjeciones')
    /** **/
    const segmentosRecorridos = new Set();

    API_ManualObjeciones.forEach(summary=>{
      if (!segmentosRecorridos.has(summary.SEGMENTO)) {
            let elementHTML = `
            <details name='manualObjeciones' class="detailObjecion">
                  <summary>${summary.SEGMENTO} <i class="${summary.ICON}"></i></summary>
                  <div class="cards">
                        ${API_ManualObjeciones.map(objeciones=>{
                              if (summary.SEGMENTO == objeciones.SEGMENTO) {
                                    return `
                                    <div class="card">
                                          <div class="card-inner">
                                                <div class="card-front">
                                                      <p>${objeciones.OBJECIONES}</p>
                                                </div>
                                                <div class="card-back">
                                                      <h3>Respuesta</h3>
                                                      <p>${objeciones.RESPUESTA}</p>
                                                      ${objeciones.OBSERVACION ? '<h3>Observación</h3>' : ''}
                                                      <p>${objeciones.OBSERVACION}</p>
                                                </div>
                                          </div>
                                    </div>
                                    `
                              }
                        }).join('')}      
                  </div>
            </details>
            `
            boxObjeciones.innerHTML += elementHTML
            segmentosRecorridos.add(summary.SEGMENTO);
      }
    })

    return subdocument
}