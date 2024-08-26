import React, { useState } from 'react';
import './MiniCheck.scss';
import image1 from '../../assets/images/checklist/mch12.png';
import image2 from '../../assets/images/checklist/mch13.png';
import image3 from '../../assets/images/checklist/mch14.png';
import image4 from '../../assets/images/checklist/mch15.png';
import image5 from '../../assets/images/checklist/mch16.png';
import image6 from '../../assets/images/checklist/mch17.png';
import image7 from '../../assets/images/checklist/mch18.png';
import image8 from '../../assets/images/checklist/mch19.png';

const steps = [
    {
        title: "Ingresa al menú principal ubicado en la parte superior derecha",
        imageUrl: image1,
        indicator: "1"
    },
    {
        title: "Da clic en la opción “Perfil”",
        imageUrl: image2,
        indicator: "2"
    },
    {
        title: "Ingresa en “Direcciones”",
        imageUrl: image3,
        indicator: "3"
    },
    {
        title: "Desliza el botón “mostrar datos” ",
        imageUrl: image4,
        indicator: "4"
    },
    {
        title: "Da clic en “Editar” ",
        imageUrl: image5,
        indicator: "5"
    },
    {
        title: "Ingresa la nueva dirección, recuerda cambiar la ciudad y departamento",
        imageUrl: image6,
        indicator: "6"
    },
    {
        title: "Haz check en el recuadro “esta es mi dirección de correspondencia” ",
        imageUrl: image7,
        indicator: "7"
    },
    {
        title: "Da clic en “guardar”",
        imageUrl: image8,
        indicator: "8"
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
            <h1 className='stepper-container__title'>CAMBIO DE DIRECCIÓN </h1>
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
