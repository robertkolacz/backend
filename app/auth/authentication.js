const admin = require('firebase-admin');

const serviceAccount = require("./allegro-like-app-firebase-adminsdk-4wi76-2cb22e3a04.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://allegro-like-app.firebaseio.com"
});