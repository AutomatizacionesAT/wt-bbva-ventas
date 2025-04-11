import React, { useState } from 'react';
import '../MiniCheck.scss';

// Importar imágenes con prefijo específico para este componente
import registroStep1 from '../../../assets/images/checklist/MINICHECKLIST/REGISTROBBVANET/step1.png';
import registroStep2 from '../../../assets/images/checklist/MINICHECKLIST/REGISTROBBVANET/step2.png';
import registroStep3 from '../../../assets/images/checklist/MINICHECKLIST/REGISTROBBVANET/step3.png';
import registroStep4 from '../../../assets/images/checklist/MINICHECKLIST/REGISTROBBVANET/step4.png';
import registroStep5 from '../../../assets/images/checklist/MINICHECKLIST/REGISTROBBVANET/step5.png';
import registroStep6 from '../../../assets/images/checklist/MINICHECKLIST/REGISTROBBVANET/step6.png';
import registroStep7 from '../../../assets/images/checklist/MINICHECKLIST/REGISTROBBVANET/step7.png';
import registroStep8 from '../../../assets/images/checklist/MINICHECKLIST/REGISTROBBVANET/step8.png';
import registroStep9 from '../../../assets/images/checklist/MINICHECKLIST/REGISTROBBVANET/step9.png';
import registroStep10 from '../../../assets/images/checklist/MINICHECKLIST/REGISTROBBVANET/step10.png';

const steps = [
    {
        title: "Da clic en el botón &boldAcceso&bold",
        imageUrl: registroStep1,
        indicator: "1"
    },
    {
        title: "Da clic en el botón &boldRegístrate&bold",
        imageUrl: registroStep2,
        indicator: "2"
    },
    {
        title: "Selecciona el tipo de documento e ingresa el número",
        imageUrl: registroStep3,
        indicator: "3"
    },
    {
        title: "Ingresa el código OTP enviado a tu celular",
        imageUrl: registroStep4,
        indicator: "4"
    },
    {
        title: "Da clic en &boldConfirmar&bold",
        imageUrl: registroStep5,
        indicator: "5"
    },
    {
        title: "Da clic en &boldContinuar&bold",
        imageUrl: registroStep6,
        indicator: "6"
    },
    {
        title: "Acepta los términos y condiciones dando clic en &boldAceptar&bold",
        imageUrl: registroStep7,
        indicator: "7"
    },
    {
        title: "Ingresa el código de 6 dígitos enviado por mensaje de texto",
        imageUrl: registroStep8,
        indicator: "8"
    },
    {
        title: "Da clic en &boldcontinuar&bold",
        imageUrl: registroStep9,
        indicator: "9"
    },
    {
        title: "Aparecerá el mensaje de Activación Exitosa",
        imageUrl: registroStep10,
        indicator: "10"
    }
];

const RegistroBBVANet = () => {
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
            <h1 className='stepper-container__title'>REGISTRO BBVA NET</h1>
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

export default RegistroBBVANet;
