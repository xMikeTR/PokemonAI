# defining the training dataset
from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import train_test_split
from sklearn import metrics
from sklearn.metrics import confusion_matrix
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler, OneHotEncoder
import numpy as np
import matplotlib.pyplot as plt
from matplotlib.colors import ListedColormap
import pandas as pd
import pickle

""" trainingData = {
   'PokemonA_Type': ['Bug','Bug','Bug','Dark','Dark','Dragon','Electric','Electric','Fairy','Fairy','Fairy','Fighting','Fighting','Fighting','Fighting','Fighting','Fire','Fire','Fire','Fire','Flying','Flying','Flying','Ghost','Ghost','Ground','Ground','Ground','Ground','Ground','Ice','Ice','Ice','Ice','Poison','Poison','Psychic','Psychic','Rock','Rock','Rock','Rock','Steel','Steel','Steel','Water','Water','Water','Grass','Grass','Grass'],
   'PokemonB_Type': ['Dark','Grass','Psychic','Ghost','Psychic','Dragon','Flying','Water','Dark','Dragon','Fighting','Dark','Ice','Normal','Rock','Steel','Bug','Grass','Ice','Steel','Bug','Grass','Fighting','Ghost','Psychic','Electric','Fire','Poison','Rock','Steel','Dragon','Flying','Grass','Ground','Fairy','Grass','Fighting','Poison','Bug','Fire','Flying','Ice','Fairy','Ice','Rock','Fire','Ground','Rock','Ground','Rock','Water'],
          'Winner': ['Bug','Bug','Bug','Dark','Dark','Dragon','Electric','Electric','Fairy','Fairy','Fairy','Fighting','Fighting','Fighting','Fighting','Fighting','Fire','Fire','Fire','Fire','Flying','Flying','Flying','Ghost','Ghost','Ground','Ground','Ground','Ground','Ground','Ice','Ice','Ice','Ice','Poison','Poison','Psychic','Psychic','Rock','Rock','Rock','Rock','Steel','Steel','Steel','Water','Water','Water','Grass','Grass','Grass']
}

df = pd.DataFrame(trainingData)

df.to_csv('training_data.csv', index=False) """




# pokemon_battle.py



data = pd.read_csv('/home/mike/Coding_Projects/JS_Projects/Vite/PokemonDev/PokemonAI/training_data.csv')
data.head()

feature_cols = ['PokemonA_Type','PokemonB_Type']
X = data.iloc[1:, data.columns.get_indexer(feature_cols)].values
y = data.iloc[1:, data.columns.get_loc('Winner')].values


X_train, X_test, y_train, y_test = train_test_split(X,y, test_size=0.25, random_state=0)

categorical_features = [0, 1]  # Indices of categorical features
categorical_transformer = OneHotEncoder(handle_unknown='ignore')

preprocessor = ColumnTransformer(
    transformers=[
        ('cat', categorical_transformer, categorical_features)
    ])

# Creating the pipeline with preprocessing and the classifier
pipeline = Pipeline(steps=[('preprocessor', preprocessor),
                             ('classifier', DecisionTreeClassifier())])

# Fitting the pipeline on the training data
pipeline.fit(X_train, y_train)

# Predicting on the test data
y_pred = pipeline.predict(X_test)

# Evaluating the accuracy
print('Accuracy Score:', metrics.accuracy_score(y_test, y_pred))

cm = confusion_matrix(y_test, y_pred)
print(cm)

X_set, y_set = X_test, y_test
for label in set(y_set):
    plt.scatter(X_set[y_set == label, 0], X_set[y_set == label, 1], label=label)

plt.title("Decision Tree - Scatter Plot")
plt.xlabel("Type")
plt.ylabel("Winner")
plt.legend()
plt.show()


# Create Decision Tree classifer object
classifier = DecisionTreeClassifier(criterion="entropy", max_depth=3)# Train Decision Tree Classifer
classifier = classifier.fit(X_train,y_train)#Predict the response for test dataset
y_pred = classifier.predict(X_test)# Model Accuracy, how often is the classifier correct?
print("Accuracy:",metrics.accuracy_score(y_test, y_pred))

with open ('PokemonModel.pkl', 'wb') as file:
    pickle.dump(pipeline, file)

