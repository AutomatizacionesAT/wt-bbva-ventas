import React from 'react';
import aplicativosData from './aplicativos-data.json';
import './aplicativos.scss';

// Importación de todas las imágenes
import five9 from '../../assets/images/apps/five9.png';
import gap from '../../assets/images/apps/gap.png';
import kacktus from '../../assets/images/apps/kacktus.png';
import eccus from '../../assets/images/apps/eccus.png';
import endirecto from '../../assets/images/apps/endirecto.png';
import cafeopera from '../../assets/images/apps/cafeopera.png';
import googlemaps from '../../assets/images/apps/googlemaps.png';
import materialtdc from '../../assets/images/apps/materialtdc.png';
import materialtdcamparada from '../../assets/images/apps/materialtdcamparada.png';
import materialconsumo from '../../assets/images/apps/materialconsumo.png';
import materialrediferidos from '../../assets/images/apps/materialrediferidos.png';
import materialcompracartera from '../../assets/images/apps/materialcompracartera.png';
import academiaatento from '../../assets/images/apps/academiaatento.png';
import bancoBBVA from '../../assets/images/apps/bancoBBVA.png';
import app3270 from '../../assets/images/apps/3270.png';
import calculadora from '../../assets/images/apps/calculadora.png';
import logger from '../../assets/images/apps/logger.png';

// Objeto con todas las imágenes importadas
const imagenes = {
    'five9.png': five9,
    'gap.png': gap,
    'kacktus.png': kacktus,
    'eccus.png': eccus,
    'endirecto.png': endirecto,
    'cafeopera.png': cafeopera,
    'googlemaps.png': googlemaps,
    'materialtdc.png': materialtdc,
    'materialtdcamparada.png': materialtdcamparada,
    'materialconsumo.png': materialconsumo,
    'materialrediferidos.png': materialrediferidos,
    'materialcompracartera.png': materialcompracartera,
    'academiaatento.png': academiaatento,
    'bancoBBVA.png': bancoBBVA,
    '3270.png': app3270,
    'calculadora.png': calculadora,
    'logger.png': logger
};

const AplicativosGrid = () => {
    const handleClick = (link) => {
        window.open(link, '_blank');
    };

    return (
        <div className="aplicativos">
            <div className="aplicativos__grid">
                {aplicativosData.aplicativos.map((app, index) => (
                    <div
                        key={index}
                        className="card dato-buscado"
                        onClick={() => handleClick(app.link)}
                    >
                        <div className="card__image-container">
                            <img
                                src={imagenes[app.imagen]}
                                alt={app.titulo}
                                className="card__image"
                            />
                            <div className="card__overlay">
                                <a
                                    href={app.link}
                                    className="card__link"
                                    onClick={(e) => e.stopPropagation()}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Abrir Aplicativo
                                </a>
                            </div>
                        </div>
                        <div className="card__content">
                            <h3 className="card__title">{app.titulo}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AplicativosGrid; 