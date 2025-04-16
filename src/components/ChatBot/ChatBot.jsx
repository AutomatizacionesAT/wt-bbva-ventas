import React, { useState, useRef } from 'react';
import './chatbot.scss';
import * as XLSX from 'xlsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faComments,
    faFileUpload,
    faTimes,
    faFileAlt,
    faPaperPlane
} from '@fortawesome/free-solid-svg-icons';

const ChatBot = () => {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [fileData, setFileData] = useState(null);
    const [fileType, setFileType] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const fileInputRef = useRef(null);
    const chatContainerRef = useRef(null);

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        const validExcelTypes = [
            'application/vnd.ms-excel',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            'application/vnd.oasis.opendocument.spreadsheet',
            'application/pdf'
        ];

        if (file && validExcelTypes.includes(file.type)) {
            const reader = new FileReader();

            reader.onload = (e) => {
                if (file.type.includes('pdf')) {
                    setFileType('pdf');
                    setFileData(e.target.result);
                } else {
                    // Es un archivo Excel
                    setFileType('excel');
                    const data = new Uint8Array(e.target.result);
                    const workbook = XLSX.read(data, { type: 'array' });
                    const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
                    const jsonData = XLSX.utils.sheet_to_json(firstSheet);
                    setFileData(jsonData);
                }
            };

            if (file.type.includes('pdf')) {
                reader.readAsArrayBuffer(file);
            } else {
                reader.readAsArrayBuffer(file);
            }

            addMessage('bot', `Archivo "${file.name}" cargado correctamente. Ahora puedes hacer preguntas sobre su contenido.`);
        } else {
            addMessage('bot', 'Por favor, sube un archivo Excel (.xls, .xlsx, .ods) o PDF válido.');
        }
    };

    const searchInExcel = (query) => {
        if (!fileData || fileType !== 'excel') return null;

        // Limpia el query (elimina espacios y convierte a string)
        const cleanQuery = query.trim().toString();

        // Busca coincidencias exactas en CD_DOC_IDENT
        const results = fileData.filter(row => {
            // Si estamos buscando por documento de identidad
            if (row.CD_DOC_IDENT && row.CD_DOC_IDENT.toString() === cleanQuery) {
                return true;
            }
            return false;
        });

        return results;
    };

    const formatExcelResults = (results) => {
        if (!results || results.length === 0) {
            return "No se encontraron resultados para tu búsqueda.\nPor favor, ingresa el número de documento exacto.";
        }

        return results.map(row => {
            const formattedRow = [
                '📋 Información del cliente:',
                '━━━━━━━━━━━━━━━━━━━━━━',
                `Documento: ${row.CD_DOC_IDENT}`,
                `Tasa EA: ${row.Tasa_EA}`,
                `Tasa NMV: ${row.Tasa_NMV}`,
                `Proveedor: ${row.PROVEEDOR}`
            ].join('\n');
            return formattedRow;
        }).join('\n\n');
    };

    const addMessage = (type, content) => {
        setMessages(prev => [...prev, { type, content, timestamp: new Date() }]);
        setTimeout(() => {
            if (chatContainerRef.current) {
                chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
            }
        }, 100);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        if (!fileData) {
            addMessage('bot', 'Por favor, sube un archivo primero para poder realizar búsquedas.');
            return;
        }

        addMessage('user', inputValue);
        setInputValue('');
        setIsLoading(true);

        setTimeout(() => {
            if (fileType === 'excel') {
                const results = searchInExcel(inputValue);
                const formattedResults = formatExcelResults(results);
                addMessage('bot', formattedResults);
            } else {
                addMessage('bot', 'Buscando en el PDF...');
            }
            setIsLoading(false);
        }, 500);
    };

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button
                className="chatbot-toggle-button"
                onClick={toggleChat}
                style={{ display: isOpen ? 'none' : 'flex' }}
            >
                <FontAwesomeIcon icon={faComments} />
                Asistente de Archivos
            </button>

            <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
                <div className="chatbot-header">
                    <h2>Asistente de Archivos BBVA</h2>
                    <div className="header-buttons">
                        <button
                            className="upload-button"
                            onClick={() => fileInputRef.current.click()}
                        >
                            <FontAwesomeIcon icon={faFileUpload} />
                            Subir Archivo
                        </button>
                        <button
                            className="close-button"
                            onClick={toggleChat}
                        >
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                    </div>
                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileUpload}
                        accept=".pdf,.xls,.xlsx,.ods"
                        style={{ display: 'none' }}
                    />
                </div>

                <div className="chat-messages" ref={chatContainerRef}>
                    {messages.length === 0 && (
                        <div className="welcome-message">
                            <FontAwesomeIcon icon={faFileAlt} />
                            <p>Sube un archivo Excel o PDF para comenzar a hacer preguntas sobre su contenido.</p>
                        </div>
                    )}
                    {messages.map((message, index) => (
                        <div key={index} className={`message ${message.type}`}>
                            <div className="message-content">
                                {message.content}
                            </div>
                            <div className="message-timestamp">
                                {message.timestamp.toLocaleTimeString()}
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="message bot">
                            <div className="loading-dots">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    )}
                </div>

                <form onSubmit={handleSubmit} className="chat-input-form">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Escribe tu búsqueda aquí..."
                        disabled={!fileData || isLoading}
                    />
                    <button type="submit" disabled={!fileData || isLoading}>
                        <FontAwesomeIcon icon={faPaperPlane} />
                    </button>
                </form>
            </div>
        </>
    );
};

export default ChatBot; 