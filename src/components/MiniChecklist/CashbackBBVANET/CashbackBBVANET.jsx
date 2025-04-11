import React, { useState } from 'react';
import '../MiniCheck.scss';

// Importar imágenes con prefijo específico para este componente
import cashbackStep1 from '../../../assets/images/checklist/MINICHECKLIST/CASHBACKBBVANET/cashback-step1.png';
import cashbackStep2 from '../../../assets/images/checklist/MINICHECKLIST/CASHBACKBBVANET/cashback-step2.png';
import cashbackStep3 from '../../../assets/images/checklist/MINICHECKLIST/CASHBACKBBVANET/cashback-step3.png';
import cashbackStep4 from '../../../assets/images/checklist/MINICHECKLIST/CASHBACKBBVANET/cashback-step4.png';
import cashbackStep5 from '../../../assets/images/checklist/MINICHECKLIST/CASHBACKBBVANET/cashback-step5.png';
import cashbackStep6 from '../../../assets/images/checklist/MINICHECKLIST/CASHBACKBBVANET/cashback-step6.png';
import cashbackStep7 from '../../../assets/images/checklist/MINICHECKLIST/CASHBACKBBVANET/cashback-step7.png';

const steps = [
    {
        title: "Ingresa en www.bbva.com.co y da clic en el boto &boldAcceso&bold",
        imageUrl: cashbackStep1,
        indicator: "1"
    },
    {
        title: "Ingresa tu usuario y contraseña, da clic en el botón &boldentrar&bold",
        imageUrl: cashbackStep2,
        indicator: "2"
    },
    {
        title: "Ubica el banner de &boldEXPERIENCIAS BBVA&bold y da clic en &boldconocer mas&bold",
        imageUrl: cashbackStep3,
        indicator: "3"
    },
    {
        title: "En la parte superior da clic en la opción &boldRedimir Puntos&bold",
        imageUrl: cashbackStep4,
        indicator: "4"
    },
    {
        title: "En la opción Cashbach a tu Tarjeta da clic en el botón &boldRedimir Puntos&bold",
        imageUrl: cashbackStep5,
        indicator: "5"
    },
    {
        title: "Selecciona la tarjeta a la cual le vas a aplicar el Cashback, el paquete de puntos habilitado para la redención y haz clic en redimir",
        imageUrl: cashbackStep6,
        indicator: "6"
    },
    {
        title: "Confirma la redención de puntos haciendo clic en el botón &boldAceptar&bold. Recuerda que el abono a la tarjeta se vera reflejado en un máximo de 3 días hábiles",
        imageUrl: cashbackStep7,
        indicator: "7"
    }
];

const CashbackBBVANET = () => {
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
            <h1 className='stepper-container__title'>CASHBACK BBVA NET</h1>
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

export default CashbackBBVANET;
