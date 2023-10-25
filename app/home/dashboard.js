import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import { Image } from "expo-image";
import { useRouter, useGlobalSearchParams } from "expo-router";
import WaterReminderCard from "../waterReminderCard";
import { db, ref, onValue, off } from '../../FirebaseConfig';

// import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";
// import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';


export default function Page() {

  const router = useRouter();

  const { name, username } = useGlobalSearchParams();

  const currentDate = new Date();

  // Obtenez le jour de la semaine
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dayOfWeek = dayNames[currentDate.getDay()];

  // Formattez la date
  const day = currentDate.getDate();
  const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  const month = monthNames[currentDate.getMonth()];

  const [objectifs, setObjectifs] = React.useState([]);


useEffect(() => {
  const objectifsRef = ref(db, 'objectifs');
  const detachListener = onValue(objectifsRef, snapshot => {
    const fetchedObjectifs = snapshot.val();
    if (fetchedObjectifs) {
      const objectifsListe = fetchedObjectifs.map(item => item.description);
      setObjectifs(objectifsListe.slice(0, 4)); // Ne prendre que les 4 premiers objectifs
    }
  });

  return () => {
    detachListener(); // Cette fonction détachera l'écouteur
  };
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

        <Text style={styles.greeting}>{`Hi, ${name}`}</Text>

        <View style={styles.targetContainer}>
          <Text style={styles.todayTarget}>Today target</Text>
          <View style={styles.dots}>
            <Image source={require("../assets/dot-one.png")} style={styles.dotIcon} />
            <Image source={require("../assets/dot-one.png")} style={styles.dotIcon} />
            <Image source={require("../assets/dot-one.png")} style={styles.dotIcon} />
          </View>
        </View>

        <View style={styles.tasksContainer}>
        {objectifs.map((objectif, index) => (
          <View key={index} style={styles.task}>
            
            <Text style={styles.taskText}>{objectif}</Text>
            </View>
          ))}
        </View>

        <View style={styles.activityStatus}>
          <WaterReminderCard />
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
    marginTop: 20,
  },
  sunIcon: {
    width: 24,
    height: 24,
    marginLeft: 5,
  },
  icon: {
    width: 50,
    height: 50,
    marginTop: 20,
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
    marginTop: 35,
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
  tasksContainer: {
    marginTop: 10,
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#F7F7F7',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  task: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 5,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  taskIcon: {
    marginRight: 10,
  },
  taskText: {
    fontSize: 16,
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