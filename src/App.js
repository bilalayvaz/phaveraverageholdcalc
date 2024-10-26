import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FallingPNG from './FallingPNG'; 
import './App.css'; 
import signature from './signature.svg';

function App() {
    const [averageAmount, setAverageAmount] = useState('');
    const [holdAmount, setHoldAmount] = useState('');
    const [result, setResult] = useState(null);

    useEffect(() => {
        const avg = parseFloat(averageAmount);
        const hold = parseFloat(holdAmount);
        if (!isNaN(avg) && !isNaN(hold)) {
            setResult(avg > hold ? hold : avg);
        } else {
            setResult(null);
        }
    }, [averageAmount, holdAmount]);

    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light">
            <div className="calculator p-4 bg-white rounded shadow position-relative" 
                style={{ width: '90%', maxWidth: '400px' }}>
                {/* SVG'yi formun üstüne ekleyin */}
                <img 
                    src={signature} 
                    alt="Signature" 
                    style={{ 
                        position: 'absolute', 
                        top: '-30px', 
                        left: '50%', 
                        transform: 'translateX(-50%)', 
                        maxWidth: '80%', 
                        height: 'auto'
                    }} 
                />
                <h3 className="text-center mb-4" style={{ color: '#6157ac' }}>Phairdrop S2 Tool</h3>
                <div className="form-group" style={{ marginBottom: '15px' }}>
                    <label htmlFor="averageAmount">Average Amount</label>
                    <input
                        type="number"
                        className="form-control"
                        id="averageAmount"
                        placeholder="Enter Average Amount"
                        value={averageAmount}
                        onChange={(e) => setAverageAmount(e.target.value)}
                    />
                </div>
                <div className="form-group" style={{ marginBottom: '15px' }}>
                    <label htmlFor="holdAmount">Hold Amount</label>
                    <input
                        type="number"
                        className="form-control"
                        id="holdAmount"
                        placeholder="Enter Hold Amount"
                        value={holdAmount}
                        onChange={(e) => setHoldAmount(e.target.value)}
                    />
                </div>
                <div className="text-center">
                    <p className="result-display" id="result">
                        The amount you will be evaluated for
                    </p>
                    <p className="result-display" style={{ fontSize: '24px', color: '#6157ac', fontWeight: 'bold', border: '2px solid #6157ac', padding: '10px', borderRadius: '5px', backgroundColor: '#f8f9fa' }} id="result">
                        {result !== null ? result : '-'}
                    </p>
                </div>
            </div>
            <FallingPNG />
        </div>
    );
}

export default App;
