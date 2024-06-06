// Importamos la función para inicializar la aplicación de Firebase
import { initializeApp } from "firebase/app";

// Añade aquí tus credenciales
const firebaseConfig = {
    apiKey: "AIzaSyDzlc6lxDYs1Rz6qLVw9ierBchfcVssRNU",
    authDomain: "marketplace-services-e6e69.firebaseapp.com",
    projectId: "marketplace-services-e6e69",
    storageBucket: "marketplace-services-e6e69.appspot.com",
    messagingSenderId: "968177122482",
    appId: "1:968177122482:web:a862ab54fc8bc7a87e9dab",
    measurementId: "G-9QGZHHYJV6"
};

// Inicializamos la aplicación y la guardamos en firebaseApp
const firebaseApp = initializeApp(firebaseConfig);
// Exportamos firebaseApp para poder utilizarla en cualquier lugar de la aplicación

export default firebaseApp;