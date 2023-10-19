import Swal from 'sweetalert2'

import navListCheckList from '@views/alerts/navListCheckList.html'
import navListCheckListTarjeta from '@views/alerts/navChecklistTarjeta.html'
import navListCheckListRediferidos from '@views/alerts/navChecklistRediferidos.html'
import navListCheckListCartera from '@views/alerts/navChecklistCartera.html'
import popShowImgCheck from '@views/alerts/popShowImgCheck.html'

// LAS FUNCIONES QUE EJECUTAN LA ALERTA DEBEN INICIAR CON "pop" seguido del
// nombre de la alerte en camelCase "popAlertaNota"


export const popError = (error) => {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Algo va mal!',
    footer: `<a href="">${error ? error : 'Error'}</a>`,
    heightAuto: false,
  })
}

export const navListPop = (listOpen) => {
  console.log(listOpen)
  const lists = {
    "checklist-Credito": navListCheckList,
    "checklist-Tarjeta": navListCheckListTarjeta,
    "checklist-Rediferidos": navListCheckListRediferidos,
    "checklist-Cartera": navListCheckListCartera,
    "notas": true,
    "calculadoras": true
  }
  console.log(lists[listOpen])
  if (lists[listOpen]) {
    Swal.fire({
      showCancelButton: true,
      showConfirmButton: false,
      cancelButtonText: 'Cancelar',
      cancelButtonColor: '#ef3829',
      title: listOpen.toUpperCase(),
      html: lists[listOpen],
      heightAuto: false,
    })
    let btnsLista = Swal.getHtmlContainer().querySelectorAll('a')
    btnsLista.forEach(element => {
      element.addEventListener('click', () => { Swal.close() })
    });
  }
}

export const popShowCheckNota = (nota) => {
  console.log(nota)
  Swal.fire({
    icon: 'success',
    width: 600,
    title: "Nota",
    input: 'textarea',
    inputValue: `${nota}`,
    heightAuto: false,
  })
}

