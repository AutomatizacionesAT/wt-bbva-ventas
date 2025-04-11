import React, { useState, useContext } from 'react';
import GlobalContext from '../../../context/GlobalContext';
import '../MiniCheck.scss';
import image1 from '@images/checklist/MINICHECKLIST/CAMBIODIRECCION/mch12.png';
import image2 from '@images/checklist/MINICHECKLIST/CAMBIODIRECCION/mch13.png';
import image3 from '@images/checklist/MINICHECKLIST/CAMBIODIRECCION/mch14.png';
import image4 from '@images/checklist/MINICHECKLIST/CAMBIODIRECCION/mch15.png';
import image5 from '@images/checklist/MINICHECKLIST/CAMBIODIRECCION/mch16.png';
import image6 from '@images/checklist/MINICHECKLIST/CAMBIODIRECCION/mch17.png';
import image7 from '@images/checklist/MINICHECKLIST/CAMBIODIRECCION/mch18.png';
import image8 from '@images/checklist/MINICHECKLIST/CAMBIODIRECCION/mch19.png';

const steps = [
    {
        title: "Ingresa al menú principal ubicado en la parte superior derecha",
        imageUrl: image1,
        indicator: "1"
    },
    {
        title: "Da click en la opción &bold“Perfil”&bold",
        imageUrl: image2,
        indicator: "2"
    },
    {
        title: "Ingresa en &bold“Direcciones”&bold",
        imageUrl: image3,
        indicator: "3"
    },
    {
        title: "Desliza el botón &bold“mostrar datos”&bold ",
        imageUrl: image4,
        indicator: "4"
    },
    {
        title: "Da click en &bold“Editar”&bold ",
        imageUrl: image5,
        indicator: "5"
    },
    {
        title: "Ingresa la nueva dirección, recuerda cambiar la ciudad y departamento",
        imageUrl: image6,
        indicator: "6"
    },
    {
        title: "Haz check en el recuadro &bold“esta es mi dirección de correspondencia”&bold ",
        imageUrl: image7,
        indicator: "7"
    },
    {
        title: "Da click en &bold“guardar”&bold",
        imageUrl: image8,
        indicator: "8"
    }
];

const CambioDireccion = () => {
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
            <h1 className='stepper-container__title'>CAMBIO DE DIRECCIÓN </h1>
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

export default CambioDireccion;
