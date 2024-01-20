// PredictionDisplay.jsx
import React from 'react';

const PredictionDisplay = ({ predictions }) => {
    return (
        <div>
            <h2>Predictions</h2>
            <pre>{JSON.stringify(predictions, null, 2)}</pre>
        </div>
    );
};

export default PredictionDisplay;
