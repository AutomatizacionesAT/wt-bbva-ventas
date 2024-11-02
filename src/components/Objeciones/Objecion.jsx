import React, { useState, useContext } from 'react';
import GlobalContext from '../../context/GlobalContext';
import OBJETC from './BASES/OBJETC.json';
import OBJEAM from './BASES/OBJEAM.json';
import OBJECON from './BASES/OBJECON.json';
import OBJECOMCAR from './BASES/OBJECOMCAR.json';
import OBJERED from './BASES/OBJERED.json';
import './Objecion.scss';
import img1 from '../../assets/images/objecion/objecionclaro.jpg';
import img2 from '../../assets/images/objecion/objecionoscuro.jpg';

let BD = {
    OBJETC: OBJETC,
    OBJEAM: OBJEAM,
    OBJECON: OBJECON,
    OBJECOMCAR: OBJECOMCAR,
    OBJERED: OBJERED
};

function removeDuplicates(array) {
    return [...new Set(array)];
}



export const Objecion = ({ NBD }) => {
    const data = BD[NBD];

    const [activeObjectionIndex, setActiveObjectionIndex] = useState(null);
    const [activeManejoIndex, setActiveManejoIndex] = useState({});
    const [recomendaciones, setRecomendaciones] = useState([data[0].Recomendación]);
 
    const { scheme } = useContext(GlobalContext);

    

    const sacarDatos = (arra, nombre) => {
        return removeDuplicates(arra.map(ele => ele[nombre]));
    };


    const producto = sacarDatos(data, "Producto");
    // const recomendaciones = sacarDatos(data, "Recomendación"); 
   

    const toggleObjection = (index) => {
        setActiveObjectionIndex(index === activeObjectionIndex ? null : index);
        setActiveManejoIndex({ ...activeManejoIndex, [index]: 0 });
        setRecomendaciones([[data[index].Recomendación]])
    };

    const handleManejoClick = (objectionIndex, manejoIndex) => {
        setActiveManejoIndex({ ...activeManejoIndex, [objectionIndex]: manejoIndex });
    };

    return (
        <section className='objeciones'>
            <h1 className='objeciones__title'>MANUAL DE OBJECIONES</h1>
            <section className='objeciones__body'>
                <h2 className='objeciones__body-title'>{producto[0]}</h2>
                <div className='objeciones__body-recomendaciones'>
                    {recomendaciones.map((ele, ind) => (
                        <div className='objeciones__body-recomendaciones-item' key={ind}>
                            <p>{ele}</p>
                        </div>
                    ))}
                </div>
                <div className='objeciones__body-objecion' style={scheme === 'light' ? { backgroundImage: `url(${img2})` } : { backgroundImage: `url(${img1})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
                    {data.map((ele, ind) => (
                        <section
                            className='objeciones__body-objecion-item' key={ind}
                            style={{ transition: 'all 0.3s ease' }}
                        >
                            <button className='objeciones__body-objecion-item-button' onClick={() => toggleObjection(ind)}>
                                {ele.Objeciones}
                            </button>
                            <div className='objeciones__body-objecion-item-content' style={{
                                opacity: activeObjectionIndex === ind ? 1 : 0,
                                maxHeight: activeObjectionIndex === ind ? '1000px' : '0px',
                                padding: activeObjectionIndex === ind ? '16px' : '0px',
                                overflow: 'hidden',
                                transition: 'opacity 0.3s, max-height 0.3s ease'
                            }}>
                                {activeObjectionIndex === ind && (
                                    <>
                                        <p>{ele.Manejos[activeManejoIndex[ind]].texto}</p>
                                        {ele.Manejos[activeManejoIndex[ind]].nota && (
                                            <span className="nota">({ele.Manejos[activeManejoIndex[ind]].nota})</span>
                                        )}
                                        <div>
                                            {ele.Manejos.map((manejo, idx) => (
                                                <button
                                                    key={idx}
                                                    onClick={() => handleManejoClick(ind, idx)}
                                                    className={activeManejoIndex[ind] === idx ? 'active-manejo' : ''}
                                                >
                                                    Manejo {idx + 1}
                                                </button>
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>
                        </section>
                    ))}
                </div>
            </section>
        </section>
    );
};
