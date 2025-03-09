const db = require("../config/db");
const axios = require("axios");

exports.registerUser = async (req, res) => {
    try {
        const { name, email, past_performance } = req.body;
        const userRef = db.collection("users").doc(email);
        await userRef.set({ name, email, past_performance });

        // Call AI model for recommendation
        const aiResponse = await axios.post("http://127.0.0.1:5000/predict", { past_performance });
        await userRef.update({ recommendation: aiResponse.data.recommendation });

        res.json({ message: "User registered!", recommendation: aiResponse.data.recommendation });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};


exports.getUsers = async (req, res) => {
    try {
        const snapshot = await db.collection("users").get();
        const users = snapshot.docs.map(doc => doc.data());
        res.json(users);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
