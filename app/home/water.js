import React, { useState } from 'react';
import {useNavigation } from "expo-router";
import { View, Text, TouchableOpacity, StyleSheet, Button, ScrollView } from 'react-native'; // Ajoutez Button depuis 'react-native'

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
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.heading}>Drink Water</Text>
        <Text>
          <Text style={styles.subHeading}>Goal:</Text> {cups}
        </Text>
        <Button title="Calculate Water Intake" onPress={navigateToCalculator} />
        <View style={styles.cup}>
          <View style={styles.remained}>
            <Text style={styles.liters}>{remainedLiters.toFixed(2)}L</Text>
            <Text style={styles.small}>Remained</Text>
          </View>
          <View style={[styles.percentage, { height: `${(fullCups / totalCups) * 100}%` }]}>
            <Text>{`${(fullCups / totalCups) * 100}%`}</Text>
          </View>
        </View>
        <Text style={styles.text}>Select how many glasses of water that you have drank</Text>
        <View style={styles.cups}>
          {cups.map((cup, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.cupSmall, cup && styles.cupSmallFull]}
              onPress={() => handleCupClick(index)}>
              <Text>{cup ? '250 ml' : ''}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3494e4',
    alignItems: 'center',
  },
  heading: {
    margin: 10,
    fontSize: 24,
    color: '#fff',
  },
  subHeading: {
    fontWeight: '400',
    margin: 10,
    color: '#fff',
  },
  text: {
    textAlign: 'center',
    margin: 5,
    color: '#fff',
  },
  cup: {
    backgroundColor: '#fff',
    borderColor: '#144fc6',
    borderWidth: 4,
    borderRadius: 40,
    height: 120,
    width: 150,
    margin: 30,
    flexDirection: 'column',
  },
  cupSmall: {
    height: 95,
    width: 50,
    borderRadius: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    margin: 5,
    fontSize: 14,
  },
  cupSmallFull: {
    backgroundColor: '#6ab3f8',
    color: '#fff',
  },
  cups: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    width: 280,
  },
  remained: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  liters: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  small: {
    fontSize: 12,
  },
  percentage: {
    backgroundColor: '#6ab3f8',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default WaterScreen;