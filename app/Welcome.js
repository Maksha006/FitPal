import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Platform } from 'react-native';
import { FontFamily} from "./GlobalStyles";
import {useNavigation } from "expo-router";

const Welcome = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            {/* Title */}
            <Text style={styles.titleApp}>FitPal</Text>

            {/* Image */}
            <Image source={require('./assets/runner.png')} style={styles.image} />

            {/* Title and Description */}
            <Text style={styles.title}>Track your Active Lifestyle</Text>
            <Text style={styles.description}>Find your way to perfect balance</Text>

            {/* Get Started Button */}
            <TouchableOpacity onPress={() => navigation.navigate('home')} style={styles.button}>
                <Text  style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E6F7FF',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30,
    },
    titleApp: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: Platform.OS === 'ios' ? -95 : -125,
        fontFamily: FontFamily.QualyBold,
      },
    image: {
        width: '100%',
        resizeMode: 'contain',
        marginBottom: Platform.OS === 'ios' ? -120 : -80,
        marginTop: Platform.OS === 'ios' ? -95 : 0, // Ajustez la valeur selon l'appareil
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
        marginTop: Platform.OS === 'ios' ? -20 : -30,  // Ajoutez une marge supérieure négative ici
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#000',
        padding: 15,
        borderRadius: 30,
        width: '100%',
        alignItems: 'center',
        marginTop: Platform.OS === 'ios' ? 10 : 35,
    },
    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
    },
});

export default Welcome