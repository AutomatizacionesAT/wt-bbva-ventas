import React, { useState, useEffect, useRef } from 'react';
import { addMonths, lastDayOfMonth, format, differenceInCalendarDays } from 'date-fns';

import './styles/CarteraYRediferido.scss';
import { ca } from 'date-fns/locale';

export const CarteraYRediferido = () => {
    //obejeto en donde cargan los datos del fomulario, cargo la fecha actual por defecto
    const [datos, setDatos] = useState({
        fechaoperacion: format(new Date(), 'yyyy-MM-dd'),
        fechaoperacionFormated: format(new Date(), 'yyyy-MM-dd'),
    });
    console.log(datos)
    
    //referencias del boto reset y del boton calcular
    const calculateButtonRef = useRef(null);
    const resetButtonRef = useRef(null);

    //useEffect para capturar el evento de teclado hago click para menos renders
    useEffect(() => {

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                // event.preventDefault();
                resetButtonRef.current.click();
            }
            if (event.key === 'Enter') {
                // event.preventDefault();
                calculateButtonRef.current.click();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', (e) => handleKeyDown(e));
        };
    }, []);


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
        });
    };

    const handleCalculate = (e) => {
        e? e.preventDefault() : '';


        const fechas = calcularFechasCuotas(datos.fechaoperacion, Number(datos.cuotas)); //mostrar
        const diasDiferencia = calcularDiferenciaDias(fechas); //mostrar

        const periodoALiquidar = calcularPeriodoALiquidar(Number(datos.cuotas)); //jersson esto puede servir para enumeras en la tabal al momento de mostrar en el portal
        const baseDiasAno = calcularBaseDias(fechas, Number(datos.cuotas)); 
        const diasFaltantes = calcularDiasFaltantes(diasDiferencia, datos.cuotas)
        const tasaDeInteresIpt = calcularTasaDeInteresIpt(datos.tasa, diasDiferencia, baseDiasAno, Number(datos.cuotas))
        const relacion = calcularRelacion(diasFaltantes, diasDiferencia, Number(datos.cuotas)) 


        //datos para mostrar en el portal
        setDatos(prevState => ({
            ...prevState, 
            fechasCuotas: fechas,
            diasDiferencia: diasDiferencia
        }));
    };


    /////funciones para los datos que se mostraran
    //calcula fechas segun las cuotas diferidas
    const calcularFechasCuotas = (fechaBase, numCuotas) => {
        const numeroCuotasFormatted = fechaBase.toString().replace(/-/g, '/');

        let fechas = [format(new Date(numeroCuotasFormatted), 'yyyy-MM-dd')]; 
      
        for (let i = 0; i <= numCuotas - 1; i++) {
          const fechaMesSiguiente = addMonths(new Date(fechaBase), i);
          const ultimoDiaMes = lastDayOfMonth(fechaMesSiguiente);
          fechas.push(format(ultimoDiaMes, 'yyyy-MM-dd'));
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
        console.log(relacion)
        return relacion
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

                    <div className={`carterarediferido__input ${datos.fechaoperacion != undefined? 'active' : ''}`}>
                        
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

                    

                    <div className={`carterarediferido__input ${datos.gracia != undefined? 'active' : ''}`}>
                        <select
                            onChange={(e) => handleInputFormat(e.target.value, 'select', 'gracia', 'graciaFormated')}
                            value={datos.graciaFormated || ""}
                            required
                        >
                            <option value="">Seleccione...</option>
                            <option value="0">0</option>
                            <option value="1">1</option>
                        </select>
                        <label>Periodo de Gracia:</label>
                    </div>

                    <div className={`carterarediferido__input ${datos.tipo != undefined? 'active' : ''}`}>
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

                    <div className={`carterarediferido__input ${datos.tasa > 0 ? 'active' : ''}`}>
                        <input
                            type="text"
                            onChange={(e) => handleInputFormat(e.target.value, 'porcentaje', 'tasa', 'tasaFormated')}
                            value={datos.tasaFormated || ""}
                            placeholder="Ingrese tasa"
                            required
                        />
                        <label>Tasa E.A:</label>
                    </div>

                    <div className='carterarediferido__button carterarediferido__button--calculate'>
                        <button
                            ref={calculateButtonRef} 
                            type="button"
                            onClick={(e) => handleCalculate(e)}
                        >
                            <span>Calcular</span>
                            <p>Enter</p>
                        </button>
                    </div>

                    <div className='carterarediferido__button carterarediferido__button--reset'>
                        <button
                            ref={resetButtonRef}
                            type="button"
                            onClick={(e) => handleReset(e)}
                        >
                            <span>Reiniciar</span>
                            <p>ESC</p>
                        </button>
                    </div>

                </form>
                
            </div>


        </section>
    );
};
