import React, { useState } from 'react';
import './TarjetasCredito.scss';
import data from './BASES/DB_CARDA.json';
import visa from '../../assets/images/creditCards/visa.png';
import mastercard from '../../assets/images/creditCards/master.png';

export const TarjetasCreditoAmparada = () => {
    const [selectedVisaIndex, setSelectedVisaIndex] = useState(null);
    const [selectedMasterCardIndex, setSelectedMasterCardIndex] = useState(null);
    const [selectedVisaBenefits, setSelectedVisaBenefits] = useState([]);
    const [selectedMasterCardBenefits, setSelectedMasterCardBenefits] = useState([]);

    const handleVisaCategorySelect = (index, benefits) => {
        setSelectedVisaIndex(index);
        setSelectedVisaBenefits(benefits);
    };

    const handleMasterCardCategorySelect = (index, benefits) => {
        setSelectedMasterCardIndex(index);
        setSelectedMasterCardBenefits(benefits);
    };

    return (
        <div className="tarjetas-credito-container">
            <div className="franchise-section">
                <img src={visa} alt="imagen visa" />
                <div className="categories-container">
                    {data.VISA.CATEGORIA.map((category, index) => (
                        <div
                            key={index}
                            className={`category-card ${selectedVisaIndex === index ? 'selected' : ''}`}
                            onClick={() => handleVisaCategorySelect(index, category.BENEFICIOS)}
                        >
                            <h3>{category.NOMBRE}</h3>
                        </div>
                    ))}
                </div>
                <div className="benefits-container">
                    <h3>Beneficios de Visa</h3>
                    <ul>
                        {selectedVisaBenefits.map((benefit, idx) => (
                            <li key={idx}>{benefit}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="franchise-section">
                <img src={mastercard} alt="imagen mastercard" />
                <div className="categories-container">
                    {data.MASTERCARD.CATEGORIA.map((category, index) => (
                        <div
                            key={index}
                            className={`category-card ${selectedMasterCardIndex === index ? 'selected' : ''}`}
                            onClick={() => handleMasterCardCategorySelect(index, category.BENEFICIOS)}
                        >
                            <h3>{category.NOMBRE}</h3>
                        </div>
                    ))}
                </div>
                <div className="benefits-container">
                    <h3>Beneficios de MasterCard</h3>
                    <ul>
                        {selectedMasterCardBenefits.map((benefit, idx) => (
                            <li key={idx}>{benefit}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};
