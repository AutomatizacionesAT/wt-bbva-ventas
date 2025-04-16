import React from 'react';
import './pdfmodal.scss';

const PDFModal = ({ isOpen, onClose, pdfUrl }) => {
    if (!isOpen) return null;

    return (
        <div className="pdf-modal">
            <div className="pdf-modal__overlay" onClick={onClose}></div>
            <div className="pdf-modal__content">
                <button className="pdf-modal__close" onClick={onClose}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                <iframe
                    src={pdfUrl}
                    className="pdf-modal__iframe"
                    title="PDF Viewer"
                />
            </div>
        </div>
    );
};

export default PDFModal; 