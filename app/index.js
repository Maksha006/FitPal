import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from "react-native";
import { Link, Redirect, Stack } from "expo-router";
import { useFonts } from "expo-font";
import registerNNPushToken from "native-notify";
import { registerForPushNotificationsAsync } from './notifications';

export default function Page() {
  registerNNPushToken(13181, 'xfqy7wBj8mN1C2yDdETKdL');
  useEffect(() => {
    registerForPushNotificationsAsync(); // Demande des autorisations de notification au lancement de l'application
  }, []);
  
  //const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Qualy-Bold": require("./assets/fonts/Qualy-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (<Redirect href={'Welcome'}/>)
}

