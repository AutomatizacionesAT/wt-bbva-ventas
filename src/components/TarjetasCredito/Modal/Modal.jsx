import React from 'react';
import cardData from './Modal.json';
import disneyImage from '../../../assets/images/creditCards/disney.png';
import startImage from '../../../assets/images/creditCards/start.png';
import blooImage from '../../../assets/images/creditCards/bloo.png';
import gigImage from '../../../assets/images/creditCards/gig.png';
import rappiImage from '../../../assets/images/creditCards/rappi.png';
import skyImage from '../../../assets/images/creditCards/sky.png';
import withuImage from '../../../assets/images/creditCards/withu.png';
import card1 from '../../../assets/images/creditCards/card1.png';
import card2 from '../../../assets/images/creditCards/card2.png';
import card4 from '../../../assets/images/creditCards/card4.png';
import card6 from '../../../assets/images/creditCards/card6.png';
import './Modal.scss';

const getImagePath = (image) => {
    switch (image) {
        case 'disney.png':
            return disneyImage;
        case 'start.png':
            return startImage;
        case 'bloo.png':
            return blooImage;
        case 'gig.png':
            return gigImage;
        case 'rappi.png':
            return rappiImage;
        case 'sky.png':
            return skyImage;
        case 'withu.png':
            return withuImage;
        case 'card1.png':
            return card1;
        case 'card2.png':
            return card2;
        case 'card4.png':
            return card4;
        case 'card6.png':
            return card6;
        default:
            return '';
    }
};

const Modal = ({ isOpen, onClose, cardType }) => {
    const filteredCards = cardData.find(cardSet => cardSet.cardType === cardType)?.cards || [];

    return (
        <div className={`modal ${isOpen ? 'active' : ''}`}>
            <div className="modal-content">
                <span className="close-modal" onClick={onClose}>&times;</span>
                <div className='beneficios'>
                    <h3>SUSCRIPCIONES A PLATAFORMAS</h3>
                    <div className='slider-container'>
                        <div className='slider-images'>
                            <img src={disneyImage} alt="Disney" />
                            <img src={startImage} alt="Start" />
                            <img src={skyImage} alt="Sky" />
                            <img src={withuImage} alt="Withu" />
                            <img src={blooImage} alt="Bloo" />
                            <img src={rappiImage} alt="Rappi" />
                            <img src={gigImage} alt="Gig" />
                            <img src={disneyImage} alt="Disney" />
                            <img src={startImage} alt="Start" />
                            <img src={skyImage} alt="Sky" />
                            <img src={withuImage} alt="Withu" />
                            <img src={blooImage} alt="Bloo" />
                            <img src={rappiImage} alt="Rappi" />
                            <img src={gigImage} alt="Gig" />
                        </div>
                    </div>
                </div>
                <div className='container-cards'>
                    {filteredCards.map((card, index) => (
                        <div key={index} className="card">
                            <h2>{card.title}</h2>
                            {card.animations && card.animations.map((animation, animIndex) => (
                                <div key={animIndex} className={`animation ${animation}`}>{animation}</div>
                            ))}
                            {Array.isArray(card.images) ? (
                                card.images.map((img, imgIndex) => (
                                    <img key={imgIndex} src={getImagePath(img)} alt={card.title} />
                                ))
                            ) : (
                                <img src={getImagePath(card.image)} alt={card.title} />
                            )}
                            {card.paragraph && <p>{card.paragraph}</p>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Modal;
