import React from 'react';
import { View, Text, Image, StyleSheet, Button, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;

const WaterReminderCard = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.timeText}>09:00 AM</Text>
        <Text style={styles.waterText}>300ml water</Text>
      </View>
      <Image source={require('./assets/water.png')} style={styles.waterImage} />
      <View style={styles.buttonContainer}>
        <Button title="Add now" color="#000" onPress={() => { /* Votre fonction ici */ }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    cardContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#E0E0E0',
      padding: deviceWidth * 0.05,  // Ajusté en fonction de la largeur de l'appareil
      borderRadius: 15,
      elevation: 5,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      margin: 8,
    },
    textContainer: {
      flex: 1,
    },
    timeText: {
      fontSize: deviceWidth * 0.05,  // Légèrement réduit à 22
      fontWeight: 'bold',
    },
    waterText: {
      fontSize: deviceWidth * 0.05,  // Légèrement réduit à 18
    },
    waterImage: {
      width: 60,  // Réduit à 60
      height: 120,  // Réduit à 120
      resizeMode: 'contain'
    },
    buttonContainer: {
      marginLeft: 15,  // Réduit à 15
    }
  });  

export default WaterReminderCard;