import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import { Image } from "expo-image";
import { useRouter, useGlobalSearchParams } from "expo-router";
import WaterReminderCard from "../waterReminderCard";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';


export default function Page() {
  
  const router = useRouter();

  const { name, username} = useGlobalSearchParams();

  const currentDate = new Date();

  // Obtenez le jour de la semaine
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dayOfWeek = dayNames[currentDate.getDay()];
  
  // Formattez la date
  const day = currentDate.getDate();
  const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  const month = monthNames[currentDate.getMonth()];
  
  const [objectifs, setObjectifs] = React.useState([]);

  const genererObjectifs = () => {
    // Exemple d'objectifs générés aléatoirement
    const listeObjectifs = [
        "Faire 3 série de 20 pompes",
        "Faire 3 série de 15 squats",
        // ... ajoutez autant d'objectifs que vous voulez
    ];

    const objectifsDuJour = []; // contiendra les objectifs du jour

    // Génère 3 ou 4 objectifs aléatoirement
    for (let i = 0; i < 4; i++) {
        const indexAleatoire = Math.floor(Math.random() * listeObjectifs.length);
        objectifsDuJour.push(listeObjectifs[indexAleatoire]);
        listeObjectifs.splice(indexAleatoire, 1); // pour éviter de choisir le même objectif deux fois
    }

    setObjectifs(objectifsDuJour);
  }

  React.useEffect(() => {
    genererObjectifs();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.dateContainer}>
            <Text style={styles.date}>{`${dayOfWeek}, ${day} ${month}`}</Text>
            <Image source={require("../assets/weather.png")} style={styles.sunIcon} />
          </View>
          <Pressable onPress={() => router.push('/shaya')}>
            <Image source={require("../assets/profilecircle.png")} style={styles.icon} />
          </Pressable>
        </View>

        <Text style={styles.greeting}>Hi, your name</Text>

        <View style={styles.targetContainer}>
          <Text style={styles.todayTarget}>Today target</Text>
          <View style={styles.dots}>
            <Image source={require("../assets/dot-one.png")} style={styles.dotIcon} />
            <Image source={require("../assets/dot-one.png")} style={styles.dotIcon} />
            <Image source={require("../assets/dot-one.png")} style={styles.dotIcon} />
          </View>
        </View>
        
        <View style={styles.tasks}>
        {objectifs.map((objectif, index) => (
        <View key={index} style={styles.task}>
            <Text>{objectif}</Text>
            {/* Vous pouvez ajouter des icônes ou d'autres éléments ici */}
        </View>
          ))}
        </View>

        <View style={styles.activityStatus}>
          <WaterReminderCard/>
        </View>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  date: {
    fontSize: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:20,
  },
  sunIcon: {
    width: 24,
    height: 24,
    marginLeft: 5,
  },
  icon: {
    width: 50,
    height: 50,
    marginTop:20,
  },
  greeting: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  targetContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop:35,
    marginBottom: 20,
  },
  todayTarget: {
    fontSize: 20,
  },
  dots: {
    flexDirection: 'row',
  },
  dotIcon: {
    width: 10,
    height: 10,
    marginLeft: 5,
  },
  task3Icon: {
    height: 18,
    width: 267,
    position: "absolute",
    top: 209,
  },
  task2Icon: {
    height: 19,
    width: 267,
    position: "absolute",
    top: 254,
  },
  task1Icon: {
    height: 18,
    width: 267,
    position: "absolute",
    top: 166,
  },
  tasks: {
    marginTop: 10,
    marginBottom: 20,
  },
  taskIcon: {
    width: '100%',
    height: 23,  // Ajustez selon la taille de vos images
    marginBottom: 10,
  },
  activityStatus: {
    marginTop: 20,
  },
  waterIntakeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  waterIntake: {
    flex: 1,
    height: 20,
    backgroundColor: '#E0E0E0',
    marginRight: 10,
  },
});