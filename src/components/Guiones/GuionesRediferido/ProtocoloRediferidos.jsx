import React from "react";
import "../../../styles/Guiones.scss";

const guionLlamada = {
    saludo: `Buenos días/tardes, Sr./Sra. [Nombre del cliente]. Mi nombre es [Su nombre] Aliado Especializado 
en BBVA. ¿Cómo se encuentra hoy? 
Respuesta del cliente XXX, me alegra.`,

    aviso: `Antes de continuar, le informo que esta llamada está siendo grabada y monitoreada, así mismo le 
recuerdo que el banco nunca le solicitara claves ni tokens de manera digital y en caso de que se 
nos corte la comunicas nos pondremos en contacto nuevamente.`,

    oferta: `Sr. XXXX me estoy comunicando ya que por su excelente comportamiento con nuestra tarjeta de 
crédito (Visa o MasterCard) terminada en #### (mencionar los últimos 4 dígitos) el Banco le brinda 
la oportunidad de que todas las compras de su tarjeta las pueda unificar en una sola, con un 
interés preferencial de XXX (mencionar interés vigente), le confirmo que su deuda total en este 
momento esta en $$$$$ (mencionar valor de la deuda total) lo ideal es que lo que se pueda Re 
diferir a un plazo máximo de 36 meses con una cuota aproximada de $$$$, para que así usted 
pueda aliviar su pago, o si prefiere pude manejar un aplazo de 24 meses con una cuota de $$$$ o a 
12 meses con cuota de $$$$. ¿Me confirma con cuál de los estos plazos prefiere que apliquemos 
el beneficio?`,

    contrato: `Señor (XXXX) le confirmo que como usted se encuentra al día con el pago mínimo o interés de su 
tarjeta terminada en los últimos 4 dígitos (####) donde quedará Re diferida a un plazo de (12-24-36) 
cuotas, generando así una cuota promedio mensual de ($.$$$.$$$) bajo la tasa del (E.A. Vigente y 
N.M.V. Vigente), esta operación se verá reflejada en su próximo extracto como re-diferido. 
Recuerde que su saldo a Re diferir son ($.$$$.$$$) en este momento, nosotros aplicaremos el Re 
diferido máximo en 72 horas hábiles, por tal motivo si tiene compras pendientes por cruzar no 
entrarían dentro de esta solicitud. Si tiene compra de cartera dentro del mismo saldo, este quedará 
aplicado a un plazo de (número de cuotas pactadas) a la tasa preferencial que inicialmente tenía la 
operación ¿Está de acuerdo? (Cliente debe confirmar con un sí) 
Señor@ (xxx) si usted tiene la tarjeta de crédito domiciliada, para la fecha de pago se realizará 
el barrido del pago mínimo de su tarjeta. Es muy posible que la primera cuota después de la 
aplicación de este Re diferido le llegue por valor de cuota menor al promedio indicado, tenga 
presente que, si esto llega a pasar, en la segunda cuota le llegará por un valor mayor y desde 
la tercera cuota le llegará por el valor acordado.`,

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
                <h2 className="guiones__titulo">PROTOCOLO REDIFERIDOS</h2>

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
