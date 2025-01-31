import React from "react";
import "../../../styles/Guiones.scss";

const guionLlamada = {
    saludo: `Buenos días/tardes, Sr./Sra. [Nombre del cliente]. Mi nombre es [Su nombre] Aliado Especializado 
en BBVA. ¿Cómo se encuentra hoy? 
Respuesta del cliente XXX, me alegra.`,

    aviso: `Antes de continuar, le informo que esta llamada está siendo grabada y monitoreada, así mismo le 
recuerdo que el banco nunca le solicitara claves ni tokens de manera digital y en caso de que se 
nos corte la comunicas nos pondremos en contacto nuevamente.`,

    oferta: `El motivo de mi llamada es por que el banco esta creando oportunidades para clientes como usted 
nos gustaría respaldar sus necesidades financieras para poder brindarle alternativas acordes a sus 
preferencias. 
Sr. XXXX gracias a su buen comportamiento financiero, hemos puesto a su disposición un crédito 
preaprobado por un monto de hasta $$$$ millones de pesos con una tasa preferencia y desde la 
comodidad de su hogar. El cual va a poder utilizar para remodelación de vivienda, unificación de 
deudas, pago de impuesto, o para lo que uste desee. 
Teniendo en cuenta que registramos el crédito preaprobado en la aplicación BBVA Móvil. 
Queremos acompañarle en el proceso. 
Sr. XXXX, por favor puede poner la llamada en altavoz e ingresar a la APP BBVA, me confirma 
cuando lo haya hecho para así poder ayudarle. 
Tenga presente que las condiciones de este préstamo las validaremos conjuntamente ya que, en el 
momento de ingresar a la aplicación BBVA móvil o BBVA Net. automáticamente le genera la 
simulación correspondiente al monto solicitado informando el valor de la cuota con su respectivo 
plazo, valor de seguro de vida deudor y lo mas importante la Tasa preferencial que el banco ha 
dispuesto para usted. 
Sr XXXX, para continuar con el proceso, confírmeme con su SI, Acepto. 
(REALIZAR PROCESO DE AUTOGESTION)`,

    contrato: `Para finalizar le reconfirmo el producto adquirido el día de hoy (INFORMAR FECHA) usted señor@ 
(INDICAR NOMBRE Y CÉDULA DEL CLIENTE) ha aceptado UN CREDITO DE CONSUMO con un 
cupo de $(MONTO ADQUIRIDO), CON UNA TASA PREFERENCIA DE (VALOR DE LA TASA), A UN 
PLAZO DE (INDICAR CANTIDAD DE MESES).`,

    cierreLlamada: `¿Tienes alguna duda frente al proceso realizado? 
Le agradezco mucho su tiempo e interés, recuerde que hablo con XXXX aliado especializado en 
banco BBVA 
Si tiene alguna inquietud, se puede comunicar a nuestras líneas de atención, para corroborar la 
oferta realizada. 
Línea Nacional 01 8000 912 227 
Bogotá: 601 401 00 00 
¡Que tenga un excelente día SR XXXX bienvenido al banco BBVA!`
};

const Guiones = () => {
    return (
        <div className="container-guiones">
            <div className="guiones">
                <h2 className="guiones__titulo">PROTOCOLO AUTOGESTIÓN CONSUMO</h2>

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

                <details className="guiones__detalles">
                    <summary className="guiones__titulo">Cierre de Llamada</summary>
                    <p className="guiones__texto">{guionLlamada.cierreLlamada}</p>
                </details>
            </div>
        </div>
    );
};

export default Guiones;
