import React from "react";
import "../../../styles/Guiones.scss";

const guionLlamada = {
    saludo: `Buenos días/tardes, Sr./Sra. [Nombre del cliente]. Mi nombre es [Su nombre] Aliado Especializado 
  en BBVA. ¿Cómo se encuentra hoy? 
  Respuesta del cliente XXX, me alegra.`,

    aviso: `Antes de continuar, le informo que esta llamada está siendo grabada y monitoreada, así mismo le 
  recuerdo que el banco nunca le solicitará claves ni tokens de manera digital y en caso de que se nos corte la comunicación, 
  nos pondremos en contacto nuevamente.`,

    oferta: `En nombre de BBVA, queremos agradecerle por depositar su confianza en nosotros, y por el 
  excelente comportamiento que ha tenido con nuestra cuenta de ahorro.
  Sr. XXX queremos validar si ya está haciendo uso de la Aplicación del banco BBVA.
  Respuesta del cliente XXX,
  Sr. XXX le recordamos que a través de la app de nuestro banco puede gestionar su cuenta de 
  manera fácil y rápida. Desde la aplicación, usted puede validar los movimientos de su cuenta, 
  solicitar certificados de cuenta y extractos e incluso Recuerde que nuestra aplicación está 
  disponible tanto para dispositivos Android como iPhone.
  Así mismo le informo que el banco pone a su disposición una tarjeta de crédito de la categoría XXXX 
  con un cupo de $$$$ 
  ¿Sr. XXXX me confirma si tiene alguna preferencia especial por alguna franquicia?`,

    beneficiosGenericos: [
        "Exoneración de cuota de manejo de manera permanente por el tiempo que tenga activa su cuenta nómina",
        "Recibe hasta 11.000 puntos BBVA, por tu primera compra y por cumplir el reto de facturación acumulada en los primeros 3 meses de dada de alta la tarjeta",
        "Tasa de interés preferencial para compra de cartera que va desde 17.96% E.A y plazo de hasta 36 meses. (la tasa de interés depende del perfil del cliente)",
        "Asistencias y coberturas gratuitas con AssistCard, y Asistencias y seguros especializados con la franquicia"
    ],

    confirmacionEnvioTarjeta: "Teniendo en cuenta lo anterior, ¿está de acuerdo con que se realice el envío de la tarjeta a la dirección (nombrar dirección del cliente)?",

    contrato: `Para finalizar le reconfirmo el producto adquirido el día de hoy (INFORMAR FECHA), 
  usted señor@ (INDICAR NOMBRE Y CÉDULA DEL CLIENTE) ha aceptado la tarjeta (CATEGORÍA Y FRANQUICIA)
  con un cupo de $(MONTO ADQUIRIDO), cuota de manejo/exoneración si aplica de ($ SI EL CLIENTE LO SOLICITA), 
  la cual llegará a la siguiente dirección (DIRECCIÓN QUE SE HAYA ACORDADO CON EL CLIENTE), así mismo le confirmo 
  que esta tarjeta cuenta con un SEGURO DEUDOR que solo se activa en caso de existir deuda, el cual tiene un VALOR DE $3.900. 
  Recuerde que cuando la reciba la va a poder activar por la aplicación del banco. ¿Está de acuerdo con el envío de la tarjeta? 
  Cliente debe confirmar con un “si” o un “si, acepto”`,

    cierreLlamada: `Sr. XXXX, recuerde que, al tener su cuenta nómina activa, disfruta de beneficios como: 
  Tasas de interés reducidas en líneas de crédito para vehículo y vivienda. Acumulación de puntos por compras con sus tarjetas BBVA. 
  Exoneración de cuota de manejo para su tarjeta débito y hasta tres tarjetas de crédito. 
  Transferencias sin costo a través de la app BBVA, Transfiya, y retiros gratuitos en cajeros BBVA o corresponsales bancarios.`
};

const Guiones = () => {
    return (
        <div className="container-guiones">
            <div className="guiones">
                <h2 className="guiones__titulo">PROTOCOLO TDC</h2>

                <p className="guiones__texto">SALUDO: {guionLlamada.saludo}</p>


                <p className="guiones__texto">AVISO: {guionLlamada.aviso}</p>

                <details className="guiones__detalles">
                    <summary className="guiones__titulo">Oferta</summary>
                    <p className="guiones__texto">{guionLlamada.oferta}</p>
                </details>

                <details className="guiones__detalles">
                    <summary className="guiones__titulo">Beneficios</summary>
                    <ul className="guiones__beneficios">
                        {guionLlamada.beneficiosGenericos.map((beneficio, index) => (
                            <li key={index} className="guiones__beneficio">{beneficio}</li>
                        ))}
                    </ul>
                </details>

                <details className="guiones__detalles">
                    <summary className="guiones__titulo">Confirmación Envío Tarjeta</summary>
                    <p className="guiones__texto">{guionLlamada.confirmacionEnvioTarjeta}</p>
                </details>

                <details className="guiones__detalles">
                    <summary className="guiones__titulo">Contrato</summary>
                    <p className="guiones__texto">{guionLlamada.contrato}</p>
                </details>

                <details className="guiones__detalles">
                    <summary className="guiones__titulo">Cierre de Llamada</summary>
                    <p className="guiones__texto">{guionLlamada.cierreLlamada}</p>
                </details>
            </div>
        </div>
    );
};

export default Guiones;
