// TarjetasCredito.jsx
import React, { useState } from 'react';
import imgNino from '../../assets/images/creditCards/nino.png';
import imgAsis from '../../assets/images/creditCards/assicard.png';
import imgStandar from '../../assets/images/creditCards/Imagen1.png';
import imgGold from '../../assets/images/creditCards/Imagen2.png';
import imgPlatinum from '../../assets/images/creditCards/Imagen3.png';
import imgBlack from '../../assets/images/creditCards/Imagen4.png';
import imgInfinite from '../../assets/images/creditCards/Imagen5.png';
import { Link } from 'react-router-dom';
import TemplateCard from './Cards/TemplateCard';
import Modal from './Modal/Modal';
import './tarjetasCredito.scss';

const TarjetasCredito = () => {
	const [modalOpen, setModalOpen] = useState(false);
	const [cardType, setCardType] = useState(null);
	const [selectedCard, setSelectedCard] = useState(null);

	const handleCardClick = (cardName) => {
		setSelectedCard(cardName);
	};

	const handleClose = () => {
		setSelectedCard(null);
	};

	const openModal = (type) => {
		setCardType(type);
		setModalOpen(true);
	};

	const closeModal = () => {
		setModalOpen(false);
	};

	return (
		<section className="tarjetasCredito">
			<article className="tarjetasCredito__box">
				<div className="tarjetasCredito__header">
					<a href="#" target="_blank" className="tarjetasCredito__header--link">
						<figure className="tarjetasCredito__header--img">
							<img src={imgNino} alt="imagen niño" />
						</figure>
					</a>
					<h1 className="tarjetasCredito__header--title">Tarjeta de Crédito - Amparada</h1>
					<Link to="/">
						<figure className="tarjetasCredito__header--img">
							<img src={imgAsis} alt="imagen niño" />
						</figure>
					</Link>
				</div>

				<div className="tarjetasCredito__body">
					<div className="tarjetasCredito__subbody">
						<TemplateCard cardName="Standar" onClick={() => handleCardClick("Standar")} />
						<TemplateCard cardName="Gold" onClick={() => handleCardClick("Gold")} />
						<TemplateCard cardName="Platinum" onClick={() => handleCardClick("Platinum")} />
						<TemplateCard cardName="Black" onClick={() => handleCardClick("Black")} />
						<TemplateCard cardName="Infinite" onClick={() => handleCardClick("Infinite")} />
					</div>
					{selectedCard && (
						<div className="detalleTarjeta">
							<div className='detalleTarjeta__inside'>
								<button className="closeButton" onClick={handleClose}>Cerrar</button>
								{selectedCard === "Standar" && <img src={imgStandar} alt="Standard Card" />}
								{selectedCard === "Gold" && <img src={imgGold} alt="Gold Card" />}
								{selectedCard === "Platinum" && <img src={imgPlatinum} alt="Platinum Card" />}
								{selectedCard === "Black" && <img src={imgBlack} alt="Black Card" />}
								{selectedCard === "Infinite" && <img src={imgInfinite} alt="Infinite Card" />}
							</div>
						</div>
					)}
				</div>

				<div className="tarjetasCredito__footer">
					<TemplateCard cardName="Visa" onClick={() => openModal('Visa')} />
					<TemplateCard cardName="Mastercard" onClick={() => openModal('Mastercard')} />
				</div>
			</article>

			{modalOpen && <Modal isOpen={modalOpen} onClose={closeModal} cardType={cardType} />}
		</section>
	);
};

export default TarjetasCredito;
