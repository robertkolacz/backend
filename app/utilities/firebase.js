const firebase = require('firebase');

const config = {
    apiKey: "AIzaSyD2PDW_GPYlyG_WxfTAu7fpkGBOVj7XNww",
    authDomain: "allegro-like-app.firebaseapp.com",
    databaseURL: "https://allegro-like-app.firebaseio.com",
    projectId: "allegro-like-app",
    storageBucket: "allegro-like-app.appspot.com",
    messagingSenderId: "324976143503"
};
firebase.initializeApp(config);

module.exports = firebase;