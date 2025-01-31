import React from "react";
import "../../../styles/Guiones.scss";;

const guionLlamada = {
    saludo: `Buenos días/tardes, Sr./Sra. [Nombre del cliente]. Mi nombre es [Su nombre] Aliado Especializado en BBVA. ¿Cómo se encuentra hoy? \nRespuesta del cliente XXX, me alegra.`,

    aviso: `Antes de continuar, le informo que esta llamada está siendo grabada y monitoreada para garantizar su mejor experiencia.`,

    oferta: `En nombre de BBVA, queremos agradecerle por depositar su confianza en nosotros, y por el excelente comportamiento que ha tenido con nuestra tarjeta de crédito. \n\nSr XXX queremos validar si ya ha podido realizar el canje de puntos BBVA de su tarjeta de crédito. \n\nRespuesta del cliente XXX, \n\n(indicar beneficio activo de canje de puntos en establecimiento aliado) \n\nAsí mismo usted tiene la oportunidad de compartir este beneficio y los demás beneficios de su tarjeta hasta con 9 personas de su círculo cercano que sean mayores de 14 años de forma totalmente gratuita, A través de una tarjeta amparada con cupo desde $400.000 hasta (nombrar cupo total de la TDC titular). \n\n¿A qué persona le gustaría entregar este beneficio? \n\nReforzar un beneficio adicional: \n\n● Asistencias de viaje. \n● Uso nacional o internacional. \n● Sin pago de cuota de manejo de forma permanente. \n● Alianzas con comercios especializados. \n● Acumulación de puntos por cada compra. \n\nSe deben tomar los siguientes datos para solicitar el alta de la tarjeta: \n\n● Nombre completo del amparado. \n● Número de documento del amparado. \n● Fecha de nacimiento del amparado. \n● Fecha de expedición del amparado. \n\nRealizar preguntas de validación de identidad de 3270. \n\nSi la autenticación es exitosa se debe confirmar: \n"Le confirmó, su dirección para recibir la tarjeta sigue siendo XXX" \n"Cliente: si está correcta”, de lo contrario se actualiza. \nAsesor: gracias, le recuerdo que usted autoriza al grupo BBVA Colombia a proteger sus datos conforme a lo dispuesto en la Ley 1266 de 2008 y publicado en el portal web del banco.`,

    contrato: `Sr./Sra.  [Nombre del titular] procedemos entonces con el proceso de alta de  # de  Tarjeta(s) de Crédito para el Sr./Sra. [Nombre del amparado] identificado con número de documento xxxx con cupo de xxx de su categoría xxx de la franquicia xxx, bajo el mismo contrato y extracto de la tarjeta principal xxxx (4 últimos números de tarjeta principal).  (Mencionar cada titular junto con los datos de cada uno). \nLe agradezco confirmarme con un SI. \nCliente indica “Si” Continuar \nSr(a), recuerde que si al momento de generar la alta no puede presentar impagos o bloqueos en su Tarjeta de Crédito, para evitar que la solicitud sea rechazada; por lo que agradecemos que asegure tener sus obligaciones al día. \nIgualmente Sr(a) quiero informarle que en los próximos días uno de nuestros proveedores estará realizando la entrega de su Tarjeta de Crédito, una vez cuente con ella, lo invitamos a activarla a través de su App Móvil o comunicándose con nuestras líneas de atención al cliente en Bogotá 601 401 00 00 o a nivel nacional 01 8000 912 227`,

};

const Guiones = () => {
    return (
        <div className="container-guiones">
            <div className="guiones">
                <h2 className="guiones__titulo">PROTOCOLO AMPARADA</h2>

                <p className="guiones__texto">SALUDO: {guionLlamada.saludo}</p>


                <p className="guiones__texto">AVISO: {guionLlamada.aviso}</p>

                <details className="guiones__detalles">
                    <summary className="guiones__titulo">Oferta</summary>
                    <p className="guiones__texto">{guionLlamada.oferta}</p>
                </details>

                <details className="guiones__detalles">
                    <summary className="guiones__titulo">Contrato</summary>
                    <p className="guiones__texto">{guionLlamada.contrato}</p>
                </details>
            </div>
        </div>
    );
};

export default Guiones;
