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

        fecha: format(new Date(), 'yyyy-MM-dd'),
        fechaFormated: format(new Date(), 'yyyy-MM-dd'),
        cliente: "Digital",
        clienteFormated: "Digital",
        credito: "0",
        creditoFormated: "$ 0",
        mdesembolso: "Abono a Cuenta",
        mdesembolsoFormated: "Abono a Cuenta",
        mdesempleo: "Trabajadores Dependientes",
        mdesempleoFormated: "Trabajadores Dependientes",
        seguro: "No",
        seguroFormated: "No",
        seguroSegura: "No",
        seguroSeguraFormated: "No",

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
        if (event.target.classList.contains('carterarediferido__modalTwo')) {
            setIsPortalOpen(false);
        }
    };

    const togglePortal = () => setIsPortalOpen(!isPortalOpen);


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

    /////funciones para los datos que se mostraran

    // datos importantes para iterar
    const seg = [
        {
          "EDAD": 18,
          "TRADICIONAL": "0,2730",
          "DIGITAL": "0,4084",
          "PREMIUM": "0,2457"
        },
        {
          "EDAD": 19,
          "TRADICIONAL": "0,2730",
          "DIGITAL": "0,4084",
          "PREMIUM": "0,2457"
        },
        {
          "EDAD": 20,
          "TRADICIONAL": "0,2730",
          "DIGITAL": "0,4084",
          "PREMIUM": "0,2457"
        },
        {
          "EDAD": 21,
          "TRADICIONAL": "0,2753",
          "DIGITAL": "0,4118",
          "PREMIUM": "0,2477"
        },
        {
          "EDAD": 22,
          "TRADICIONAL": "0,2786",
          "DIGITAL": "0,4168",
          "PREMIUM": "0,2507"
        },
        {
          "EDAD": 23,
          "TRADICIONAL": "0,2821",
          "DIGITAL": "0,4220",
          "PREMIUM": "0,2539"
        },
        {
          "EDAD": 24,
          "TRADICIONAL": "0,2855",
          "DIGITAL": "0,4272",
          "PREMIUM": "0,2570"
        },
        {
          "EDAD": 25,
          "TRADICIONAL": "0,2881",
          "DIGITAL": "0,4310",
          "PREMIUM": "0,2593"
        },
        {
          "EDAD": 26,
          "TRADICIONAL": "0,2918",
          "DIGITAL": "0,4365",
          "PREMIUM": "0,2626"
        },
        {
          "EDAD": 27,
          "TRADICIONAL": "0,2955",
          "DIGITAL": "0,4421",
          "PREMIUM": "0,2659"
        },
        {
          "EDAD": 28,
          "TRADICIONAL": "0,2983",
          "DIGITAL": "0,4462",
          "PREMIUM": "0,2684"
        },
        {
          "EDAD": 29,
          "TRADICIONAL": "0,3022",
          "DIGITAL": "0,4521",
          "PREMIUM": "0,2720"
        },
        {
          "EDAD": 30,
          "TRADICIONAL": "0,3061",
          "DIGITAL": "0,4580",
          "PREMIUM": "0,2755"
        },
        {
          "EDAD": 31,
          "TRADICIONAL": "0,3115",
          "DIGITAL": "0,4660",
          "PREMIUM": "0,2803"
        },
        {
          "EDAD": 32,
          "TRADICIONAL": "0,3157",
          "DIGITAL": "0,4723",
          "PREMIUM": "0,2841"
        },
        {
          "EDAD": 33,
          "TRADICIONAL": "0,3212",
          "DIGITAL": "0,4805",
          "PREMIUM": "0,2890"
        },
        {
          "EDAD": 34,
          "TRADICIONAL": "0,3256",
          "DIGITAL": "0,4871",
          "PREMIUM": "0,2930"
        },
        {
          "EDAD": 35,
          "TRADICIONAL": "0,3290",
          "DIGITAL": "0,4922",
          "PREMIUM": "0,2961"
        },
        {
          "EDAD": 36,
          "TRADICIONAL": "0,3337",
          "DIGITAL": "0,4992",
          "PREMIUM": "0,3003"
        },
        {
          "EDAD": 37,
          "TRADICIONAL": "0,3397",
          "DIGITAL": "0,5082",
          "PREMIUM": "0,3057"
        },
        {
          "EDAD": 38,
          "TRADICIONAL": "0,3470",
          "DIGITAL": "0,5191",
          "PREMIUM": "0,3123"
        },
        {
          "EDAD": 39,
          "TRADICIONAL": "0,3545",
          "DIGITAL": "0,5304",
          "PREMIUM": "0,3191"
        },
        {
          "EDAD": 40,
          "TRADICIONAL": "0,3633",
          "DIGITAL": "0,5436",
          "PREMIUM": "0,3270"
        },
        {
          "EDAD": 41,
          "TRADICIONAL": "0,3736",
          "DIGITAL": "0,5590",
          "PREMIUM": "0,3362"
        },
        {
          "EDAD": 42,
          "TRADICIONAL": "0,3865",
          "DIGITAL": "0,5782",
          "PREMIUM": "0,3478"
        },
        {
          "EDAD": 43,
          "TRADICIONAL": "0,4045",
          "DIGITAL": "0,6051",
          "PREMIUM": "0,3640"
        },
        {
          "EDAD": 44,
          "TRADICIONAL": "0,4264",
          "DIGITAL": "0,6379",
          "PREMIUM": "0,3837"
        },
        {
          "EDAD": 45,
          "TRADICIONAL": "0,4549",
          "DIGITAL": "0,6805",
          "PREMIUM": "0,4094"
        },
        {
          "EDAD": 46,
          "TRADICIONAL": "0,4650",
          "DIGITAL": "0,6957",
          "PREMIUM": "0,4185"
        },
        {
          "EDAD": 47,
          "TRADICIONAL": "0,5098",
          "DIGITAL": "0,7627",
          "PREMIUM": "0,4588"
        },
        {
          "EDAD": 48,
          "TRADICIONAL": "0,5636",
          "DIGITAL": "0,8433",
          "PREMIUM": "0,5073"
        },
        {
          "EDAD": 49,
          "TRADICIONAL": "0,6244",
          "DIGITAL": "0,9342",
          "PREMIUM": "0,5620"
        },
        {
          "EDAD": 50,
          "TRADICIONAL": "0,6912",
          "DIGITAL": "1,0342",
          "PREMIUM": "0,6221"
        },
        {
          "EDAD": 51,
          "TRADICIONAL": "0,7607",
          "DIGITAL": "1,1382",
          "PREMIUM": "0,6846"
        },
        {
          "EDAD": 52,
          "TRADICIONAL": "0,8306",
          "DIGITAL": "1,2427",
          "PREMIUM": "0,7475"
        },
        {
          "EDAD": 53,
          "TRADICIONAL": "0,8974",
          "DIGITAL": "1,3427",
          "PREMIUM": "0,8077"
        },
        {
          "EDAD": 54,
          "TRADICIONAL": "0,9599",
          "DIGITAL": "1,4362",
          "PREMIUM": "0,8639"
        },
        {
          "EDAD": 55,
          "TRADICIONAL": "1,0142",
          "DIGITAL": "1,5174",
          "PREMIUM": "0,9128"
        },
        {
          "EDAD": 56,
          "TRADICIONAL": "1,0588",
          "DIGITAL": "1,5841",
          "PREMIUM": "0,9529"
        },
        {
          "EDAD": 57,
          "TRADICIONAL": "1,1506",
          "DIGITAL": "1,7215",
          "PREMIUM": "1,0356"
        },
        {
          "EDAD": 58,
          "TRADICIONAL": "1,1878",
          "DIGITAL": "1,7771",
          "PREMIUM": "1,0690"
        },
        {
          "EDAD": 59,
          "TRADICIONAL": "1,2384",
          "DIGITAL": "1,8528",
          "PREMIUM": "1,1146"
        },
        {
          "EDAD": 60,
          "TRADICIONAL": "1,3154",
          "DIGITAL": "1,9681",
          "PREMIUM": "1,1839"
        },
        {
          "EDAD": 61,
          "TRADICIONAL": "1,4232",
          "DIGITAL": "2,1293",
          "PREMIUM": "1,2809"
        },
        {
          "EDAD": 62,
          "TRADICIONAL": "1,5588",
          "DIGITAL": "2,3323",
          "PREMIUM": "1,4029"
        },
        {
          "EDAD": 63,
          "TRADICIONAL": "1,7228",
          "DIGITAL": "2,5776",
          "PREMIUM": "1,5505"
        },
        {
          "EDAD": 64,
          "TRADICIONAL": "1,9143",
          "DIGITAL": "2,8641",
          "PREMIUM": "1,7229"
        },
        {
          "EDAD": 65,
          "TRADICIONAL": "2,1269",
          "DIGITAL": "3,1821",
          "PREMIUM": "1,9142"
        },
        {
          "EDAD": 66,
          "TRADICIONAL": "2,3627",
          "DIGITAL": "3,5350",
          "PREMIUM": "2,1265"
        },
        {
          "EDAD": 67,
          "TRADICIONAL": "2,6107",
          "DIGITAL": "3,9060",
          "PREMIUM": "2,3496"
        },
        {
          "EDAD": 68,
          "TRADICIONAL": "2,8602",
          "DIGITAL": "4,2793",
          "PREMIUM": "2,5742"
        },
        {
          "EDAD": 69,
          "TRADICIONAL": "3,1122",
          "DIGITAL": "4,6564",
          "PREMIUM": "2,8010"
        },
        {
          "EDAD": 70,
          "TRADICIONAL": "3,3727",
          "DIGITAL": "5,0461",
          "PREMIUM": "3,0354"
        },
        {
          "EDAD": 71,
          "TRADICIONAL": "3,4294",
          "DIGITAL": "5,1309",
          "PREMIUM": "3,0864"
        },
        {
          "EDAD": 72,
          "TRADICIONAL": "3,7345",
          "DIGITAL": "5,5874",
          "PREMIUM": "3,3610"
        },
        {
          "EDAD": 73,
          "TRADICIONAL": "4,0788",
          "DIGITAL": "6,1026",
          "PREMIUM": "3,6710"
        },
        {
          "EDAD": 74,
          "TRADICIONAL": "4,5549",
          "DIGITAL": "6,8148",
          "PREMIUM": "4,0994"
        },
        {
          "EDAD": 75,
          "TRADICIONAL": "5,1169",
          "DIGITAL": "7,6557",
          "PREMIUM": "4,6052"
        },
        {
          "EDAD": 76,
          "TRADICIONAL": "5,9027",
          "DIGITAL": "8,8314",
          "PREMIUM": "5,3124"
        },
        {
          "EDAD": 77,
          "TRADICIONAL": "6,3877",
          "DIGITAL": "9,5570",
          "PREMIUM": "5,7489"
        },
        {
          "EDAD": 78,
          "TRADICIONAL": "7,1592",
          "DIGITAL": "10,7114",
          "PREMIUM": "6,4433"
        },
        {
          "EDAD": 79,
          "TRADICIONAL": "8,3180",
          "DIGITAL": "12,4450",
          "PREMIUM": "7,4862"
        },
        {
          "EDAD": 80,
          "TRADICIONAL": "9,4172",
          "DIGITAL": "14,0896",
          "PREMIUM": "8,4755"
        },
        {
          "EDAD": 81,
          "TRADICIONAL": "10,8220",
          "DIGITAL": "16,1915",
          "PREMIUM": "9,7398"
        },
        {
          "EDAD": 82,
          "TRADICIONAL": "12,6548",
          "DIGITAL": "18,9336",
          "PREMIUM": "11,3893"
        },
        {
          "EDAD": 83,
          "TRADICIONAL": "14,9715",
          "DIGITAL": "22,3999",
          "PREMIUM": "13,4744"
        },
        {
          "EDAD": 84,
          "TRADICIONAL": "17,4360",
          "DIGITAL": "26,0871",
          "PREMIUM": "15,6924"
        },
        {
          "EDAD": 85,
          "TRADICIONAL": "20,6510",
          "DIGITAL": "30,8973",
          "PREMIUM": "18,5859"
        },
        {
          "EDAD": 86,
          "TRADICIONAL": "23,1189",
          "DIGITAL": "34,5896",
          "PREMIUM": "20,8070"
        },
        {
          "EDAD": 87,
          "TRADICIONAL": "25,8922",
          "DIGITAL": "38,7390",
          "PREMIUM": "23,3030"
        },
        {
          "EDAD": 88,
          "TRADICIONAL": "29,0130",
          "DIGITAL": "43,4082",
          "PREMIUM": "26,1117"
        },
        {
          "EDAD": 89,
          "TRADICIONAL": "32,4940",
          "DIGITAL": "48,6164",
          "PREMIUM": "29,2446"
        },
        {
          "EDAD": 90,
          "TRADICIONAL": "36,4153",
          "DIGITAL": "54,4832",
          "PREMIUM": "32,7737"
        }
    ]

    const seg2 = [
        {
            "nombre": "Trabajadores Independientes",
            "numero": 0.075
        },
        {
            "nombre": "Trabajadores Dependientes",
            "numero": 0.063
        }
    ]
    
    ///////////

    const calTasaNAMV = (tasa) => {

        const tasaConFormato = Number(tasa.replace(',', '.'));
        const datoUno = (tasaConFormato + 100) / 100;
        const datoDos = ( 1 / 12);

        return ( (datoUno ** datoDos) -1 )
       
    }

    const calCuotaMenSinSeguros = (tasa, nPeriodos, valorActual) => {
        const pago = (tasa * valorActual) / (1 - Math.pow(1 + tasa, -nPeriodos));
        return pago;
    }

    // funcion parecida a TIR de excel echo por chat gpt
    const calcularTIR = (flujosCaja, guess = 0.1) => {
        const precision = 1e-4; // Precisión deseada para el cálculo
        const maxIter = 1000;   // Máximo número de iteraciones
        let tasa = guess;
    
        const npv = (tasa) => {
            return flujosCaja.reduce((sum, flujo, i) => sum + flujo / Math.pow(1 + tasa, i), 0);
        };
    
        const npvPrime = (tasa) => {
            return flujosCaja.reduce((sum, flujo, i) => sum - (i * flujo) / Math.pow(1 + tasa, i + 1), 0);
        };
    
        for (let iter = 0; iter < maxIter; iter++) {
            const npvValue = npv(tasa);
            const npvDeriv = npvPrime(tasa);
            const newTasa = tasa - npvValue / npvDeriv;
    
            if (Math.abs(newTasa - tasa) < precision) {
                return newTasa;
            }
    
            tasa = newTasa;
        }
    
        return tasa; // Retorna la tasa si alcanza el máximo de iteraciones
    };
    

    
    
   
    
      
 
 

    const calculateColumnas = (plazo, monto) => {
        
        //variables que contendran los arrays
        let cuota = [];
        let cuotaSeguro = [];
        let cuotaPesos = [];
        let interesesEnPesos = [];
        let abonoCapital = [];
        let segurosDeVida = [];
        let seguroCuotaSegura = [];
        let saldoEnPesos = [];


        let flujosCaja= [];

        //calculo de la tasa NAMV
        const tasaNAMV = calTasaNAMV(datos.taza);
        //años para seguros de vida
        const annios = differenceInYears(new Date(), new Date(datos.fecha));
        // cuota mensual sin seguros
        const unaCuotaMensualSinSeguro = calCuotaMenSinSeguros(tasaNAMV, Number(datos.plazo), Number(datos.monto));
        

        for (let i = 0; i <= plazo; i++) {
        
            if (i == 0){
                cuota.push(i);
                cuotaSeguro.push(0);
                cuotaPesos.push(0);
                interesesEnPesos.push(0);
                abonoCapital.push(0);
                segurosDeVida.push(0);
                seguroCuotaSegura.push(0);
                saldoEnPesos.push(monto);

                flujosCaja.push(saldoEnPesos[i])
            } else if ( i == 1 ) {
                cuota.push(i);


                interesesEnPesos.push(saldoEnPesos[i-1] * tasaNAMV);


                //seguros de vida
                if (datos.seguro == "No") {
                    segurosDeVida.push(0);
                } else if ( datos.seguro == "Si") {

                   

                    switch (datos.cliente) {
                        case 'Tradicional':
                            
                            const coincidenciaT = seg.find(ele => ele.EDAD == annios) || {"EDAD": 0, "TRADICIONAL": "0,0", "DIGITAL": "0,0", "PREMIUM": "0,0"};
                            
                            const formateoT = Number(coincidenciaT.TRADICIONAL.replace(',', '.'));

                            segurosDeVida.push( ( (saldoEnPesos[i-1] + interesesEnPesos[i]) * (formateoT) ) / 1000 ); 
                            
                            break;
                        case 'Digital':
                            const coincidenciaD = seg.find(ele => ele.EDAD == annios) || {"EDAD": 0, "TRADICIONAL": "0,0", "DIGITAL": "0,0", "PREMIUM": "0,0"};
                            
                            const formateoD = Number(coincidenciaD.DIGITAL.replace(',', '.'));

                            segurosDeVida.push( ( (saldoEnPesos[i-1] + interesesEnPesos[i]) * (formateoD) ) / 1000 );

                            break;
                        case 'Premium':
                            const coincidenciaP = seg.find(ele => ele.EDAD == annios) || {"EDAD": 0, "TRADICIONAL": "0,0", "DIGITAL": "0,0", "PREMIUM": "0,0"};
                            
                            const formateoP = Number(coincidenciaP.PREMIUM.replace(',', '.'));

                            segurosDeVida.push( ( (saldoEnPesos[i-1] + interesesEnPesos[i]) * (formateoP) ) / 1000 );
                            
                            break;

                        default:
                    }

                }

                //cuotaseguro 
                if (saldoEnPesos[i-1] < 0.01) {
                    cuotaSeguro.push(0)
                } else {
                    cuotaSeguro.push(unaCuotaMensualSinSeguro+segurosDeVida[i])
                }

                //abono capital
                abonoCapital.push(cuotaSeguro[i] - interesesEnPesos[i] - segurosDeVida[i])

                //saldo en pesos
                if(saldoEnPesos[i - 1] <= ((datos.credito? Number(datos.credito) : 0) + 0.01)) {
                    saldoEnPesos.push(0)
                } else {
                    saldoEnPesos.push(saldoEnPesos[i - 1] - abonoCapital[i])
                }
                
                //cuota segura
                if(datos.seguroSegura == "Si") {
                    switch (datos.mdesempleo) {
                        case "Trabajadores Independientes":
                            const coicidenciaTOne = seg2.find(ele => ele.nombre == "Trabajadores Independientes")
                            seguroCuotaSegura.push(coicidenciaTOne.numero * cuotaSeguro[i])
                        break;
                        case "Trabajadores Dependientes":
                            const coicidenciaTTwo = seg2.find(ele => ele.nombre == "Trabajadores Dependientes")
                            seguroCuotaSegura.push((coicidenciaTTwo.numero * cuotaSeguro[i] * 0.19) + (coicidenciaTTwo.numero * cuotaSeguro[i]))
                        break;
                        default:
                    }
                } else {
                    seguroCuotaSegura.push(0)
                }

                //cuota total en pesos
                
                if (saldoEnPesos[i-1] < 0.01) {
                    cuotaPesos.push(0)
                } else {
                    cuotaPesos.push(unaCuotaMensualSinSeguro + segurosDeVida[i] + seguroCuotaSegura[i] )
                }

                flujosCaja.push(-cuotaSeguro[i] - seguroCuotaSegura[i])
            
            } else {
                cuota.push(i);


                interesesEnPesos.push(saldoEnPesos[i-1] * tasaNAMV);


                //seguros de vida
                if (datos.seguro == "No") {
                    segurosDeVida.push(0);
                } else if ( datos.seguro == "Si") {

                    

                    switch (datos.cliente) {
                        case 'Tradicional':
                            
                            const coincidenciaT = seg.find(ele => ele.EDAD == annios) || {"EDAD": 0, "TRADICIONAL": "0,0", "DIGITAL": "0,0", "PREMIUM": "0,0"};
                            
                            const formateoT = Number(coincidenciaT.TRADICIONAL.replace(',', '.'));

                            segurosDeVida.push( ( (saldoEnPesos[i-1] + interesesEnPesos[i]) * (formateoT) ) / 1000 ); 
                            
                            break;
                        case 'Digital':
                            const coincidenciaD = seg.find(ele => ele.EDAD == annios) || {"EDAD": 0, "TRADICIONAL": "0,0", "DIGITAL": "0,0", "PREMIUM": "0,0"};
                            
                            const formateoD = Number(coincidenciaD.DIGITAL.replace(',', '.'));

                            segurosDeVida.push( ( (saldoEnPesos[i-1] + interesesEnPesos[i]) * (formateoD) ) / 1000 );

                            break;
                        case 'Premium':
                            const coincidenciaP = seg.find(ele => ele.EDAD == annios) || {"EDAD": 0, "TRADICIONAL": "0,0", "DIGITAL": "0,0", "PREMIUM": "0,0"};
                            
                            const formateoP = Number(coincidenciaP.PREMIUM.replace(',', '.'));

                            segurosDeVida.push( ( (saldoEnPesos[i-1] + interesesEnPesos[i]) * (formateoP) ) / 1000 );
                            
                            break;

                        default:
                    }

                }

                //cuotaseguro 
                if (saldoEnPesos[i-1] < 0.01) {
                    cuotaSeguro.push(0)
                } else {
                    cuotaSeguro.push(unaCuotaMensualSinSeguro+segurosDeVida[i])
                }

                //abono capital
                abonoCapital.push(cuotaSeguro[i] - interesesEnPesos[i] - segurosDeVida[i])

                //saldo en pesos
                if(saldoEnPesos[i - 1] <= ((datos.credito? Number(datos.credito) : 0) + 0.01)) {
                    saldoEnPesos.push(0)
                } else {
                    saldoEnPesos.push(saldoEnPesos[i - 1] - abonoCapital[i])
                }
                
                //cuota segura
                if(datos.seguroSegura == "Si") {
                    switch (datos.mdesempleo) {
                        case "Trabajadores Independientes":
                            const coicidenciaTOne = seg2.find(ele => ele.nombre == "Trabajadores Independientes")
                            seguroCuotaSegura.push(coicidenciaTOne.numero * cuotaSeguro[i])
                        break;
                        case "Trabajadores Dependientes":
                            const coicidenciaTTwo = seg2.find(ele => ele.nombre == "Trabajadores Dependientes")
                            seguroCuotaSegura.push((coicidenciaTTwo.numero * cuotaSeguro[i] * 0.19) + (coicidenciaTTwo.numero * cuotaSeguro[i]))
                        break;
                        default:
                    }
                } else {
                    seguroCuotaSegura.push(0)
                }

                //cuota total en pesos
                
                if (saldoEnPesos[i-1] < 0.01) {
                    cuotaPesos.push(0)
                } else {
                    cuotaPesos.push(unaCuotaMensualSinSeguro + segurosDeVida[i] + seguroCuotaSegura[i] )
                }


                flujosCaja.push(-cuotaSeguro[i] - seguroCuotaSegura[i])
            }


        }

        //otros datos que solo puedo sacar al final 
        unaCuotaMensualSinSeguro + segurosDeVida[1] + seguroCuotaSegura[1]
        const cuotaMensualVida = unaCuotaMensualSinSeguro + segurosDeVida[1];
        const cuotaMensualSeguro = unaCuotaMensualSinSeguro + segurosDeVida[1] + seguroCuotaSegura[1];

        const vtuPesos = abonoCapital.reduce((a, b) => a + b, 0);
        const vtuIntereses = interesesEnPesos.reduce((a, b) => a + b, 0);
        const vtuSegurosVida = segurosDeVida.reduce((a, b) => a + b, 0);
        const vtuSeguroCuotaSegura = seguroCuotaSegura.reduce((a, b) => a + b, 0);
        const tir = calcularTIR(flujosCaja);
        const vtuPorcentual = ((1 + tir) ** 12 - 1)*100;
        

        return {
            "cuota": cuota,
            "cuotaSeguro": cuotaSeguro,
            "cuotaPesos": cuotaPesos,
            "interesesEnPesos": interesesEnPesos,
            "abonoCapital": abonoCapital,
            "segurosDeVida": segurosDeVida,
            "seguroCuotaSegura": seguroCuotaSegura,
            "saldoEnPesos": saldoEnPesos,
            

            "tasaNAMV": tasaNAMV,
            "unaCuotaMensualSinSeguro": unaCuotaMensualSinSeguro,
            "cuotaMensualVida": cuotaMensualVida,
            "cuotaMensualSeguro": cuotaMensualSeguro,

            "vtuPesos": vtuPesos,
            "vtuIntereses": vtuIntereses,
            "vtuSegurosVida": vtuSegurosVida,
            "vtuSeguroCuotaSegura": vtuSeguroCuotaSegura,
            "vtuPorcentual": vtuPorcentual,

            "annios": annios,
            
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
            fecha: format(new Date(), 'yyyy-MM-dd'),
            fechaFormated: format(new Date(), 'yyyy-MM-dd'),
            cliente: "Digital",
            clienteFormated: "Digital",
            credito: "0",
            creditoFormated: "$ 0",
            mdesembolso: "Abono a Cuenta",
            mdesembolsoFormated: "Abono a Cuenta",
            mdesempleo: "Trabajadores Dependientes",
            mdesempleoFormated: "Trabajadores Dependientes",
            seguro: "No",
            seguroFormated: "No",
            seguroSegura: "No",
            seguroSeguraFormated: "No",
        });
    };


    //click y hacer los calculos
    const handleCalculate = (e) => {

        e? e.preventDefault() : '';
        // si algun valor esta vacio da false pero negando dara true y dispara la alerta y no continua por el return
        if(!datos.monto || !datos.plazo || !datos.taza || !datos.cliente || !datos.seguro || !datos.seguroSegura || !datos.mdesempleo || !datos.mdesembolso ) {
            Swal.fire({
                title: 'Error',
                text: 'Por favor completa todos los campos requeridos.',
                icon: 'error',
                confirmButtonText: 'Entendido'
            });
            return;
        }


        


        const calculosVarios = calculateColumnas(Number(datos.plazo), Number(datos.monto))

        console.log(calculosVarios)

        setDatos((prev) => {
            return {
                ...prev,
                "datosTabla" : calculosVarios
            }
        })

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

                    <div className={`carterarediferido__input ${datos.cliente != undefined && datos.cliente != ''? 'active' : ''} hide`}>
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

                    <div className={`carterarediferido__input ${datos.seguro != undefined && datos.seguro != '' ? 'active' : ''} hide`}>
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

                    {/* <div className={`carterarediferido__input ${datos.edad > 0 ? 'active' : ''} ${datos.seguro == undefined || datos.seguro == '' || datos.seguro == 'No' ? 'hide' : ''}`}>
                        <input
                            type="text"
                            onChange={(e) => handleInputFormat(e.target.value, 'number', 'edad', 'edadFormated')}
                            value={datos.edadFormated || ""}
                            placeholder="Ingrese años"
                            required

                        />
                        <label>Edad</label>
                    </div> */}

                    <div className={`carterarediferido__input ${datos.seguroSegura != undefined && datos.seguroSegura != '' ? 'active' : ''} hide`}>
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

                    <div className={`carterarediferido__input ${datos.mdesempleo != undefined && datos.mdesempleo != '' ? 'active' : ''} hide`}>
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
                    
                    <div className={`carterarediferido__input ${datos.mdesembolso != undefined && datos.mdesembolso != '' ? 'active' : ''} hide`}>
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

                    {/* <div className={`carterarediferido__input ${datos.desembolsos > 0 ? 'active' : ''}`}>
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
                    </div> */}

                    <div className={`carterarediferido__input ${datos.credito > 0 ? 'active' : ''} hide`}>
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
                <div className='carterarediferido__modalTwo' onClick={(e) => cerrarPortal(e)}>
                    
                    <button className='carterarediferido__buttonclose' onClick={() => setIsPortalOpen(false)}><IconSquareClose/></button>
                   
                    <div className='carterarediferido__resumeTwo'>
                        <div>
                            <h2>DETALLES DEL CRÉDITO</h2>

                            <p><span>Monto a financiar:</span> $ {datos.datosTabla.saldoEnPesos[0].toLocaleString('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 2 })}</p>
                            <p><span>Plazo en meses:</span> {datos.plazo}</p>
                            <p><span>Taza de interés (E.A.):</span> % {datos.taza}</p>
                            <p><span>Taza N.A.M.V.:</span> % {(datos.datosTabla.tasaNAMV * 100).toLocaleString('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 2 })}</p>
                            <p><span>1 Cuota mensual sin seguros:</span> $ {datos.datosTabla.unaCuotaMensualSinSeguro.toLocaleString('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 2 })}</p>
                            <p><span>1 Cuota mensual con seguro de vida:</span> $ {datos.datosTabla.cuotaMensualVida.toLocaleString('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 2 })}</p>
                            <p><span>1 Cuota mensual con seguro de vida y cuota segura:</span> $ {datos.datosTabla.cuotaMensualSeguro.toLocaleString('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 2 })}</p>

                        </div>
                        <div>
                            <h2>INFORMACIÓN UVT</h2>

                            <p><span>VTU pesos capital:</span> $ {datos.datosTabla.vtuPesos.toLocaleString('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 2 })}</p>
                            <p><span>VTU pesos interéses</span> $ {datos.datosTabla.vtuIntereses.toLocaleString('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 2 })}</p>
                            <p><span>VTU pesos seguros de vida</span> $ {datos.datosTabla.vtuSegurosVida.toLocaleString('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 2 })}</p>
                            <p><span>VTU pesos seguros cuota segura</span> $ {datos.datosTabla.vtuSeguroCuotaSegura.toLocaleString('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 2 })}</p>
                            <p><span>VTU porcentual </span>% {datos.datosTabla.vtuPorcentual.toLocaleString('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 1 })}</p>

                        </div>
                        <div>
                            <h2>DETALLES SEGUROS Y GASTOS</h2>

                            <p><span>Fecha de simulación:</span> {format(new Date(), 'yyyy-MM-dd')}</p>
                            <p><span>Tipo de cliente:</span> {datos.cliente}</p>
                            <p><span>Seguro de vida:</span> {datos.seguro}</p>
                            <p><span>Fecha de nacimiento:</span> {datos.fecha}</p>
                            <p><span>Edad:</span> {datos.datosTabla.annios} años</p>
                            <p><span>Seguro de vida primera cuota:</span> $ {datos.datosTabla.segurosDeVida[1].toLocaleString('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 2 })}</p>
                            <p><span>Seguro cuota segura, desempleo , opcional:</span> {datos.seguroSegura}</p>
                            <p><span>Modalidad seguro de desempleo:</span> {datos.mdesempleo}</p>
                            <p><span>Modalidad de desembolso:</span> {datos.mdesembolso}</p>
                            <p><span>Estudio de crédito:</span> {datos.credito? `$ ${Number(datos.credito).toLocaleString('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 2 })}` : 'No'}</p>
                            <p><span>Costo cheque:</span> $ {datos.mdesembolso == "Abono a Cuenta" ? 0 : 29.643}</p>

                        </div>
                    </div>

                    <div className='carterarediferido__tableTwo'>
                        <table>
                            <thead>
                                <tr>
                                    <th>CUOTA</th>
                                    <th>CUOTA INCLUIDO SEGURO DE VIDA </th>
                                    <th>CUOTA TOTAL EN PESOS</th>
                                    <th>INTERESES EN PESOS</th>
                                    <th>ABONO CAPITAL</th>
                                    <th>SEGUROS DE VIDA</th>
                                    <th>SEGURO CUOTA SEGURA DESEMPLEO</th>
                                    <th>SALDO EN PESOS</th>
                                </tr>
                            </thead>
                            

                            <tbody>
                            {
                                datos.datosTabla.cuota.map((ele, ind) => {
                                    return (
                                        <tr key={ind}>
                                            <td>{ele}</td>
                                            <td>$ {datos.datosTabla.cuotaSeguro[ele].toLocaleString('es-ES', { minimumFractionDigits: 1, maximumFractionDigits: 2 })}</td>
                                            <td>$ {datos.datosTabla.cuotaPesos[ele].toLocaleString('es-ES', { minimumFractionDigits: 1, maximumFractionDigits: 2 })}</td>
                                            <td>$ {datos.datosTabla.interesesEnPesos[ele].toLocaleString('es-ES', { minimumFractionDigits: 1, maximumFractionDigits: 2 })}</td>
                                            <td>$ {datos.datosTabla.abonoCapital[ele].toLocaleString('es-ES', { minimumFractionDigits: 1, maximumFractionDigits: 2 })}</td>
                                            <td>$ {datos.datosTabla.segurosDeVida[ele].toLocaleString('es-ES', { minimumFractionDigits: 1, maximumFractionDigits: 2 })}</td>
                                            <td>$ {datos.datosTabla.seguroCuotaSegura[ele].toLocaleString('es-ES', { minimumFractionDigits: 1, maximumFractionDigits: 2 })}</td>
                                            <td>$ {datos.datosTabla.saldoEnPesos[ele].toLocaleString('es-ES', { minimumFractionDigits: 1, maximumFractionDigits: 2 })}</td>
                                            
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </table>
                    </div>
                    
                    
                   
                </div>,
                document.getElementById('portalGeneral')
            )}

        </section>
    );
};
