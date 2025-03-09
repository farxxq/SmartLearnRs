const admin = require("firebase-admin");
const serviceAccount = require("./firebase.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:
    "firebase-adminsdk-fbsvc@smartlearnrs-a6e8a.iam.gserviceaccount.com",
});
const db = admin.firestore();
module.exports = db;
