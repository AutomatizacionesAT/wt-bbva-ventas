import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { addMonths, lastDayOfMonth, format, differenceInCalendarDays } from 'date-fns';

import './styles/CarteraYRediferido.scss';
import Swal from 'sweetalert2';
import { ca, tr } from 'date-fns/locale';

import { IconSquareClose } from '../../../icons/IconSquareClose';
export const CarteraYRediferidodos = () => {
    //obejeto en donde cargan los datos del fomulario, cargo la fecha actual por defecto
    const [datos, setDatos] = useState({
        fechaoperacion: format(new Date(), 'yyyy-MM-dd'),
        fechaoperacionFormated: format(new Date(), 'yyyy-MM-dd'),
        tasa: '26,36', 
        tasaFormated: '% 24,86',
        gracia: "0",
        graciaFormated: "0",
        tipo: "Facturación",
        tipoFormated: "Facturación"
    });
    console.log(datos)

    const [isPortalOpen, setIsPortalOpen] = useState(false);

    const togglePortal = () => setIsPortalOpen(!isPortalOpen);

    const cerrarPortal = (event) => {
        if (event.target.classList.contains('carterarediferido__modal')) {
            setIsPortalOpen(false);
        }
    };


    useEffect(() => {
        const portalElement = document.getElementById('portalGeneral');
        if (isPortalOpen) {
            portalElement.classList.add('portalGeneral--enable');
        } else {
            portalElement.classList.remove('portalGeneral--enable');
        }
    }, [isPortalOpen]);

    useEffect(() => {
        // Función que detecta la tecla presionada
        const handleKeyDown = (event) => {
          if (event.key === 'Escape') {
            setIsPortalOpen(false);
          }
        };
    
        // Agregar el evento de escucha al montar el componente
        window.addEventListener('keydown', handleKeyDown);
    
        // Limpieza del evento al desmontar el componente
        return () => {
          window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const fechasDiferentes = [
        { fecha: "2011-04-30", dia: 1 },
        { fecha: "2011-07-31", dia: 2 },
        { fecha: "2011-12-31", dia: 1 },
        { fecha: "2012-03-31", dia: 1 },
        { fecha: "2012-06-30", dia: 1 },
        { fecha: "2012-09-30", dia: 2 },
        { fecha: "2012-12-31", dia: 2 },
        { fecha: "2013-03-31", dia: 2 },
        { fecha: "2013-06-30", dia: 2 },
        { fecha: "2013-08-31", dia: 1 },
        { fecha: "2013-11-30", dia: 1 },
        { fecha: "2013-12-31", dia: 2 },
        { fecha: "2014-05-31", dia: 1 },
        { fecha: "2014-08-31", dia: 2 },
        { fecha: "2014-11-30", dia: 2 },
        { fecha: "2014-12-31", dia: 2 },
        { fecha: "2015-01-31", dia: 1 },
        { fecha: "2015-02-28", dia: 1 },
        { fecha: "2015-05-31", dia: 2 },
        { fecha: "2015-10-31", dia: 1 },
        { fecha: "2015-12-31", dia: 2 },
        { fecha: "2016-01-31", dia: 2 },
        { fecha: "2016-04-30", dia: 1 },
        { fecha: "2016-07-31", dia: 2 },
        { fecha: "2016-12-31", dia: 2 },
        { fecha: "2017-04-30", dia: 2 },
        { fecha: "2017-09-30", dia: 1 },
        { fecha: "2017-12-31", dia: 2 },
        { fecha: "2018-03-31", dia: 1 },
        { fecha: "2018-06-30", dia: 1 },
        { fecha: "2018-09-30", dia: 2 },
        { fecha: "2018-12-31", dia: 2 },
        { fecha: "2019-03-31", dia: 2 },
        { fecha: "2019-06-30", dia: 2 },
        { fecha: "2019-08-31", dia: 1 },
        { fecha: "2019-11-30", dia: 1 },
        { fecha: "2019-12-31", dia: 2 }
    ];

    // sa formato y guarda el valor de los inputs
    const handleInputFormat = (value, formato, dato, datoformated) => {

        switch (formato) {
            case 'pesos':
                const valorPuroPesos = value.replace(/\D/g, '').trim();
                
                const valueFormatedPesos = valorPuroPesos.length > 0 ? `$ `+ valorPuroPesos.replace(/\B(?=(\d{3})+(?!\d))/g, '.') : "";
               
                setDatos({ ...datos, [dato]: valorPuroPesos, [datoformated]: valueFormatedPesos });
                break;

            case 'fecha':
                setDatos({ ...datos, [dato]: value , [datoformated]: value });
                break;

            case 'number':
                const valorPuroNumero = value.replace(/\D/g, '').trim();
                const valueFormatedNumero = valorPuroNumero.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
                setDatos({ ...datos, [dato]: valorPuroNumero, [datoformated]: valueFormatedNumero });
                break;
            
            case 'porcentaje':
                const valorPuroPorcentaje = value.replace(/[^\d,]/g, '').trim();
                const valorFormatedPorcentaje = valorPuroPorcentaje.length > 0 ? `% ${valorPuroPorcentaje}` : "";
                setDatos({ ...datos, [dato]: valorPuroPorcentaje, [datoformated]: valorFormatedPorcentaje });
                break;
                
            default:
                setDatos({ ...datos, [dato]: value, [datoformated]: value });
                break
        }

    };

    //limpia el formulario
    const handleReset = (e) => {
      
        e? e.preventDefault() : '';
        setDatos({
            fechaoperacion: format(new Date(), 'yyyy-MM-dd'),
            fechaoperacionFormated: format(new Date(), 'yyyy-MM-dd'),
            tasa: '28,14', 
            tasaFormated: '% 28,14',
            gracia: "0",
            graciaFormated: "0",
            tipo: "Facturación",
            tipoFormated: "Facturación"
        });
    };

    const handleCalculate = (e) => {
        e? e.preventDefault() : '';
        if(!datos.monto || !datos.cuotas || !datos.tasa || !datos.gracia || !datos.tipo) {
            Swal.fire({
                title: 'Error',
                text: 'Por favor completa todos los campos requeridos.',
                icon: 'error',
                confirmButtonText: 'Entendido'
            });
            return;
        }


        const fechas = calcularFechasCuotas(datos.fechaoperacion, Number(datos.cuotas)); //mostrar
        const diasDiferencia = calcularDiferenciaDias(fechas); //mostrar

        const periodoALiquidar = calcularPeriodoALiquidar(Number(datos.cuotas)); //jersson esto puede servir para enumeras en la tabal al momento de mostrar en el portal
        const baseDiasAno = calcularBaseDias(fechas, Number(datos.cuotas)); 
        const diasFaltantes = calcularDiasFaltantes(diasDiferencia, datos.cuotas)
        const tasaDeInteresIpt = calcularTasaDeInteresIpt(datos.tasa, diasDiferencia, baseDiasAno, Number(datos.cuotas))
        const relacion = calcularRelacion(diasFaltantes, diasDiferencia, Number(datos.cuotas)) 
        const periodosFaltantes = calcularPeriodosFaltantes(periodoALiquidar, Number(datos.cuotas))
        const factor = calcularFactor(tasaDeInteresIpt, datos.tasa, periodosFaltantes, relacion, Number(datos.cuotas))


        const calculos = calcularCalculos(Number(datos.cuotas), datos.monto, factor, tasaDeInteresIpt, Number(datos.gracia), periodoALiquidar, datos.tipo);


        //datos para mostrar en el portal
        setDatos(prevState => ({
            ...prevState, 
            fechasCuotas: fechas,
            diasDiferencia: diasDiferencia,
            saldoInicial: calculos.saldoInicial,
            valorCuota: calculos.valorCuota,
            abonoCapital: calculos.valorAbono,
            valorInteres: calculos.valorInteresPeriodo,
            pagoMinimo: calculos.pagoMinimo,
            saldoFinal: calculos.saldoFinal,
            promedioCuota: calculos.promedioCuota,
            interesTotal: calculos.interesTotal,
            totalConIntereses: calculos.totalConInteres,
            periodoALiquidar: periodoALiquidar,
        }));

        togglePortal();
    };


    /////funciones para los datos que se mostraran
    //calcula fechas segun las cuotas diferidas
    const calcularFechasCuotas = (fechaBase, numCuotas) => {
        console.log(fechaBase, numCuotas);
    
        // El valor llega como 2024-01-20 pero para leerlo con la librería fns debe ser 2024/01/20
        const numeroCuotasFormatted = fechaBase.toString().replace(/-/g, '/');
        
        // Inicializa el array de fechas con la fecha base formateada
        let fechas = [format(new Date(numeroCuotasFormatted), 'yyyy-MM-dd')]; 
    
        console.log(fechas);
    
        // Bucle para generar las fechas
        for (let i = 0; i < numCuotas; i++) {
            // Calcular la fecha del siguiente mes
            const fechaMesSiguiente = addMonths(new Date(fechaBase), i);
            const ultimoDiaMes = lastDayOfMonth(fechaMesSiguiente);
    
            // Formatear la fecha para hacer la comparación
            const fechaFormateada = format(ultimoDiaMes, 'yyyy-MM-dd');
    
            // Buscar si la fecha está en `fechasDiferentes`
            const fechaEncontrada = fechasDiferentes.find(ele => ele.fecha === fechaFormateada);
            const diasARestar = fechaEncontrada ? fechaEncontrada.dia : 0;
    
            // Restar los días si es necesario
            const fechaFinal = new Date(ultimoDiaMes);
            fechaFinal.setDate(fechaFinal.getDate() - diasARestar);
    
            // Agregar la fecha ajustada al array
            fechas.push(format(fechaFinal, 'yyyy-MM-dd'));
        }
    
        return fechas;
    };


    //calcula la diferencia de dias entre fechas
    const calcularDiferenciaDias = (fechas) => {
        return fechas.map((fecha, index) => {
            if (index === 0) return 0;
            if (index === 1) return differenceInCalendarDays(new Date(fecha), new Date(fechas[index - 1])) + 1;
            return differenceInCalendarDays(new Date(fecha), new Date(fechas[index - 1]));
        });
    };



    ////funciones para los datos nesesarios para los datos que si se van a mostrar

    //esta funcion retorna 0 1 2 3 4 5 etc ... segun las cuotas
    const calcularPeriodoALiquidar = (num) => {
        let contador = [];
        for (let i = 0; i <= num ; i++) {
            
            contador.push(i);
        }
        return contador
    }
     
    
    // calcula si el año en donde se calcula la fecha es bisiesto y de ser asi retorna 366 dias o 365 si no lo es
    const calcularBaseDias = (fechas, base) => {
        
        let arraydias = [];

        const fechaActualConBarras = fechas.map((ele, ind) => {
            return ele.replace(/-/g, "/");
        })


        const fechaObjetos = fechaActualConBarras.map((elem, indx) => {

            return new Date(elem);

        }) 

        for (let i = 0; i <= base; i++) {
            let esBisiesto = (fechaObjetos[i].getFullYear() % 4 === 0 && (fechaObjetos[i].getFullYear() % 100 !== 0 || fechaObjetos[i].getFullYear() % 400 === 0));
            let diasAno = esBisiesto ? 366 : 365;
            arraydias.push(diasAno);
        }

        return arraydias;

    }


    //toma dias total del credito y le va restando dias segun fecha de pago creo
    const calcularDiasFaltantes = (arraDias, contador) => {

        let diasFaltantes = [];
        
        const sumarDias = arraDias.reduce((a, b) => a + b, 0);
        let acomulador = sumarDias;


        for (let i = 0; i <= contador; i++) {
            if(i === 0){
                diasFaltantes.push(0);
            } else if(i === 1) {
                diasFaltantes.push(acomulador);
            } else {
                acomulador = acomulador - arraDias[i - 1];
                diasFaltantes.push(acomulador);
            }

            
        }

        return diasFaltantes
    }


    //sacar tasa de interes IPT jersson pendiente para el valor sin tantos 0 o con este esta bien
    const calcularTasaDeInteresIpt = (porcentajetasa, diasperiodo, basediasanio, contador) => {
        const porcentajeFormated = Number(porcentajetasa.replace(',', '.'));
        
        let ipt = [];
        for (let i = 0; i <= contador; i++) {
            if(i === 0) {
                ipt.push(0);
            } else {
                
                ipt.push( Number(Math.pow((1 + porcentajeFormated / 100), (diasperiodo[i] / basediasanio[i])) - 1))
            }
            
        }
        // console.log(ipt)
        return ipt;
    }

    //funcion para Relación días Faltante a dias Liquidados
    const calcularRelacion = (diasrestados, diferenciadias, contador) => {
        let relacion = [];
        for (let i = 0; i <= contador; i++) {
            if (i === 0) {
                relacion.push(0);
            } else if (diferenciadias[i] === 0) {
                relacion.push(0);
            } else {
                relacion.push(diasrestados[i] / diferenciadias[i])
            }
            
        }
        return relacion
    }
        
    // devuelve el resultado opuesto de 
    const calcularPeriodosFaltantes = (periodoALiquidar, contador) => {
        
        let periodosFaltantes = [];
        for (let i = 0; i <= contador; i++) {
            if (i === 0) {
                periodosFaltantes.push(0);
            } else {
                periodosFaltantes.push(contador - periodoALiquidar[i - 1])
            }
            
        }
        return periodosFaltantes
    }


    //calcular factor 
    const calcularFactor = (tasaipt, tasa, periodosf, rela, contador) => {

        let factor = [];
        for (let i = 0; i <= contador; i++) {
            if (i === 0) {
                factor.push(0);
            } else if (tasaipt === 0 ) {
                factor.push(0);
            } else if (tasa === 0) {
                factor.push(periodosf[i]);
            } else {

                factor.push((1 - Math.pow(1 + tasaipt[i], -rela[i])) /  tasaipt[i]);
            }


        }

        return factor
    }

    //en esta parte retornamos un objetos con valiors calculos al mismo tiempo porque no hay de otra
    const calcularCalculos = (contador, monto, fact, ipt, gracia, perili, tipo) => {
        // console.log(contador, monto, fact, ipt, gracia, perili, tipo)

        let montoNum = Number(monto);

        let interesPendiente = tipo == 'Facturación' && contador > 2 ? (Number(monto)*ipt[1]) : 0;


        let valorCuota = [];
        let valorInteresPeriodo = [];
        let abonoCapital = [];
        let cuotasss = [];
        let saldoInicial = [];
        let saldoFinal = [];
        let cuotasDos = [];
        let pagoMinimo = [];

        for (let i = 0; i <= contador; i++) {
            if (i === 0) {

                valorCuota.push(0);
                valorInteresPeriodo.push(0);
                abonoCapital.push(0);
                cuotasss.push(0);
                saldoInicial.push(montoNum);
                saldoFinal.push(montoNum);
                cuotasDos.push(0);
                pagoMinimo.push(0);

            } else if (i === 1) {

                if (fact[i] === 0) {
                    valorCuota.push(0);
                } else {
                    valorCuota.push(montoNum / fact[i])
                }

                if (ipt[i] === 0) {
                    valorInteresPeriodo.push(0);
                } else {
                    valorInteresPeriodo.push(montoNum * ipt[i])
                }

                abonoCapital.push( valorCuota[i] - valorInteresPeriodo[i])

                if (gracia === 1 && perili[1] === 1) {
                    cuotasss.push(-(abonoCapital[i]));
                    cuotasDos.push(0);
                } else if (gracia === 2 && perili[1] === 1) {
                    cuotasss.push(0);
                    cuotasDos.push(-(valorInteresPeriodo[1]));
                } else {
                    cuotasss.push(0);
                    cuotasDos.push(0);
                }

                let valorTotalCuotas = cuotasss[1] + cuotasDos[1];
                pagoMinimo.push( valorTotalCuotas +  valorCuota[1]);


                saldoInicial.push(montoNum);
                saldoFinal.push(saldoInicial[i] - abonoCapital[i] - cuotasss[i]);
                montoNum = montoNum - abonoCapital[i] - cuotasss[i];

            } else if (i === 2) {

                if (fact[i] === 0) {
                    valorCuota.push(0);
                } else {
                    valorCuota.push(montoNum / fact[i])
                }

                if (ipt[i] === 0) {
                    valorInteresPeriodo.push(0);
                } else {
                    valorInteresPeriodo.push((montoNum * ipt[i]) + interesPendiente)
                }

                abonoCapital.push( valorCuota[i] - valorInteresPeriodo[i])

                if (gracia === 1 && perili[2] === 1) {
                    cuotasss.push(-(abonoCapital[i]));
                    cuotasDos.push(0);
                } else if (gracia === 2 && perili[1] === 1) {
                    cuotasss.push(0);
                    cuotasDos.push(valorInteresPeriodo[1]);
                } else {
                    
                    cuotasss.push(0);
                    cuotasDos.push(0);
                }

                let valorTotalCuotas = cuotasss[2] + cuotasDos[2];
                
                pagoMinimo.push( valorTotalCuotas +  valorCuota[2]);

                saldoInicial.push(montoNum);
                saldoFinal.push(saldoInicial[i] - abonoCapital[i] - cuotasss[i]);
                montoNum = montoNum - abonoCapital[i] - cuotasss[i];
                
            } else {

                if (fact[i] === 0) {
                    valorCuota.push(0);
                } else {
                    
                    valorCuota.push(montoNum / fact[i])
                }

                if (ipt[i] === 0) {
                    valorInteresPeriodo.push(0);
                } else {
                    valorInteresPeriodo.push(montoNum * ipt[i])
                }

                abonoCapital.push( valorCuota[i] - valorInteresPeriodo[i])

                if (gracia === 1 && perili[i] === 1) {
                    cuotasss.push(-(abonoCapital[i]));
                    cuotasDos.push(0);
                } else if (gracia === 2 && perili[1] === 1) {
                    cuotasss.push(0);
                    cuotasDos.push(0);
                } else {
                    
                    cuotasss.push(0);
                    cuotasDos.push(0);
                }

                let valorTotalCuotas = 0;
                
                pagoMinimo.push( valorTotalCuotas +  valorCuota[i]);

                saldoInicial.push(montoNum);
                saldoFinal.push((saldoInicial[i] - abonoCapital[i] - cuotasss[i])< 0 ? 0 : saldoInicial[i] - abonoCapital[i] - cuotasss[i]);
                montoNum = montoNum - abonoCapital[i] - cuotasss[i];

                
            }
        }


        let promedioCuota = (pagoMinimo.reduce((a, b) => a + b, 0) / (gracia + contador));
        let interesTotal = (valorInteresPeriodo.reduce((a, b) => a + b, 0) ); 
        let totalConInteres = ( pagoMinimo.reduce((a, b) => a + b, 0) )

        // console.log(`valor cuota ${valorCuota}`)
        // console.log(`valor interes  periodo${valorInteresPeriodo}`)
        // console.log(`abono capital ${abonoCapital}`)
        // console.log(`cuotas ${cuotasss}`)
        // console.log(`cuotas dos ${cuotasDos}`)
        // console.log(`saldo Inicial ${saldoInicial}`)
        // console.log(`saldo final ${saldoFinal}`)
        // console.log(`pago minimo ${pagoMinimo}`)
        // console.log(`promedio ${promedioCuota}`)
        // console.log(`interes total ${interesTotal}`)
        // console.log(`total con interes ${totalConInteres}`)


        return {
            saldoInicial: saldoInicial,
            valorCuota: valorCuota,
            valorAbono: abonoCapital,
            valorInteresPeriodo: valorInteresPeriodo,
            pagoMinimo: pagoMinimo,
            saldoFinal: saldoFinal,
            promedioCuota: promedioCuota,
            interesTotal: interesTotal,
            totalConInteres: totalConInteres
        }
    }

    return (
        <section className="carterarediferido">
            <h1 className="carterarediferido__title">Cartera Y Rediferido</h1>

            <div className="carterarediferido__container">
                <div className='carterarediferido__animation'>
                    <div className="wrapper">
                    <aside className="ring"></aside>
                    <aside className="ring"></aside>
                    <aside className="ring"></aside>
                    <aside className="ring"></aside>
                    <aside className="ring"></aside>
                    <aside className="ring"></aside>
                    <aside className="ring"></aside>
                    <aside className="ring"></aside>
                    <aside className="ring"></aside>
                    <aside className="ring"></aside>
                    <aside className="ring"></aside>
                    <aside className="ring"></aside>
                    <aside className="ring"></aside>
                    <aside className="ring"></aside>
                    <aside className="ring"></aside>
                    <aside className="ring"></aside>
                    <aside className="ring"></aside>
                    <aside className="ring"></aside>
                    <aside className="ring"></aside>
                    <aside className="ring"></aside>
                </div>
                </div>
                <form className="carterarediferido__form" action="">
                    
                    <div className={`carterarediferido__input ${datos.monto > 0 ? 'active' : ''}`}>
                        <input
                            type="text"
                            onChange={(e) => handleInputFormat(e.target.value, 'pesos', 'monto', 'montoFormated')}
                            value={datos.montoFormated || ""}
                            placeholder="Ingrese el monto"
                            required
                            autoFocus
                        />
                        <label>Monto:</label>
                    </div>

                    <div className={`carterarediferido__input ${datos.fechaoperacion != undefined? 'active' : ''} hide`}>
                        
                        <input
                            type="date"
                            onChange={(e) => handleInputFormat(e.target.value, 'fecha', 'fechaoperacion', 'fechaoperacionFormated')}
                            value={datos.fechaoperacionFormated || ""}
                            required
                        />
                        <label>Fecha de Operación:</label>
                    </div>

                    <div className={`carterarediferido__input ${datos.cuotas > 0 ? 'active' : ''}`}>
                        <input
                            type="text"
                            onChange={(e) => handleInputFormat(e.target.value, 'number', 'cuotas', 'cuotasFormated')}
                            value={datos.cuotasFormated || ""}
                            placeholder="Ingrese Cuotas"
                            required
                        />
                        <label>Cuotas Diferidas:</label>
                    </div>

                    <div className={`carterarediferido__input ${datos.gracia != undefined? 'active' : ''} hide`}>
                        <div className="carterarediferido__faq">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <path
                                d="M80 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74V320c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7V160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
                                ></path>
                            </svg>
                            <span className="carterarediferido__tooltip">Se aplica así: <br /> <br/> 1) Compra con diferido a 1 ó 2 cuotas y Todos los Avances: se le debe poner (0) <br /> <br /> 2) Compra de Cartera, Rediferidos y Compra con un diferido igual o superior a 3  meses: se le debe poner (1)</span>
                        </div>
                        <select
                            onChange={(e) => handleInputFormat(e.target.value, 'select', 'gracia', 'graciaFormated')}
                            value={datos.graciaFormated || ""}
                            required
                        >
                            <option value="">Seleccione...</option>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>
                        <label>Periodo de Gracia:</label>
                    </div>

                    <div className={`carterarediferido__input ${datos.tipo != undefined? 'active' : ''} hide`}>
                        <div className="carterarediferido__faq">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <path
                                d="M80 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74V320c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7V160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
                                ></path>
                            </svg>
                            <span className="carterarediferido__tooltip"> - Facturación = Compras PO <br/> <br/> <br/> - Compras Cartera = Demás Transacciones</span>
                        </div>
                        <select
                            onChange={(e) => handleInputFormat(e.target.value, 'select', 'tipo', 'tipoFormated')}
                            value={datos.tipoFormated || ""}
                            required
                        >
                            <option value="">Seleccione...</option>
                            <option value="Facturación">Facturación</option>
                            <option value="Compra de Cartera">Compra de Cartera</option>
                        </select>
                        <label>Tipo:</label>
                    </div>

                    <div className={`carterarediferido__input ${datos.tasa ? 'active' : ''}`}>
                        <input
                            type="text"
                            onChange={(e) => handleInputFormat(e.target.value, 'porcentaje', 'tasa', 'tasaFormated')}
                            value={datos.tasaFormated || ""}
                            placeholder="Ingrese tasa"
                            required
                        />
                        <label>Tasa E.A:</label>
                    </div>

                    <div className='carterarediferido__button carterarediferido__button--reset'>
                        <button

                            type="button"
                            onClick={(e) => handleReset(e)}
                        >
                            <span>Reiniciar</span>
 
                        </button>
                    </div>

                    <div className='carterarediferido__button carterarediferido__button--calculate'>
                        <button

                            type="button"
                            onClick={(e) => handleCalculate(e)}
                        >
                            <span>Calcular</span>
  
                        </button>
                    </div>

                </form>
                
            </div>
            {isPortalOpen && ReactDOM.createPortal(
                <div className='carterarediferido__modal' onClick={(e) => cerrarPortal(e)}>
                    
                    <button className='carterarediferido__buttonclose' onClick={() => setIsPortalOpen(false)}><IconSquareClose/></button>
                    <div className='carterarediferido__table'>
                        <table>
                            <thead>
                                <tr>
                                    <th>N°</th>
                                    <th>Fecha de Corte</th>
                                    <th>Dias del periódo a liquidar</th>
                                    <th>Saldo Inicial</th>
                                    <th>Valor Cuota Periodica Total</th>
                                    <th>Valor abono a Capital</th>
                                    <th>Valor Intereses del periodo</th>
                                    <th>Pago Mínimo</th>
                                    <th>Saldo Final</th>
                                </tr>
                            </thead>
                            

                            <tbody>
                            {
                                datos.periodoALiquidar.map((ele, ind) => {
                                    return (
                                        <tr key={ind}>
                                            
                                            <td>{ele}</td>
                                            <td>{datos.fechasCuotas[ele]}</td>
                                            <td>{datos.diasDiferencia[ele]}</td>
                                            <td>$ {datos.saldoInicial[ele].toLocaleString('es-ES', { minimumFractionDigits: 3, maximumFractionDigits: 3 })}</td>
                                            <td>$ {datos.valorCuota[ele].toLocaleString('es-ES', { minimumFractionDigits: 3, maximumFractionDigits: 3 })}</td>
                                            <td>$ {datos.abonoCapital[ele].toLocaleString('es-ES', { minimumFractionDigits: 3, maximumFractionDigits: 3 })}</td>
                                            <td>$ {datos.valorInteres[ele].toLocaleString('es-ES', { minimumFractionDigits: 3, maximumFractionDigits: 3 })}</td>
                                            <td>$ {datos.pagoMinimo[ele].toLocaleString('es-ES', { minimumFractionDigits: 3, maximumFractionDigits: 3 })}</td>
                                            <td>$ {datos.saldoFinal[ele].toLocaleString('es-ES', { minimumFractionDigits: 3, maximumFractionDigits: 3 })}</td>
                                            
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </table>
                    </div>
                    
                    <div className='carterarediferido__resume'>
                        <div className='carterarediferido__resume-promedio'>
                            <h2>Promedio cuota</h2>
                            <p>$ {datos.promedioCuota.toLocaleString('es-ES', { minimumFractionDigits: 3, maximumFractionDigits: 3 })}</p>
                        </div>
                        <div className='carterarediferido__resume-interes'>
                            <h2>Intereses</h2>
                            <p>$ {datos.interesTotal.toLocaleString('es-ES', { minimumFractionDigits: 3, maximumFractionDigits: 3 })}</p>
                        </div>
                        <div className='carterarediferido__resume-total'>
                            <h2>Total Con Intereses</h2>
                           
                            <p>$ {datos.totalConIntereses.toLocaleString('es-ES', { minimumFractionDigits: 3, maximumFractionDigits: 3 })}</p>
                        </div>
                    </div>
                    
                    
                   
                </div>,
                document.getElementById('portalGeneral')
            )}

        </section>
    );
};
