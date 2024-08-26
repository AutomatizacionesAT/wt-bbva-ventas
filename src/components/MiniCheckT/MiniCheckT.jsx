import React, { useState } from 'react';
import './MiniCheck.scss';
import image1 from '../../assets/images/checklist/mch20.png';
import image2 from '../../assets/images/checklist/mch21.png';
import image3 from '../../assets/images/checklist/mch22.png';
import image4 from '../../assets/images/checklist/mch23.png';
import image5 from '../../assets/images/checklist/mch24.png';
import image6 from '../../assets/images/checklist/mch25.png';
import image7 from '../../assets/images/checklist/mch26.png';

const steps = [
    {
        title: "El cliente visualizara la oferta “una tarjeta de crédito te esta esperando con un cupo de XXXX”, da clic en la opción “me interesa”",
        imageUrl: image1,
        indicator: "1"
    },
    {
        title: "Asigna el cupo deseado de la tarjeta y da clic en continuar",
        imageUrl: image2,
        indicator: "2"
    },
    {
        title: "Selecciona la tarjeta que sea de tu agrado y da clic en conocer mas.",
        imageUrl: image3,
        indicator: "3"
    },
    {
        title: "Desliza hasta el final de la presentación, hasta la sección entrega de tu tarjeta.",
        imageUrl: image4,
        indicator: "4"
    },
    {
        title: "Da clic en la opción “mostrar datos” en la sección de dirección actual, confirma que la dirección sea correcta.",
        imageUrl: image5,
        indicator: "5"
    },
    {
        title: "6.Haz check en el recuadro de “leí, entiendo y acepto el contenido de los documentos”  y da clic en continuar",
        imageUrl: image6,
        indicator: "6"
    },
    {
        title: "Te aparecerá un resumen del producto, da clic en contratar.",
        imageUrl: image7,
        indicator: "7"
    },
];

const ActivacionToken = () => {
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

    return (
        <div className="stepper-container">
            <h1 className='stepper-container__title'>ACEPTACIÓN TDC PREAPROBADO</h1>
            <div className='left'>
                <h2>Paso <span>{currentStep + 1}</span> </h2>
                <div className="stepper">
                    <p>{steps[currentStep].title}</p>
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

export default ActivacionToken;
