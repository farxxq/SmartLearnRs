const db = require("../config/db");
require("dotenv").config();
const axios = require("axios");
const admin = require("firebase-admin");
const { v4: uuidv4 } = require("uuid");

exports.registerUser = async (req, res) => {
    try {
        const { name, email, password, past_performance, survey } = req.body;

        // Step 1: Create User in Firebase Authentication
        const userRecord = await admin.auth().createUser({ email, password, displayName: name });

        // Step 2: Store user info in Firestore (inside users/{user_id})
        const userRef = db.collection("users").doc(userRecord.uid);
        await userRef.set({
            name,
            email,
            past_performance,
            survey // Save survey responses
        });

        // Step 3: Call AI Model (Flask API) for recommendation
        const aiResponse = await axios.post("http://127.0.0.1:5000/predict", { past_performance });

        // Step 4: Store recommendation inside a subcollection "recommendations"
        const recRef = userRef.collection("recommendations").doc(uuidv4());
        await recRef.set({ recommendation: aiResponse.data.recommendation });

        // Step 5: Return user ID and recommendation
        res.json({
            message: "User registered!",
            user_id: userRecord.uid, // Include user ID
            recommendation: aiResponse.data.recommendation
        });

    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Firebase does not allow direct email/password authentication via admin SDK
        // Instead, we use Firebase Authentication's REST API
        const firebaseAuthURL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.FIREBASE_API_KEY}`;

        const response = await axios.post(firebaseAuthURL, {
            email,
            password,
            returnSecureToken: true
        });

        // Extract user ID and token
        const { idToken, localId } = response.data;

        res.json({
            message: "Login successful",
            user_id: localId,
            token: idToken
        });
    } catch (error) {
        console.error("Error:", error.response?.data || error.message);
        res.status(401).json({ error: "Invalid email or password" });
    }
};
