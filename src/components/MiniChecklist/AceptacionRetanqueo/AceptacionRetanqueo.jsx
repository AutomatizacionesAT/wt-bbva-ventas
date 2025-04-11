import React, { useState } from 'react';
import '../MiniCheck.scss';

// Importar imágenes con prefijo específico para este componente
import retanqueoStep1 from '../../../assets/images/checklist/MINICHECKLIST/ACEPTACIONRETANQUEO/retanqueo-step1.png';
import retanqueoStep2 from '../../../assets/images/checklist/MINICHECKLIST/ACEPTACIONRETANQUEO/retanqueo-step2.png';
import retanqueoStep3 from '../../../assets/images/checklist/MINICHECKLIST/ACEPTACIONRETANQUEO/retanqueo-step3.png';
import retanqueoStep4 from '../../../assets/images/checklist/MINICHECKLIST/ACEPTACIONRETANQUEO/retanqueo-step4.png';
import retanqueoStep5 from '../../../assets/images/checklist/MINICHECKLIST/ACEPTACIONRETANQUEO/retanqueo-step5.png';
import retanqueoStep6 from '../../../assets/images/checklist/MINICHECKLIST/ACEPTACIONRETANQUEO/retanqueo-step6.png';
import retanqueoStep7 from '../../../assets/images/checklist/MINICHECKLIST/ACEPTACIONRETANQUEO/retanqueo-step7.png';
import retanqueoStep8 from '../../../assets/images/checklist/MINICHECKLIST/ACEPTACIONRETANQUEO/retanqueo-step8.png';
import retanqueoStep9 from '../../../assets/images/checklist/MINICHECKLIST/ACEPTACIONRETANQUEO/retanqueo-step9.png';
import retanqueoStep10 from '../../../assets/images/checklist/MINICHECKLIST/ACEPTACIONRETANQUEO/retanqueo-step10.png';
import retanqueoStep11 from '../../../assets/images/checklist/MINICHECKLIST/ACEPTACIONRETANQUEO/retanqueo-step11.png';
import retanqueoStep12 from '../../../assets/images/checklist/MINICHECKLIST/ACEPTACIONRETANQUEO/retanqueo-step12.png';
import retanqueoStep13 from '../../../assets/images/checklist/MINICHECKLIST/ACEPTACIONRETANQUEO/retanqueo-step13.png';
import retanqueoStep14 from '../../../assets/images/checklist/MINICHECKLIST/ACEPTACIONRETANQUEO/retanqueo-step14.png';
import retanqueoStep15 from '../../../assets/images/checklist/MINICHECKLIST/ACEPTACIONRETANQUEO/retanqueo-step15.png';

const steps = [
    {
        title: "Da clic en el botón &boldAcceso&bold",
        imageUrl: retanqueoStep1,
        indicator: "1"
    },
    {
        title: "Ingres con tu numero de documento y contraseña, si aun no estas registrado en la banca net sigue el pasa a paso para el registro",
        imageUrl: retanqueoStep2,
        indicator: "2"
    },
    {
        title: "En la pantalla principal te aparece un mensaje &boldRetanqueo de tu Credito #### hasta por $&bold, haz clic en lo quiero",
        imageUrl: retanqueoStep3,
        indicator: "3"
    },
    {
        title: "Aparecerá un mensaje con la información de que es un retanqueo, da clic en el botón &boldContinuar&bold",
        imageUrl: retanqueoStep4,
        indicator: "4"
    },
    {
        title: "Te aparecera informacion del credito que tienes actualmente con el banco, Da clic en el boton &boldcontinuar&bold",
        imageUrl: retanqueoStep5,
        indicator: "5"
    },
    {
        title: "Selecciona la cantidad de dinero adicional que necesitas, (solo permite en múltiplos de millón)",
        imageUrl: retanqueoStep6,
        indicator: "6"
    },
    {
        title: "Selecciona el nuevo plazo para el total de la deuda",
        imageUrl: retanqueoStep7,
        indicator: "7"
    },
    {
        title: "Te aparecerá un comparativo del crédito actual y el retanqueo, da clic en &boldLo quiero&bold",
        imageUrl: retanqueoStep8,
        indicator: "8"
    },
    {
        title: "Selecciona la cuenta a la cual deseas que te depositen el dinero",
        imageUrl: retanqueoStep9,
        indicator: "9"
    },
    {
        title: "Una vez seleccionada la cuenta da clic en el botón &boldcontinuar&bold",
        imageUrl: retanqueoStep10,
        indicator: "10"
    },
    {
        title: "Te solicitara una actualización de datos, ingresa tu correo electrónico y numero de celular",
        imageUrl: retanqueoStep11,
        indicator: "11"
    },
    {
        title: "Da clic en el botón &boldcontinuar&bold",
        imageUrl: retanqueoStep12,
        indicator: "12"
    },
    {
        title: "Te aparecerán los términos y condiciones del retanqueo, da clic en el recuadro de &boldhe leído y acepto términos y condiciones de este servicio&bold y posteriormente en &boldcontinuar&bold",
        imageUrl: retanqueoStep13,
        indicator: "13"
    },
    {
        title: "Ingresa el código de confirmacion enviado a tu BBVA Móvil o tu Token BBVA y da clic en el botón &boldOK&bold",
        imageUrl: retanqueoStep14,
        indicator: "14"
    },
    {
        title: "Te aparecerá un mensaje de Solicitud Exitosa, da clic en &boldFinalizar&bold",
        imageUrl: retanqueoStep15,
        indicator: "15"
    }
];

const AceptacionRetanqueo = () => {
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
            <h1 className='stepper-container__title'>ACEPTACIÓN DE RETANQUEO</h1>
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

export default AceptacionRetanqueo;
