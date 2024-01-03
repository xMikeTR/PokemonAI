#Data Cleanup

import pandas as pd

data = pd.read_csv('/home/mike/Coding_Projects/JS_Projects/Vite/PokemonDev/PokemonAI/archive(1)/Pokedex_Ver_SV2.csv')

columnsToDrop = ['Original_Name','Color','Gender_Male','Gender_Female','Gender_Unknown','Egg_Steps','Egg_Group1','Egg_Group2','Get_Rate','Base_Experience','Experience_Type','Category','Mega_Evolution_Flag','Region_Form','E_HP','E_Attack','E_Defense','E_SP_Attack','E_SP_Defense','E_Speed']



data.drop(columnsToDrop, inplace=True, axis=1)

PDataset = 'pDataset.csv'
data.to_csv(PDataset, index=False)