import * as React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { Link, Redirect, Stack,Tabs, useRouter } from "expo-router";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

export default function Page() {
  
  //const router = useRouter();

  const currentDate = new Date();

  // Obtenez le jour de la semaine
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dayOfWeek = dayNames[currentDate.getDay()];
  
  // Formattez la date
  const day = currentDate.getDate();
  const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  const month = monthNames[currentDate.getMonth()]; 

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.date}>
        {`${dayOfWeek}, ${day} ${month}`} 
          <Image source={require("../assets/weather.png")} style={styles.sunIcon} />
        </Text>
        <Image source={require("../assets/profilecircle.png")} style={styles.icon} />
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
        <Image source={require("../assets/task-1.png")} style={styles.taskIcon} />
        <Image source={require("../assets/task-2.png")} style={styles.taskIcon} />
        <Image source={require("../assets/task-3.png")} style={styles.taskIcon} />
      </View>

      <View style={styles.activityStatus}>
        <Text>Activity status</Text>
        <View style={styles.waterIntakeContainer}>
          <View style={styles.waterIntake}>
            {/* Vous pouvez ajouter la barre de progression ici */}
          </View>
          <Text>4 Liters</Text>
        </View>
      </View>

    </View>
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