import React, { useState } from 'react';
import './styles/CuotasManejo.scss';
import DB from './BASES/CuotasManejo.json';

export const CuotasManejo = () => {
    const [selectedEntidad, setSelectedEntidad] = useState(DB[0]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
        const entidad = DB.find(item => item.ENTIDAD.toLowerCase() === event.target.value.toLowerCase());
        if (entidad) {
            setSelectedEntidad(entidad);
        }
    };
    const handleReset = () => {
        setSelectedEntidad(DB[0]);
        setInputValue('');
        
    };

    return (
        <section className='CuotasManejo'>
            <div className="CuotasManejo__title">
                <h2>Cuotas de Manejo</h2>
            </div>
            <div className="CuotasManejo__container">
                <div className='CuotasManejo__input'>
                    <input
                        list="entidades"
                        id="entidadInput"
                        value={inputValue}
                        onChange={handleInputChange}
                        placeholder="Escribe para buscar..."
                    />
                    <label htmlFor="entidadInput" >Entidad: </label>
                    <datalist id="entidades">
                        {DB.map((item, index) => (
                            <option key={index} value={item.ENTIDAD} />
                        ))}
                    </datalist>
                </div>
                
                <h3 className='CuotasManejo__subtitle'>Cuota de manejo</h3>
                <div className="CuotasManejo__cuotas">
                    <p><strong>Mínimo:</strong> {selectedEntidad.MINIMO}</p>
                    <p><strong>Máximo:</strong> {selectedEntidad.MAXIMO}</p>
                </div>
                {selectedEntidad.NOTA && <p className='CuotasManejo__nota'><strong>Nota:</strong>{selectedEntidad.NOTA}</p>}
                <button className='CuotasManejo__btn' onClick={handleReset}>Resetear</button>
            </div>
        </section>
    );
};
