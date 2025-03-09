import os
import pandas as pd
import numpy as np
from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
import joblib

# Ensure the "model/" directory exists
model_dir = "model"
os.makedirs(model_dir, exist_ok=True)  # Creates the directory if it doesn't exist

# Sample dataset (Replace with real dataset later)
data = {
    'past_performance': [60, 75, 85, 45, 30, 90, 50, 20, 80, 95],
    'recommendation': [1, 2, 2, 3, 3, 1, 3, 3, 2, 1]  # 1 = Advanced, 2 = Intermediate, 3 = Basic
}
df = pd.DataFrame(data)

X = df[['past_performance']]
y = df['recommendation']

# Split dataset into training and test sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train model
model = DecisionTreeClassifier()
model.fit(X_train, y_train)

# Save model
model_path = os.path.join(model_dir, "recommendation_model.pkl")
joblib.dump(model, model_path)

# Evaluate model
y_pred = model.predict(X_test)
print(f'Model Accuracy: {accuracy_score(y_test, y_pred) * 100:.2f}%')

print(f"Model saved successfully at: {model_path}")
