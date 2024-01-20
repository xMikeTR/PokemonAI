import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InputForm = ({ onSubmit }) => {
    const [pokemonAType, setPokemonAType] = useState('');
    const [pokemonBType, setPokemonBType] = useState('');

    const handlePokemonATypeChange = (e) => {
        setPokemonAType(e.target.value);
    };

    const handlePokemonBTypeChange = (e) => {
        setPokemonBType(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ PokemonA_Type: pokemonAType, PokemonB_Type: pokemonBType });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Pokemon A Type:
                <select value={pokemonAType} onChange={handlePokemonATypeChange}>
                    <option value="">Select Type</option>
                    <option value="Type1">Normal</option>
                    <option value="Type2">Fire</option>
                    <option value="Type2">Water</option>
                    <option value="Type2">Grass</option>
                    <option value="Type2">Flying</option>
                    <option value="Type2">Fighting</option>
                    <option value="Type2">Poison</option>
                    <option value="Type2">Electric</option>
                    <option value="Type2">Ground</option>
                    <option value="Type2">Rock</option>
                    <option value="Type2">Psychic</option>
                    <option value="Type2">Ice</option>
                    <option value="Type2">Bug</option>
                    <option value="Type2">Ghost</option>
                    <option value="Type2">Steel</option>
                    <option value="Type2">Dragon</option>
                    <option value="Type2">Dark</option>
                    <option value="Type2">Fairy</option>
                </select>
            </label>
            <br />
            <label>
                Pokemon B Type:
                <select value={pokemonBType} onChange={handlePokemonBTypeChange}>
                    <option value="">Select Type</option>
                    <option value="Type1">Normal</option>
                    <option value="Type2">Fire</option>
                    <option value="Type2">Water</option>
                    <option value="Type2">Grass</option>
                    <option value="Type2">Flying</option>
                    <option value="Type2">Fighting</option>
                    <option value="Type2">Poison</option>
                    <option value="Type2">Electric</option>
                    <option value="Type2">Ground</option>
                    <option value="Type2">Rock</option>
                    <option value="Type2">Psychic</option>
                    <option value="Type2">Ice</option>
                    <option value="Type2">Bug</option>
                    <option value="Type2">Ghost</option>
                    <option value="Type2">Steel</option>
                    <option value="Type2">Dragon</option>
                    <option value="Type2">Dark</option>
                    <option value="Type2">Fairy</option>
                </select>
            </label>
            <br />
            <button type="submit">Predict</button>
        </form>
    );
};

export default InputForm;
