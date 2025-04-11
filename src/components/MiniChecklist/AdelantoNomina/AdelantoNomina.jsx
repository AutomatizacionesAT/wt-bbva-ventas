import React, { useState } from 'react';
import '../MiniCheck.scss';

// Importar imágenes con prefijo específico para este componente
import adelantoStep1 from '../../../assets/images/checklist/MINICHECKLIST/ADELANTONOMINA/adelanto-step1.png';
import adelantoStep2 from '../../../assets/images/checklist/MINICHECKLIST/ADELANTONOMINA/adelanto-step2.png';
import adelantoStep3 from '../../../assets/images/checklist/MINICHECKLIST/ADELANTONOMINA/adelanto-step3.png';
import adelantoStep4 from '../../../assets/images/checklist/MINICHECKLIST/ADELANTONOMINA/adelanto-step4.png';
import adelantoStep5 from '../../../assets/images/checklist/MINICHECKLIST/ADELANTONOMINA/adelanto-step5.png';
import adelantoStep6 from '../../../assets/images/checklist/MINICHECKLIST/ADELANTONOMINA/adelanto-step6.png';
import adelantoStep7 from '../../../assets/images/checklist/MINICHECKLIST/ADELANTONOMINA/adelanto-step7.png';
import adelantoStep8 from '../../../assets/images/checklist/MINICHECKLIST/ADELANTONOMINA/adelanto-step8.png';
import adelantoStep9 from '../../../assets/images/checklist/MINICHECKLIST/ADELANTONOMINA/adelanto-step9.png';

const steps = [
    {
        title: "Ingresa a la app del banco e inicia sesión",
        imageUrl: adelantoStep1,
        indicator: "1"
    },
    {
        title: "Ingresa tu contraseña y haz clic en &boldIngresar&bold",
        imageUrl: adelantoStep2,
        indicator: "2"
    },
    {
        title: "Haz clic en el botón &boldcontrata&bold",
        imageUrl: adelantoStep3,
        indicator: "3"
    },
    {
        title: "Selecciona la opción &boldAdelanto de Nomina&bold",
        imageUrl: adelantoStep4,
        indicator: "4"
    },
    {
        title: "Te aparecerá un mensaje con la descripción del servicio, haz clic en &boldcontinuar&bold",
        imageUrl: adelantoStep5,
        indicator: "5"
    },
    {
        title: "Acepta los términos y condiciones haciendo clic en el botón &boldAceptar&bold",
        imageUrl: adelantoStep6,
        indicator: "6"
    },
    {
        title: "Te aparecerá un mensaje con las restricciones de uso del Adelanto de Nomina, haz clic en el botón &boldConfirmar&bold",
        imageUrl: adelantoStep7,
        indicator: "7"
    },
    {
        title: "Ingresa tu contraseña de operaciones y haz clic en &boldContinuar&bold",
        imageUrl: adelantoStep8,
        indicator: "8"
    },
    {
        title: "Te aparecerá un mensaje confirmando que tu solicitud se realizó con éxito, haz clic en &boldUsar adelanto de nómina&bold para empezar a disfrutar del beneficio",
        imageUrl: adelantoStep9,
        indicator: "9"
    }
];

const AdelantoNomina = () => {
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
            <h1 className='stepper-container__title'>ADELANTO DE NÓMINA</h1>
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

export default AdelantoNomina;
