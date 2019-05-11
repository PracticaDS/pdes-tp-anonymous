import React from 'react';
import './Information.css'

class Information extends React.Component {
    render() {
        return (
            <div className="information-container">
                <h2>Detalles</h2>
                <div className="information-details">
                    <div className="info name">Starter</div>
                    <div className="info cost">Costo: <span>$800</span></div>
                    <div className="info frequency">Frecuencia: <span>1/s</span></div>
                </div>
            </div>
        );
    }
}

export default Information;
