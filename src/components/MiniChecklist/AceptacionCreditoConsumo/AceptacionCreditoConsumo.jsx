import React, { useState } from 'react';
import '../MiniCheck.scss';
import image1 from '@images/checklist/MINICHECKLIST/ACEPTACIONCREDITOCONSUMO/AC1.png';
import image2 from '@images/checklist/MINICHECKLIST/ACEPTACIONCREDITOCONSUMO/AC2.png';
import image3 from '@images/checklist/MINICHECKLIST/ACEPTACIONCREDITOCONSUMO/AC3.png';
import image4 from '@images/checklist/MINICHECKLIST/ACEPTACIONCREDITOCONSUMO/AC4.png';
import image5 from '@images/checklist/MINICHECKLIST/ACEPTACIONCREDITOCONSUMO/AC5.png';
import image6 from '@images/checklist/MINICHECKLIST/ACEPTACIONCREDITOCONSUMO/AC6.png';
import image7 from '@images/checklist/MINICHECKLIST/ACEPTACIONCREDITOCONSUMO/AC7.png';
import image8 from '@images/checklist/MINICHECKLIST/ACEPTACIONCREDITOCONSUMO/AC8.png';
import image9 from '@images/checklist/MINICHECKLIST/ACEPTACIONCREDITOCONSUMO/AC9.png';
import image10 from '@images/checklist/MINICHECKLIST/ACEPTACIONCREDITOCONSUMO/AC10.png';
import image11 from '@images/checklist/MINICHECKLIST/ACEPTACIONCREDITOCONSUMO/AC11.png';
import image12 from '@images/checklist/MINICHECKLIST/ACEPTACIONCREDITOCONSUMO/AC12.png';
import image13 from '@images/checklist/MINICHECKLIST/ACEPTACIONCREDITOCONSUMO/AC13.png';


const steps = [
    {
        title: "ACEPTACION CREDITO DE CONSUMO PREAPROPADO &bold(UNICAMENTE TARJETA DE CREDITO)&bold\n\n  El cliente visualizara la oferta &bold“Tienes un préstamo disponible”&bold, da clicl en la opción &bold“me interesa”&bold",
        imageUrl: image1,
        indicator: "1"
    },
    {
        title: "En caso de que el cliente no pueda ver la oferta da click en el botón &bold“mas (+)”&bold para ver todas las ofertas",
        imageUrl: image2,
        indicator: "2"
    },
    {
        title: "Asigna el monto deseado de tu préstamo",
        imageUrl: image3,
        indicator: "3"
    },
    {
        title: "Selecciona el plazo en el que deseas pagarlo",
        imageUrl: image4,
        indicator: "4"
    },
    {
        title: "Selecciona el &boldtipo de cuota&bold",
        imageUrl: image5,
        indicator: "5"
    },
    {
        title: "Desliza hasta hacia abajo y selecciona el día de pago",
        imageUrl: image6,
        indicator: "6"
    },
    {
        title: "Verifica la cuota mensual y la tasa de interés y si todo esta conforme da &boldclick&bold en &bold“lo quiero”&bold",
        imageUrl: image7,
        indicator: "7"
    },
    {
        title: "Selecciona la cuenta a la cual desea realizar el desemboloso",
        imageUrl: image8,
        indicator: "8"
    },
    {
        title: "9.	Revisa y acepta los términos contractuales de tu préstamo",
        imageUrl: image9,
        indicator: "9"
    },
    {
        title: "Verifica los detalles del préstamo y desliza hacia abajo",
        imageUrl: image10,
        indicator: "10"
    },
    {
        title: "Una vez verificados los detalles da click en &boldcontratar&bold",
        imageUrl: image11,
        indicator: "11"
    },
    {
        title: "La app ingresara de forma automática el token digital, da click en &bold“confirmar”&bold",
        imageUrl: image12,
        indicator: "12"
    },
    {
        title: "Listo, el dinero de tu préstamo estar en tu cuenta",
        imageUrl: image13,
        indicator: "13"
    },
];

const AceptacionCreditoConsumo = () => {
    const [currentStep, setCurrentStep] = useState(0);

    const handleNext = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handlePrevious = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleIndicatorClick = (index) => {
        setCurrentStep(index);
    };

    const formatText = (text) => {
        const parts = text.split(/&bold(.*?)&bold/); // Dividir el texto en partes según el patrón
        return parts.map((part, index) => {
          // Aplicar negrita a las partes que estaban entre &bold
          return index % 2 === 1 ? <strong key={index}>{part}</strong> : part;
        });
    };

    return (
        <div className="stepper-container">
            <h1 className='stepper-container__title'>ACEPTACIÓN CRÉDITO DE CONSUMO</h1>
            <div className='left'>
                <h2>Paso <span>{currentStep + 1}</span> </h2>
                <div className="stepper">
                <p>{formatText(steps[currentStep].title)}</p>
                </div>
                <div className="stepper-controls">
                    <button onClick={handlePrevious} disabled={currentStep === 0}>&lt;</button>
                    <button onClick={handleNext} disabled={currentStep === steps.length - 1}>&gt;</button>
                </div>
                <div className="stepper-indicators">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`indicator ${index === currentStep ? 'active' : ''} ${index <= currentStep ? 'completed' : 'pending'}`}
                            onClick={() => handleIndicatorClick(index)}
                        />
                    ))}
                </div>
            </div>

            <div className='rigth'>
                <div className="step-image">
                    <img src={steps[currentStep].imageUrl} alt={`Paso ${currentStep + 1}`} />
                </div>
            </div>


        </div>
    );
};

export default AceptacionCreditoConsumo;
