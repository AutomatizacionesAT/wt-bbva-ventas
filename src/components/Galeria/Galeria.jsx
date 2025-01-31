import React, { useState, useEffect } from 'react';
import './Galeria.scss';

// Importar las imágenes
import imagen1 from '../../assets/images/galeria/tarifario.png';
import imagen2 from '../../assets/images/galeria/codigos.png';
import imagen3 from '../../assets/images/galeria/portafolio.png';

const Galeria = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [activeButton, setActiveButton] = useState(null);

    const toggleSubMenu = () => {
        setIsOpen(!isOpen);
    };

    const openModal = (image, buttonName) => {
        setSelectedImage(image);
        setActiveButton(buttonName);
    };

    const closeModal = () => {
        setSelectedImage(null);
        setActiveButton(null);
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                closeModal();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div className="galeria__container">
            <button className="galeria__button" onClick={toggleSubMenu}>
                Documentos
            </button>

            {isOpen && (
                <div className="galeria__submenu">
                    {/* Botones para abrir las imágenes con clase activa */}
                    <button
                        className={`galeria__image-button ${activeButton === 'tarifario' ? 'active' : ''}`}
                        onClick={() => openModal(imagen1, 'tarifario')}
                    >
                        Tarifario
                    </button>
                    <button
                        className={`galeria__image-button ${activeButton === 'codigos' ? 'active' : ''}`}
                        onClick={() => openModal(imagen2, 'codigos')}
                    >
                        Códigos Consumo
                    </button>
                    <button
                        className={`galeria__image-button ${activeButton === 'portafolio' ? 'active' : ''}`}
                        onClick={() => openModal(imagen3, 'portafolio')}
                    >
                        Portafolio
                    </button>
                </div>
            )}

            {/* Modal con la imagen seleccionada */}
            {selectedImage && (
                <div className="galeria__modal" onClick={closeModal}>
                    <div className="galeria__modal-content">
                        <img src={selectedImage} alt="Imagen seleccionada" className="galeria__modal-image" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Galeria;
