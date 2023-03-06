importScripts('https://www.gstatic.com/firebasejs/8.0.2/firebase-app.js'); 
importScripts('https://www.gstatic.com/firebasejs/8.0.2/firebase-messaging.js');firebase.initializeApp({ 
    apiKey: "AIzaSyB9CtCoBmnS-1W-jeMDWGkRhLtQ06h0tLQ",
    authDomain: "angular-pwa-noti.firebaseapp.com",
    projectId: "angular-pwa-noti",
    storageBucket: "angular-pwa-noti.appspot.com",
    messagingSenderId: "120873258448",
    appId: "1:120873258448:web:758babf16407377ccdfdd5",
    measurementId: "G-7H8XZQVR6L"
});const messaging = firebase.messaging();