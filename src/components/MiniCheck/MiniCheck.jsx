import React, { useState } from 'react';
import './MiniCheck.scss';
import image1 from '../../assets/images/checklist/mch1.png';
import image2 from '../../assets/images/checklist/mch2.png';
import image3 from '../../assets/images/checklist/mch3.png';
import image4 from '../../assets/images/checklist/mch4.png';
import image5 from '../../assets/images/checklist/mch5.png';
import image6 from '../../assets/images/checklist/mch6.png';
import image7 from '../../assets/images/checklist/mch7.png';
import image8 from '../../assets/images/checklist/mch8.png';
import image9 from '../../assets/images/checklist/mch9.png';
import image10 from '../../assets/images/checklist/mch10.png';
import image11 from '../../assets/images/checklist/mch11.png';

const steps = [
    {
        title: "Ingresa al menú principal y da click en 'Seguridad y Privacidad'",
        imageUrl: image1,
        indicator: "1"
    },
    {
        title: "Selecciona 'Accesos y Firmas'",
        imageUrl: image2,
        indicator: "2"
    },
    {
        title: "Desliza en 'Token Digital'",
        imageUrl: image3,
        indicator: "3"
    },
    {
        title: "Elige la opción 'Verificación en dos pasos'",
        imageUrl: image4,
        indicator: "4"
    },
    {
        title: "Selecciona 'Iniciar Confirmación'",
        imageUrl: image5,
        indicator: "5"
    },
    {
        title: "Inicia con la foto de tu cédula",
        imageUrl: image6,
        indicator: "6"
    },
    {
        title: "Ahora tómate una selfie",
        imageUrl: image7,
        indicator: "7"
    },
    {
        title: "Ahora para confirmar la operación. Recibirás un código por SMS que enviaremos a tu celular",
        imageUrl: image8,
        indicator: "8"
    },
    {
        title: "Digita el código enviado como mensaje de texto a tu celular",
        imageUrl: image9,
        indicator: "9"
    },
    {
        title: "Tu token digital está activo",
        imageUrl: image10,
        indicator: "10"
    },
    {
        title: "Verifica nuevamente el menú principal.",
        imageUrl: image11,
        indicator: "11"
    }
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
            <h1 className='stepper-container__title'>ACTIVACIÓN TOKEN</h1>
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
