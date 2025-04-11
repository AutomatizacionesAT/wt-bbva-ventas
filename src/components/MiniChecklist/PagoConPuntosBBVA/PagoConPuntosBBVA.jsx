import React, { useState } from 'react';
import '../MiniCheck.scss';

// Importar imágenes con prefijo específico para este componente
import puntosStep1 from '../../../assets/images/checklist/MINICHECKLIST/PAGOCONPUNTOSBBVA/puntos-step1.png';
import puntosStep2 from '../../../assets/images/checklist/MINICHECKLIST/PAGOCONPUNTOSBBVA/puntos-step2.png';
import puntosStep3 from '../../../assets/images/checklist/MINICHECKLIST/PAGOCONPUNTOSBBVA/puntos-step3.png';
import puntosStep4 from '../../../assets/images/checklist/MINICHECKLIST/PAGOCONPUNTOSBBVA/puntos-step4.png';
import puntosStep5 from '../../../assets/images/checklist/MINICHECKLIST/PAGOCONPUNTOSBBVA/puntos-step5.png';
import puntosStep6 from '../../../assets/images/checklist/MINICHECKLIST/PAGOCONPUNTOSBBVA/puntos-step6.png';
import puntosStep7 from '../../../assets/images/checklist/MINICHECKLIST/PAGOCONPUNTOSBBVA/puntos-step7.png';
import puntosStep8 from '../../../assets/images/checklist/MINICHECKLIST/PAGOCONPUNTOSBBVA/puntos-step8.png';

const steps = [
    {
        title: "Ingresa a la App del banco y haz clic en el botón &boldIniciar Sesión&bold",
        imageUrl: puntosStep1,
        indicator: "1"
    },
    {
        title: "Ingresa con tu usuario y contraseña",
        imageUrl: puntosStep2,
        indicator: "2"
    },
    {
        title: "Ingresa en el Menú en la parte superior derecha",
        imageUrl: puntosStep3,
        indicator: "3"
    },
    {
        title: "Selecciona la opción &boldpuntos y promociones&bold",
        imageUrl: puntosStep4,
        indicator: "4"
    },
    {
        title: "Te aparecerá un banner con la siguiente información &boldte devolvemos el dinero que usaste en tus compras&bold da clic en &boldme interesa&bold",
        imageUrl: puntosStep5,
        indicator: "5"
    },
    {
        title: "Haz clic en el botón &boldUsar mis puntos&bold",
        imageUrl: puntosStep6,
        indicator: "6"
    },
    {
        title: "Te aparecerá un resumen del valor de la compra y los puntos a canjear, haz clic en &boldConfirmar uso de puntos&bold",
        imageUrl: puntosStep7,
        indicator: "7"
    },
    {
        title: "Te aparecerá un mensa de &boldSolicitud exitosa&bold confirmando que la operación se realizo con éxito. Haz clic en &boldSalir&bold",
        imageUrl: puntosStep8,
        indicator: "8"
    }
];

const PagoConPuntosBBVA = () => {
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
        const parts = text.split(/&bold(.*?)&bold/);
        return parts.map((part, index) => {
            return index % 2 === 1 ? <strong key={index}>{part}</strong> : part;
        });
    };

    return (
        <div className="stepper-container">
            <h1 className='stepper-container__title'>PAGO CON PUNTOS BBVA</h1>
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

export default PagoConPuntosBBVA;
