import React, { useState } from 'react';
import {useNavigation } from "expo-router";
import { View, Text, TouchableOpacity, StyleSheet, Button, ScrollView, Image } from 'react-native'; // Ajoutez Button depuis 'react-native'

const WaterScreen = ({ objectif }) => {
  const navigation = useNavigation();
  const [cups, setCups] = useState(Array(8).fill(false)); // State to track cup status
  const handleCupClick = (index) => {
    const newCups = [...cups];
    newCups[index] = !newCups[index];
    setCups(newCups);
  };

  const fullCups = cups.filter((cup) => cup).length;
  const totalCups = cups.length;
  const remainedLiters = ((totalCups - fullCups) * 250) / 1000;

  // Ajoutez cette fonction pour naviguer vers la page WaterIntakeCalculator
  const navigateToCalculator = () => {
    navigation.navigate('waterIntakeCalculator');
  };

  return (
    <ScrollView style={styles.background}>
      <View style={styles.container}>
        <Image source={require('../assets/waterDrop.png')} style={styles.waterDrop} />
        <Text style={styles.goalText}>1000ML 25%</Text>
        <View style={styles.cups}>
          {cups.map((cup, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.cupSmall, cup && styles.cupSmallFull]}
              onPress={() => handleCupClick(index)}>
              <Text style={cup ? styles.fullCupText : styles.emptyCupText}>{cup ? '✓' : ''}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <Text style={styles.drinkMore}>2/8 500ML Cups</Text>
        <Text style={styles.totalGoal}>4000ML Daily Goal</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#E5F5FB',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
  },
  waterDrop: {
    width: 200,
    height: 300,
    resizeMode: 'contain',
  },
  goalText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 15,
  },
  cups: {
    flexDirection: 'row',
    marginTop: 30,
  },
  cupSmall: {
    width: 30,
    height: 50,
    margin: 5,
    borderRadius: 5,
    backgroundColor: '#E0E0E0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cupSmallFull: {
    backgroundColor: '#007AFF',
  },
  fullCupText: {
    color: 'white',
    fontSize: 24,
  },
  emptyCupText: {
    fontSize: 24,
  },
  drinkMore: {
    marginTop: 15,
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalGoal: {
    marginTop: 10,
    fontSize: 18,
  },
});

export default WaterScreen;
