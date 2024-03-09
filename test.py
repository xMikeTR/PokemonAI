import pandas as pd

# Define the battle matchups along with Pokémon types and the winner
battles_data = [
    ['Lucario', 'Steel', 'Fight', 'Charizard', 'Fire', 'Flying', 'Lucario'],
    ['Mewtwo', 'Psychic', 'None', 'Gengar', 'Ghost', 'Poison', 'Gengar'],
    # Add more battles as needed...
]

# Create DataFrame
columns = ['PokemonA', 'TypeA1', 'TypeA2', 'PokemonB', 'TypeB1', 'TypeB2', 'Winner']
battles_df = pd.DataFrame(battles_data, columns=columns)

# Save DataFrame to CSV
battles_df.to_csv('pokemon_battles.csv', index=False)

# Display the DataFrame
print(battles_df)