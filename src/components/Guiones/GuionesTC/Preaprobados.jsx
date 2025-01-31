import React from "react";
import "../../../styles/Guiones.scss";

const guionLlamada = {
    saludo: `Buenos días/tardes, Sr./Sra. [Nombre del cliente]. Mi nombre es [Su nombre] Aliado Especializado 
en BBVA. ¿Cómo se encuentra hoy? 
Respuesta del cliente XXX, me alegra.`,

    aviso: `Antes de continuar, le informo que esta llamada está siendo grabada y monitoreada, Asi 
mismo le recuerdo que el banco nunca le solicitara claves ni tokens de manera digital y en 
caso de que se nos corte la comunicas nos pondremos en contacto nuevamente.`,

    oferta: `El motivo de mi Llamada es porque el banco tiene un mundo de oportunidades a su alcance que 
queremos que conozca, Sr(a) ( nombre del cliente) ¿Tiene usted unos minutos para atender mi 
Llamada en este momento? 
1. Cliente indica “Si" Continuar 
2. Cliente indica “No": ¿Le parece bien si lo Ilamó (día) a las ( hora) (día de acuerdo a turno de 
gestión)? Realice nuevo agendamiento. 
Si el cliente indica 
 2 “No”: Gracias por atender mi Ilamada, recuerde que hablo con "Nombre y Apellido" Aliado 
especializado en banco BBVA, le agradezco su tiempo y atención a mi Ilamada. Que tenga feliz 
día/tarde 
 Si el cliente indica 
1 “Si", continuar: Aborda al cliente de acuerdo con la oferta del producto preaprobado Sr(a) nombre 
del cliente, queremos darle acceso a los siguientes beneficios de nuestra tarjeta de crédito BBVA 
que tiene pre aprobada, por un cupo de $xxxxx con la categoría xXxx • 
El primer beneficio,es que puede contar con un producto financiero que le brinda respaldo 
económico al usar su producto tanto a nivel nacional como internacional. El BBVA cuenta con unas 
de las tarjetas de crédito más seguras en el mercado. 
 • Cuota de manejo gratuita de manera permanente si tiene cuenta de nómina activa con BBVA o 
por 6 meses si no la tiene 
• Así mismo con nuestras tarjetas de crédito tiene la posibilidad de recibir hasta 16.000 puntos 
BBVA, por la primera compra que realice y cumplir el reto trimestral de facturación, estos puntos 
son canjeables tanto en compra de tiquetes y reservas de hoteles con Despegar, redimirlos en 
comercios aliados o canjearlos por dinero para pagar su tarjeta de crédito o abonarlos a su cuenta. 
• Asistencias y coberturas gratuitas, seguro de protección de compras y garantía extendida. 
(VALIDACIÓN DE VIGENCIA DE LA OFERTA Debe ingresar a 3270 y validar con la transacción U623; 
vigencia (estado VS) y cupo de la oferta CIRCUITO VENTA AUTOGESTION) 
Sr., Sra. XXXX, para que usted pueda tener su tarjeta de crédito de forma ágil y segura, puede iniciar 
el proceso de contratación a través del canal digital BBVA Móvil o BBVA net, por favor ingrese a la 
aplicación para guiarlo en el paso a paso. 
(realizar paso a paso de aceptación de TDC preaprobado) 
EN CASO DE QUE NO SE PUEDA REALIZAR AUTOGESTION PROCESAR POR FABRICA`,

    contrato: `Para finalizar le reconfirmo el producto adquirido el día de hoy (INFORMAR FECHA) usted señor@ 
(INDICAR NOMBRE Y CÉDULA DEL CLIENTE) ha aceptado la tarjeta (CATEGORÍA Y FRANQUICIA)
con un cupo de $(MONTO ADQUIRIDO), cuota de manejo/exoneración si aplica de ($ SI EL 
CLIENTE LO SOLICITA), la cual llegará a la siguiente dirección (DIRECCIÓN QUE SE HAYA 
ACORDADO CON EL CLIENTE), así mismo le confirmo que esta tarjeta cuenta con un SEGURO 
DEUDOR que solo se activa en caso de existir deuda, el cual tiene un VALOR DE $3.900. Recuerde 
que cuando la reciba la va a poder activar por la aplicación del banco. ¿Está de acuerdo con el 
envío de la tarjeta? Cliente debe confirmar con un “si” o un “si, acepto”`,

    cierreLlamada: `Sr xxxx, recuerde que, al tener su cuenta nómina activa, disfruta de beneficios como: Tasas de 
interés reducidas en líneas de crédito para vehículo y vivienda. Acumulación de puntos por 
compras con sus tarjetas BBVA. Exoneración de cuota de manejo para su tarjeta débito y 
hasta tres tarjetas de crédito. Transferencias sin costo a través de la app BBVA, Transfiya, y 
retiros gratuitos en cajeros BBVA o corresponsales bancarios.`
};


const Guiones = () => {
    return (
        <div className="container-guiones">
            <div className="guiones">
                <h2 className="guiones__titulo">PROTOCOLO TDC PREAPROBADOS STOCK</h2>

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
