import React, { useState, useEffect } from 'react';
import './manual.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faUser, faCar, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons'; // Importa los iconos específicos de Font Awesome
import data from './data.json';

const Objeciones = () => {
    const [selectedProduct, setSelectedProduct] = useState('tarjetaCredito');
    const [currentObjections, setCurrentObjections] = useState({});
    const [currentManejoIndices, setCurrentManejoIndices] = useState({});

    const handleObjectionClick = (product, index) => {
        setCurrentObjections(prevState => ({
            ...prevState,
            [product]: prevState[product] === index ? null : index
        }));
        setCurrentManejoIndices(prevState => ({
            ...prevState,
            [product]: 0
        }));
    };

    const handleManejoChange = (product, index) => {
        setCurrentManejoIndices(prevState => ({
            ...prevState,
            [product]: index
        }));
    };

    const handleProductChange = (product) => {
        setSelectedProduct(product);
        setCurrentObjections({});
        setCurrentManejoIndices({});
    };

    const productData = data[selectedProduct];
    const currentObjection = currentObjections[selectedProduct];
    const currentManejoIndex = currentManejoIndices[selectedProduct];

    useEffect(() => {
        const interval = setInterval(() => {
            const elements = document.querySelectorAll('.guide__recommendation p');
            elements.forEach((element) => {
                element.classList.add('shake');
                setTimeout(() => {
                    element.classList.remove('shake');
                }, 1000);
            });
        }, 7000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='container-manual'>
            <h1 className="container-manual__title">Manual De Objeciones</h1>
            <div className="guide">
                <div className="guide__button-container">
                    <div className='wrapper'>
                        <button
                            className={`guide__button ${selectedProduct === 'tarjetaCredito' ? 'active' : ''}`}
                            onClick={() => handleProductChange('tarjetaCredito')}
                        >
                            <div>
                                <FontAwesomeIcon icon={faCreditCard} />
                            </div>
                            <p>  Tarjeta de crédito</p>

                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>

                    <div className='wrapper'>
                        <button
                            className={`guide__button ${selectedProduct === 'amparada' ? 'active' : ''}`}
                            onClick={() => handleProductChange('amparada')}
                        >
                            <div>
                                <FontAwesomeIcon icon={faUser} />
                            </div>
                            <p>  Amparada</p>

                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>

                    <div className='wrapper'>
                        <button
                            className={`guide__button ${selectedProduct === 'consumo' ? 'active' : ''}`}
                            onClick={() => handleProductChange('consumo')}
                        >
                            <div>
                                <FontAwesomeIcon icon={faCar} />
                            </div>
                            <p>  Consumo</p>

                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>

                    <div className='wrapper'>
                        <button
                            className={`guide__button ${selectedProduct === 'cartera' ? 'active' : ''}`}
                            onClick={() => handleProductChange('cartera')}
                        >
                            <div>
                                <FontAwesomeIcon icon={faMoneyBillWave} />
                            </div>
                            <p>  Compra De Cartera</p>

                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
                <fieldset className='fieldset'>
                    <legend className='legend'> {productData.product}
                    </legend>
                    <div className="guide__recommendation">
                        {productData.recommendation.map((text, index) => (
                            <p key={index}>{text}</p>
                        ))}
                    </div>
                    <div className="guide__objections">
                        {productData.objections.map((objection, index) => (
                            <div key={index} className={`guide__objection ${currentObjection === index ? 'guide__objection--active' : ''}`}>
                                <h2 className="guide__objection-title" onClick={() => handleObjectionClick(selectedProduct, index)}>{objection.title}</h2>
                                {currentObjection === index && (
                                    <div className="guide__manejos">
                                        <p className="guide__manejo">{objection.manejos[currentManejoIndex]}</p>
                                        <div className="guide__manejo-buttons">
                                            {objection.manejos.map((_, i) => (
                                                <button
                                                    key={i}
                                                    onClick={() => handleManejoChange(selectedProduct, i)}
                                                    className={`guide__manejo-button ${currentManejoIndex === i ? 'guide__manejo-button--active' : ''}`}
                                                >
                                                    Manejo {i + 1}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </fieldset>
            </div>
        </div>
    );
};

export default Objeciones;
