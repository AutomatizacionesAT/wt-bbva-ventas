/** ESTILOS */
import "@javascript/librerias/fontAwesome/css/fontawesome.css";
import "@javascript/librerias/fontAwesome/css/brands.css";
import "@javascript/librerias/fontAwesome/css/solid.css";
import "@javascript/librerias/fontAwesome/css/regular.css";
import "animate.css";
import "@styles/style.scss";
import "@styles/_navbar.scss";
import Swal from "sweetalert2";

/** ESTANDARS */
import { router } from "@router/index.routes.js"; //*
import { navListPop } from "@javascript/funcionales/alertas.js";

router(window.location.hash); //*
window.addEventListener("hashchange", () => {
  router(window.location.hash);
});

// export let iDDB = new Localbase('db_telefonica')

//** LEER ARCHIVOS EXCEL */
// export const leerExcel = async (archivoExcel) => {
//     const content = await readXlsxFile(archivoExcel.files[0])

//     const [headerRow, ...dataRows] = content;
//     const columnTitles = headerRow.map((title) => title.trim());

//     const arrObjetos = dataRows.map((row) => {
//         const objeto = {};
//         row.forEach((value, index) => {
//             const title = columnTitles[index];
//             objeto[title] = value;
//         });
//         return objeto;
//     });
// }

// video para base de datos local
// https://www.youtube.com/watch?v=KJnupY2HPCg&t=670s&ab_channel=MakeAppswithDanny
// Libreria de base de datos local
// https://github.com/dannyconnell/localbase

//** END LEER ARCHIVOS EXCEL */

/** NAVBAR */
const navItems = document.querySelectorAll(".route");
navItems.forEach((linkItem) => {
  linkItem.addEventListener("click", () => {
    if (linkItem.name.includes("pop")) {
      const lista = linkItem.name.split("_")[1];
      console.log(lista);
      navListPop(lista);
    }
  });
});
/** END NAVBAR */

const sessionRecAPI = () => {
  const sendForm = document.getElementById("sendForm");
  if (sessionStorage.length == 0 || sessionStorage.session == "false") {
    sendForm.parentNode.classList.remove("hide");
  }
  sendForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = {
      usuario: e.target.elements[0].value,
      campana: e.target.elements[1].value,
      modulo: e.target.elements[2].value,
      observaciones: e.target.elements[3].value,
    };
    e.target.parentNode.remove();
    Swal.fire({
      icon: "info",
      title: "Enviando",
      didOpen: () => {
        Swal.showLoading();
      },
      allowOutsideClick: false,
      allowEscapeKey: false,
    });
    fetch(
      "http://colbogweb20:8081/Webservices_Simulador/api/main/insUpdTransaccion",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    )
      .then((response) => response.json())
      .then((result) => {
        sessionStorage.setItem("session", true);
        Swal.fire({
          icon: "success",
          title: "Datos Enviados correctamente.",
          allowOutsideClick: true,
        });
      })
      .catch((error) => {
        sessionStorage.setItem("session", false);
        Swal.fire({
          icon: "error",
          title: "Ocurrió un error durante el consumo del API",
          text: error,
          allowOutsideClick: true,
        });
      });
  });
};

sessionRecAPI();
