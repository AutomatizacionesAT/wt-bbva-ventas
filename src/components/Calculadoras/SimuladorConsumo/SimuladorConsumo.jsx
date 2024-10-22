import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { addMonths, lastDayOfMonth, format, differenceInCalendarDays , differenceInYears } from 'date-fns';

import './styles/SimuladorConsumo.scss';
import Swal from 'sweetalert2';
import { ca, tr } from 'date-fns/locale';

import { IconSquareClose } from '../../../icons/IconSquareClose';
export const SimuladorConsumo = () => {

    //obejeto en donde cargan los datos del fomulario
    const [datos, setDatos] = useState({
        edad: "18",
        edadFormated: "18",
        fecha: format(new Date(), 'yyyy-MM-dd'),
        fechaFormated: format(new Date(), 'yyyy-MM-dd'),
        // seguro: "Si",
        // seguroFormated: "Si"
    });
    console.log(datos)

    const [isPortalOpen, setIsPortalOpen] = useState(false);

    useEffect(() => {
        const portalElement = document.getElementById('portalGeneral');
        if (isPortalOpen) {
            portalElement.classList.add('portalGeneral--enable');
        } else {
            portalElement.classList.remove('portalGeneral--enable');
        }
    }, [isPortalOpen]);

  
    const cerrarPortal = (event) => {
        if (event.target.classList.contains('carterarediferido__modal')) {
            setIsPortalOpen(false);
        }
    };

    const togglePortal = () => setIsPortalOpen(!isPortalOpen);


    /////funciones para los datos que se mostraran


    const calTasaNAMV = (tasa) => {

        const tasaConFormato = Number(tasa.replace(',', '.'));
        const datoUno = (tasaConFormato + 100) / 100;
        const datoDos = ( 1 / 12);

        return ( (datoUno ** datoDos) -1 )
       
    }
 

    const calculateColumnas = (plazo, monto) => {
        
        //variables que contendran los arrays
        let cuota = [];
        let interesesEnPesos = [];
        let saldoEnPesos = [];
        let segurosDeVida = [];

        //calculo de la tasa NAMV
        const tasaNAMV = calTasaNAMV(datos.taza);



        for (let i = 0; i <= plazo; i++) {
        
            if (i == 0){
                cuota.push(i);
                interesesEnPesos.push(0);
                saldoEnPesos.push(monto);
                segurosDeVida.push(0);
            } else if ( i == 1 ) {
                cuota.push(i);
                interesesEnPesos.push(monto * tasaNAMV);


                //seguros de vida
                if (datos.seguro == "No" || !datos.seguro) {
                    segurosDeVida.push(0);
                } else if ( datos.seguro == "Si") {

                    const annios = differenceInYears(new Date(datos.fecha), new Date());


                    let resultado = monto + (monto * tasaNAMV);
                    segurosDeVida.push(resultado);
                }
            }


        }
        return {
            "cuota": cuota,
            "interesesEnPesos": interesesEnPesos,
            "saldoEnPesos": saldoEnPesos,
            "segurosDeVida": segurosDeVida
        };

    }




    // guarda en datos cada dato puro y su valor formateado el cual sera el valor del input
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

            case 'select':
                setDatos({ ...datos, [dato]: value, [datoformated]: value });
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
            
        });
    };


    //click y hacer los calculos
    const handleCalculate = (e) => {

        e? e.preventDefault() : '';
        //si algun valor esta vacio da false pero negando dara true y dispara la alerta y no continua por el return
        // if(!datos.monto || !datos.plazo || !datos.taza || !datos.cliente || !datos.seguro || !datos.seguroSegura || !datos.mdesempleo || !datos.mdesembolso ) {
        //     Swal.fire({
        //         title: 'Error',
        //         text: 'Por favor completa todos los campos requeridos.',
        //         icon: 'error',
        //         confirmButtonText: 'Entendido'
        //     });
        //     return;
        // }


        


        const calculosVarios = calculateColumnas(Number(datos.plazo), Number(datos.monto))

        console.log(calculosVarios)

        togglePortal();
    };





    return (
        <section className="carterarediferido">
            <h1 className="carterarediferido__title">Simulador de Consumo</h1>

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
                            placeholder="Ingrese el valor"
                            required
                            autoFocus
                        />
                        <label>Monto a Financiar</label>
                    </div>

                    <div className={`carterarediferido__input ${datos.plazo != undefined && datos.plazo != ''? 'active' : ''}`}>
                    <select
                            onChange={(e) => handleInputFormat(e.target.value, 'select', 'plazo', 'plazoFormated')}
                            value={datos.plazoFormated || ""}
                            required
                        >
                            <option value="">Seleccione...</option>
                            <option value="12">12</option>
                            <option value="24">24</option>
                            <option value="36">36</option>
                            <option value="48">48</option>
                            <option value="60">60</option>
                            <option value="72">72</option>
                        </select>
                        <label>Plazo Meses</label>
                    </div>

                    <div className={`carterarediferido__input ${datos.taza > 0 ? 'active' : ''}`}>
                        <input
                            type="text"
                            onChange={(e) => handleInputFormat(e.target.value, 'porcentaje', 'taza', 'tazaFormated')}
                            value={datos.tazaFormated || ""}
                            placeholder="Ingrese taza"
                            required
                            
                        />
                        <label>Tasa de Interés(E.A.)</label>
                    </div>

                    <div className={`carterarediferido__input ${datos.cliente != undefined && datos.cliente != ''? 'active' : ''}`}>
                    <select
                            onChange={(e) => handleInputFormat(e.target.value, 'select', 'cliente', 'clienteFormated')}
                            value={datos.clienteFormated || ""}
                            required
                        >
                            <option value="">Seleccione...</option>
                            <option value="Digital">Digital</option>
                            <option value="Tradicional">Tradicional</option>
                            <option value="Premium">Premium</option>
                        </select>
                        <label>Tipo de Cliente</label>
                    </div>

                    <div className={`carterarediferido__input ${datos.seguro != undefined && datos.seguro != '' ? 'active' : ''}`}>
                        <div className="carterarediferido__faq">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <path
                                d="M80 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74V320c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7V160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
                                ></path>
                            </svg>
                            <span className="carterarediferido__tooltip"> - OPCIONAL </span>
                        </div>
                        <select
                            onChange={(e) => handleInputFormat(e.target.value, 'select', 'seguro', 'seguroFormated')}
                            value={datos.seguroFormated || ""}
                            required
                        >
                            <option value="">Seleccione...</option>
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                        </select>
                        <label>Seguro de vida</label>
                    </div>

                    <div className={`carterarediferido__input ${datos.fecha != undefined? 'active' : ''} ${datos.seguro == undefined || datos.seguro == '' || datos.seguro == 'No' ? 'hide' : ''}`}>
                        
                        <input
                            type="date"
                            onChange={(e) => handleInputFormat(e.target.value, 'fecha', 'fecha', 'fechaFormated')}
                            value={datos.fechaFormated || ""}
                            required
                        />
                        <label>Fecha de Nacimiento</label>
                    </div>

                    <div className={`carterarediferido__input ${datos.edad > 0 ? 'active' : ''} ${datos.seguro == undefined || datos.seguro == '' || datos.seguro == 'No' ? 'hide' : ''}`}>
                        <input
                            type="text"
                            onChange={(e) => handleInputFormat(e.target.value, 'number', 'edad', 'edadFormated')}
                            value={datos.edadFormated || ""}
                            placeholder="Ingrese años"
                            required

                        />
                        <label>Edad</label>
                    </div>

                    <div className={`carterarediferido__input ${datos.seguroSegura != undefined && datos.seguroSegura != '' ? 'active' : ''}`}>
                        <div className="carterarediferido__faq">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <path
                                d="M80 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74V320c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7V160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
                                ></path>
                            </svg>
                            <span className="carterarediferido__tooltip"> - DESEMPLEO <br /> <br /> - OPCIONAL </span>
                        </div>
                        <select
                            onChange={(e) => handleInputFormat(e.target.value, 'select', 'seguroSegura', 'seguroSeguraFormated')}
                            value={datos.seguroSeguraFormated || ""}
                            required
                        >
                            <option value="">Seleccione...</option>
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                        </select>
                        <label>Seguro Cuota Segura</label>
                    </div>

                    <div className={`carterarediferido__input ${datos.mdesempleo != undefined && datos.mdesempleo != '' ? 'active' : ''}`}>
                        <select
                            onChange={(e) => handleInputFormat(e.target.value, 'select', 'mdesempleo', 'mdesempleoFormated')}
                            value={datos.mdesempleoFormated || ""}
                            required
                        >
                            <option value="">Seleccione...</option>
                            <option value="Trabajadores Independientes">Trabajadores Independientes</option>
                            <option value="Trabajadores Dependientes">Trabajadores Dependientes</option>
                        </select>
                        <label>Modalidad Seguro Desempleo</label>
                    </div>
                    
                    <div className={`carterarediferido__input ${datos.mdesembolso != undefined && datos.mdesembolso != '' ? 'active' : ''}`}>
                        <select
                            onChange={(e) => handleInputFormat(e.target.value, 'select', 'mdesembolso', 'mdesembolsoFormated')}
                            value={datos.mdesembolsoFormated || ""}
                            required
                        >
                            <option value="">Seleccione...</option>
                            <option value="Abono a Cuenta">Abono a Cuenta</option>
                            <option value="Cheque de Gerencia">Cheque de Gerencia</option>
                        </select>
                        <label>Modalidad de Desembolso</label>
                    </div>

                    <div className={`carterarediferido__input ${datos.desembolsos > 0 ? 'active' : ''}`}>
                        <div className="carterarediferido__faq">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <path
                                d="M80 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74V320c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7V160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
                                ></path>
                            </svg>
                            <span className="carterarediferido__tooltip"> - Sólo en los productos en los que se cobre comisión por desembolso <br /> <br /> - Este campo se puede omitir </span>
                        </div>
                        <input
                            type="text"
                            onChange={(e) => handleInputFormat(e.target.value, 'pesos', 'desembolsos', 'desembolsosFormated')}
                            value={datos.desembolsosFormated || ""}
                            placeholder="Ingrese el valor"
                            required

                        />
                        <label>Comisión por Desembolsos</label>
                    </div>

                    <div className={`carterarediferido__input ${datos.credito > 0 ? 'active' : ''}`}>
                        <div className="carterarediferido__faq">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <path
                                d="M80 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74V320c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7V160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
                                ></path>
                            </svg>
                            <span className="carterarediferido__tooltip"> - Sólo en los productos en los que se cobre estudio de crédito <br /> <br /> - Este campo se puede omitir </span>
                        </div>
                        <input
                            type="text"
                            onChange={(e) => handleInputFormat(e.target.value, 'pesos', 'credito', 'creditoFormated')}
                            value={datos.creditoFormated || ""}
                            placeholder="Ingrese el valor"
                            required

                        />
                        <label>Estudio de Crédito</label>
                    </div>


                    <div className='carterarediferido__button carterarediferido__button--calculate'>
                        <button

                            type="button"
                            onClick={(e) => handleCalculate(e)}
                        >
                            <span>Calcular</span>
  
                        </button>
                    </div>

                    <div className='carterarediferido__button carterarediferido__button--reset'>
                        <button

                            type="button"
                            onClick={(e) => handleReset(e)}
                        >
                            <span>Reiniciar</span>
 
                        </button>
                    </div>

                    

                </form>
                
            </div>
            {isPortalOpen && ReactDOM.createPortal(
                <div className='carterarediferido__modal' onClick={(e) => cerrarPortal(e)}>
                    
                    <button className='carterarediferido__buttonclose' onClick={() => setIsPortalOpen(false)}><IconSquareClose/></button>
                   
                    
                    
                   
                </div>,
                document.getElementById('portalGeneral')
            )}

        </section>
    );
};
