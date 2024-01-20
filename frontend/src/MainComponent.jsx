// MainComponent.jsx
import React, { useState } from 'react';
import InputForm from './InputForm';
import PredictionDisplay from './PredictWinner';

const MainComponent = () => {
    const [predictions, setPredictions] = useState([]);

    const handleFormSubmit = async (data) => {
        try {
            const response = await fetch('http://localhost:8000/api/post/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Error predicting data');
            }

            const result = await response.json();
            setPredictions(result.prediction_result);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Pokemon Type Prediction</h1>
            <InputForm onSubmit={handleFormSubmit} />
            <PredictionDisplay predictions={predictions} />
        </div>
    );
};

export default MainComponent;
