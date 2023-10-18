import React from 'react';
import { View, Text, Image, StyleSheet, Button, Dimensions } from 'react-native';
import { useNavigation} from "expo-router";
import { RFValue } from "react-native-responsive-fontsize";

const deviceWidth = Dimensions.get('window').width;

const WaterReminderCard = () => {

const navigation = useNavigation();

  return (
    <View style={styles.cardContainer}>
      
      <View style={styles.textContainer}>
        <Text style={styles.timeText}>09:00 AM</Text>
        <Text style={styles.waterText}>300ml water</Text>
        <View style={styles.buttonContainer}>
          <Button title="Add now" color="#000" onPress={() => {navigation.navigate('water')}} />
        </View>
      </View>
      
      <Image source={require('./assets/water.png')} style={styles.waterImage} />
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
        flexDirection: 'column',
        flex: 1,
    },
    timeText: {
      fontSize: RFValue(18),  // Légèrement réduit à 22
      fontWeight: 'bold',
    },
    waterText: {
      fontSize: RFValue(18),  // Légèrement réduit à 18
    },
    waterImage: {
      width: 100,  // Réduit à 60
      height: 165,  // Réduit à 120
      resizeMode: 'cover'
    },
    buttonContainer: {
        alignSelf: 'flex-start',  // Aligner le bouton à gauche
        width: 100,  // Définir une largeur spécifique pour le bouton
        marginTop: 10,  // Réduit à 15
    }
  });  

export default WaterReminderCard;