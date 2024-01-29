import React, { useState } from 'react';
import './App.css';

const InputForm = ({ onSubmit }) => {
    const [pokemonAType, setPokemonAType] = useState('');
    const [pokemonBType, setPokemonBType] = useState('');
    const [selectedPokemonType, setSelectedPokemonType] = useState(null); // Keeps track of which type is currently being selected

    const handlePokemonTypeChange = (type) => {
        if (selectedPokemonType === null) {
            setPokemonAType(type);
            setSelectedPokemonType('A');
        } else {
            setPokemonBType(type);
            setSelectedPokemonType(null); // Reset back to null for next selection
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (pokemonAType !== '' && pokemonBType !== '') {
            onSubmit({ PokemonA_Type: pokemonAType, PokemonB_Type: pokemonBType });
            setPokemonAType('');
            setPokemonBType('');

        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="wrapper">
                <button className={`icon bug`} onClick={() => handlePokemonTypeChange('Bug')}>
                    <img src="src/assets/icons/bug.svg" alt="Bug" />
                </button>
                <button className={`icon dark`} onClick={() => handlePokemonTypeChange('Dark')}>
                    <img src="src/assets/icons/dark.svg" alt="Dark" />
                </button>
                <button className={`icon dragon`} onClick={() => handlePokemonTypeChange('Dragon')}>
                    <img src="src/assets/icons/dragon.svg" alt="Dragon" />
                </button>
                <button className={`icon electric`} onClick={() => handlePokemonTypeChange('Electric')}>
                    <img src="src/assets/icons/electric.svg" alt="Electric" />
                </button>
                <button className={`icon fairy`} onClick={() => handlePokemonTypeChange('Fairy')}>
                    <img src="src/assets/icons/fairy.svg" alt="Fairy" />
                </button>
                <button className={`icon fighting`} onClick={() => handlePokemonTypeChange('Fighting')}>
                    <img src="src/assets/icons/fighting.svg" alt="Fighting" />
                </button>
                <button className={`icon fire`} onClick={() => handlePokemonTypeChange('Fire')}>
                    <img src="src/assets/icons/fire.svg" alt="Fire" />
                </button>
                <button className={`icon flying`} onClick={() => handlePokemonTypeChange('Flying')}>
                    <img src="src/assets/icons/flying.svg" alt="Flying" />
                </button>
                <button className={`icon ghost`} onClick={() => handlePokemonTypeChange('Ghost')}>
                    <img src="src/assets/icons/ghost.svg" alt="Ghost" />
                </button>
                <button className={`icon grass`} onClick={() => handlePokemonTypeChange('Grass')}>
                    <img src="src/assets/icons/grass.svg" alt="Grass" />
                </button>
                <button className={`icon ground`} onClick={() => handlePokemonTypeChange('Ground')}>
                    <img src="src/assets/icons/ground.svg" alt="Ground" />
                </button>
                <button className={`icon ice`} onClick={() => handlePokemonTypeChange('Ice')}>
                    <img src="src/assets/icons/ice.svg" alt="Ice" />
                </button>
                <button className={`icon normal`} onClick={() => handlePokemonTypeChange('Normal')}>
                    <img src="src/assets/icons/normal.svg" alt="Normal" />
                </button>
                <button className={`icon poison`} onClick={() => handlePokemonTypeChange('Poison')}>
                    <img src="src/assets/icons/poison.svg" alt="Poison" />
                </button>
                <button className={`icon psychic`} onClick={() => handlePokemonTypeChange('Psychic')}>
                    <img src="src/assets/icons/psychic.svg" alt="Psychic" />
                </button>
                <button className={`icon rock`} onClick={() => handlePokemonTypeChange('Rock')}>
                    <img src="src/assets/icons/rock.svg" alt="Rock" />
                </button>
                <button className={`icon steel`} onClick={() => handlePokemonTypeChange('Steel')}>
                    <img src="src/assets/icons/steel.svg" alt="Steel" />
                </button>
                <button className={`icon water`} onClick={() => handlePokemonTypeChange('Water')}>
                    <img src="src/assets/icons/water.svg" alt="Water" />
                </button>

            </div>

        </form>
    );
};

export default InputForm;
