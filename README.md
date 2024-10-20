# Pokémon Battle Predictor

This project is a web application that allows users to predict the outcome of battles between Pokémon types using a machine learning model. The frontend is built with Vue.js and features a user-friendly interface with cool icons representing Pokémon types. The backend is powered by Django and handles the machine learning model predictions.

## Features

- **Interactive UI**: Select Pokémon types from a dropdown menu with icons.
- **Real-time Predictions**: Get instant battle outcome predictions.
- **Machine Learning**: Utilizes a trained machine learning model for accurate predictions.
- **Responsive Design**: Works seamlessly on both desktop and mobile devices.

## Demo

Include a link to your live demo here, if available.

## Screenshots

Add some screenshots of your app here to showcase the UI and features.

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

- Node.js
- npm or yarn
- Python 3
- pip

### Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/pokemon-battle-predictor.git
    cd pokemon-battle-predictor
    ```

2. **Backend Setup (Django):**

    - Create a virtual environment and activate it:
      ```bash
      python -m venv venv
      source venv/bin/activate  # On Windows use `venv\Scripts\activate`
      ```

    - Install the required packages:
      ```bash
      pip install -r requirements.txt
      ```

    - Apply the migrations:
      ```bash
      python manage.py migrate
      ```

    - Start the Django server:
      ```bash
      python manage.py runserver
      ```

3. **Frontend Setup (Vue.js):**

    - Navigate to the `frontend` directory:
      ```bash
      cd frontend
      ```

    - Install the dependencies:
      ```bash
      npm install
      ```

    - Run the Vue.js development server:
      ```bash
      npm run serve
      ```

    The Vue.js app will run on `http://localhost:8080` and will communicate with the Django backend running on `http://localhost:8000`.

### Usage

1. Open your web browser and navigate to `http://localhost:8080`.
2. Select two Pokémon types from the dropdown menus.
3. Click on the "Predict" button to see the predicted winner.

### Project Structure

- `backend/`: Contains the Django project and app.
- `frontend/`: Contains the Vue.js app.
- `model/`: Contains the machine learning model and related scripts.

### Customization

#### Adding New Pokémon Types

1. **Frontend**: Update the Vue.js component to include new Pokémon type icons.
2. **Backend**: Update the Django model to handle new Pokémon types and retrain the machine learning model if necessary.

### Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

### Acknowledgements

- The Pokémon icons are sourced from [your icon source].
- The machine learning model was trained using [dataset source].

### Contact

If you have any questions or suggestions, feel free to open an issue or contact me at [your email].
