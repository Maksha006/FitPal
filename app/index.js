import React, { useEffect } from 'react';
import { Link, Redirect, Stack } from "expo-router";
import { useFonts } from "expo-font";
import registerNNPushToken from "native-notify";
import { registerForPushNotificationsAsync } from './notifications';
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

export default function Page() {
  registerNNPushToken(13181, 'xfqy7wBj8mN1C2yDdETKdL');
  useEffect(() => {
    registerForPushNotificationsAsync(); // Demande des autorisations de notification au lancement de l'application
  }, []);
  
  //const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const firebaseConfig = {
    apiKey: "AIzaSyAOyRROrT-eeAUfiad2dsWjJH7C-Fpsgeg",
    authDomain: "fitpal-c0893.firebaseapp.com",
    databaseURL: "https://fitpal-c0893-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "fitpal-c0893",
    storageBucket: "fitpal-c0893.appspot.com",
    messagingSenderId: "900356005493",
    appId: "1:900356005493:web:1752d69ac0bc5fe919a23c",
    measurementId: "G-8FV4005HG0"
  };

  const app = initializeApp(firebaseConfig);
  const db = getDatabase(firebaseConfig)

  const [fontsLoaded, error] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Qualy-Bold": require("./assets/fonts/Qualy-Bold.ttf"),
    "Nexa-Trial-LightItalic": require("./assets/fonts/Nexa-Trial-LightItalic.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (<Redirect href={'Welcome'}/>)
}

