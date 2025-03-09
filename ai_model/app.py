from flask import Flask, request, jsonify
import joblib
import numpy as np

app = Flask(__name__)

# Load the trained model
model = joblib.load("C:/Users/Farooq/OneDrive/Documents/Final year project/Chosen Research paper/SmartLearnRsCodes/ai_model/model/recommendation_model.pkl")


@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json
        prediction = model.predict(np.array([[data['past_performance']]]))
        return jsonify({'recommendation': int(prediction[0])})
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
