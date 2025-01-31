import React from "react";
import "../../../styles/Guiones.scss";

const guionLlamada = {
    saludo: `Buenos días/tardes, Sr./Sra. [Nombre del cliente]. Mi nombre es [Su nombre] Aliado Especializado 
  en BBVA. ¿Cómo se encuentra hoy? 
  Respuesta del cliente XXX, me alegra.`,

    aviso: `Antes de continuar, le informo que esta llamada está siendo grabada y monitoreada, así mismo le 
  recuerdo que el banco nunca le solicitará claves ni tokens de manera digital y en caso de que se nos corte la comunicación, 
  nos pondremos en contacto nuevamente.`,

    oferta: `Sr. XXXX me estoy comunicando ya que por su excelente comportamiento con nuestra tarjeta de 
crédito (Visa o MasterCard) terminada en #### (mencionar los últimos 4 dígitos) el Banco le brinda 
la oportunidad de que pueda unificar sus deudas de tarjeta de crédito en una sola, con un interés 
preferencial de XXX (mencionar interés vigente). 
Sr, nos gustaría saber si en el momento viene manejando deudas en tarjetas de crédito con otras 
entidades financieras, para poder realizar una simulación y que usted pueda tomar la mejor 
decisión para sus finanzas en estos momentos 
Respuesta del cliente XXXX 
Sr. Indíqueme a cuánto asciende sus deudas en tarjeta de crédito y cuantas son? (el monto debe 
ser superior a $500.000) 
(realizar simulación) 
Sr, XXXX en este caso le confirmo que lo ideal es que lo que se pueda realizar la compra de cartera 
a un plazo máximo de 36 meses con una cuota aproximada de $$$$, para que así usted pueda 
aliviar su pago, o si prefiere pude manejar un plazo de 24 meses con una cuota de $$$$ o a 12 
meses con cuota de $$$$. ¿Me confirma con cuál de los estos plazos prefiere que apliquemos el 
beneficio?`,

    confirmacionTitularidad: "Para tomar el beneficio es necesario realizar una validación de titularidad. Me podría por favor  confirmar la siguiente información_  Su nombre es (Nombres completos), por favor me confirma sus apellidos ____________  Su cedula de ciudadanía es XXXXX, por favor me confirma los últimos 3 dígitos ###  Su correo electrónico inicia de la siguiente manera XXXXX, por favor me confirma el dominio",

    confirmacionDeVenta: "Sr, XXXX me confirma, por favor, ¿a cuantas tarjetas desea extender este beneficio?  Me informa el nombre del Banco donde tiene la tarjeta #1  Me confirma por favor el número de obligación de la tarjeta #1  Me confirma por favor el valor a pagar en esta tarjeta  (Repetir estas preguntas la veces que sea necesaria, si el cliente va a compra la deuda de más de  una tarjeta.)  Por último, me confirma el numero de cuotas al cual se va aplicar el beneficio",

    contrato: `Sr. XXX por motivos de seguridad y calidad en el servicio voy a proceder con la confirmación de la 
compra de cartera: 
Sr. XXXX le confirmo que el banco BBVA realizará la compra de cartera que tiene actual mente 
con el Banco XXXX correspondiente a la tarjeta de crédito numero ##### -#####- #####- #### 
(nombra los 16 dígitos) por Valor de $$$$ y diferido a XX (plazo acordado) a una tasa XX N.M.V 
equivalente a XX E.A(nombra tasa pactada) ¿De acuerdo? (la respuesta debe ser Si o Si, 
Acepto) 
En este momento se ha formalizado la compra de cartera, la cual será cargada a su tarjeta de 
crédito (nombrar Franquicia y Categoria) del BBVA que termina en los digitos (nombrar últimos 
4 digitos) ¿De acuerdo? (la respuesta debe ser Si o Si, Acepto)`,

    cierreLlamada: `Es importante tener el cupo disponible en la tarjeta para realizar ala compra de cartera, y 
encontrase al día en los pagos de su tarjeta. 
Le recuerdo que este proceso se realizara en un tiempo aproximado de 4 días hábiles, donde 
le recomendamos tener el cupo disponible para realizar la operación. De igual forma tenga 
presente que una vez concluido con éxito el proceso le enviaremos un mensaje de texto a su 
celular con la confirmación de la operación. 
¿Tienes alguna duda frente al proceso realizado? 
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
                <h2 className="guiones__titulo">PROTOCOLO COMPRA CARTERA</h2>

                <p className="guiones__texto">SALUDO: {guionLlamada.saludo}</p>


                <p className="guiones__texto">AVISO: {guionLlamada.aviso}</p>

                <details className="guiones__detalles">
                    <summary className="guiones__titulo">Oferta</summary>
                    <p className="guiones__texto">{guionLlamada.oferta}</p>
                </details>

                <details className="guiones__detalles">
                    <summary className="guiones__titulo">Confirmación Titularidad</summary>
                    <p className="guiones__texto">{guionLlamada.confirmacionTitularidad}</p>
                </details>

                <details className="guiones__detalles">
                    <summary className="guiones__titulo">Confirmación De Venta</summary>
                    <p className="guiones__texto">{guionLlamada.confirmacionDeVenta}</p>
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
