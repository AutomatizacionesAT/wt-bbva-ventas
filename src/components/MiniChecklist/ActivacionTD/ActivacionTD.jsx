import React, { useState } from 'react';
import '../MiniCheck.scss';
import image1 from '@images/checklist/MINICHECKLIST/ACTIVACIONTD/im1.png';
import image2 from '@images/checklist/MINICHECKLIST/ACTIVACIONTD/im2.png';
import image3 from '@images/checklist/MINICHECKLIST/ACTIVACIONTD/im3.png';
import image4 from '@images/checklist/MINICHECKLIST/ACTIVACIONTD/im4.png';
import image5 from '@images/checklist/MINICHECKLIST/ACTIVACIONTD/im5.png';
import image6 from '@images/checklist/MINICHECKLIST/ACTIVACIONTD/im6.png';
import image7 from '@images/checklist/MINICHECKLIST/ACTIVACIONTD/im7.png';


const steps = [
    {
        title: "Una vez hayas ingresado a la app de BBVA Movil, selecciona tu nueva tarjeta de crédito",
        imageUrl: image1,
        indicator: "1"
    },
    {
        title: "Tan pronto des clic, te aparecerá el siguiente mensajes, da click en &bold“Activar”&bold.",
        imageUrl: image2,
        indicator: "2"
    },
    {
        title: "Confirma tu número telefónico y da click en &bold“si, mi número es correcto”&bold",
        imageUrl: image3,
        indicator: "3"
    },
    {
        title: "Ingresa el código de verificación enviado a tu celular",
        imageUrl: image4,
        indicator: "4"
    },
    {
        title: "Ingresa los 16 dígitos de la tarjeta que vas a activar",
        imageUrl: image5,
        indicator: "5"
    },
    {
        title: "Ingresa la fecha de vencimiento de la tarjeta",
        imageUrl: image6,
        indicator: "6"
    },
    {
        title: "Te aparecerá una mensaje de confirmación da click en &bold“Entendido”&bold",
        imageUrl: image7,
        indicator: "7"
    },
];

const ActivacionTD = () => {
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
            <h1 className='stepper-container__title'>ACTIVACIÓN TARJETA DE CRÉDITO</h1>
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

export default ActivacionTD;
