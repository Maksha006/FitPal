import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { FontFamily} from "./GlobalStyles";
import { Platform } from 'react-native';
import {useNavigation } from "expo-router";

export default function SignUp() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            
            <View style={styles.header}>
                <Text style={styles.title}>Create Account</Text>
            </View>
            
            <TextInput placeholder="Name" style={styles.input} />
            <TextInput placeholder="Your Email" style={styles.input} />
            <TextInput placeholder="Password" style={styles.input} secureTextEntry={true} />

            <TouchableOpacity onPress={() => navigation.navigate('home')} style={styles.signUpButton}>
                <Text style={styles.signUpButtonText}>Sign Up</Text>
            </TouchableOpacity>

            <View style={styles.circle}>
                <TouchableOpacity style={styles.signInButton}>
                    <Text style={styles.signInText}>Sign In</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E0F7FA',
        alignItems: 'center',
    },
    header: {
        backgroundColor: '#0097A7',
        height: '30%',
        width: '100%',
        borderBottomRightRadius: 70,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 35,
        color: '#fff',
        fontFamily: FontFamily.NexaTrialLightItalic
    },
    input: {
        width: '80%',
        padding: 15,
        marginTop:25,
        marginVertical: 10,
        backgroundColor: '#fff',
        borderRadius: 25,
        paddingLeft: 25,
    },
    signUpButton: {
        width: '80%',
        padding: 15,
        marginVertical: 10,
        backgroundColor: '#0097A7',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    signUpButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    circle: {
        position: 'absolute',
        bottom: responsiveHeight(0), // Ajustez selon vos besoins
        right: -responsiveHeight(2),  // Ajustez selon vos besoins
        width: responsiveHeight(20),  // Ajustez selon vos besoins
        height: responsiveHeight(20), // Ajustez selon vos besoins
        borderRadius: responsiveHeight(10),
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    signInButton: {
        backgroundColor: '#0097A7',
        paddingVertical: 15,                  // Ajoutez ceci
        paddingHorizontal: responsiveWidth(3),// Modifiez ceci
        marginRight:5,
        marginBottom:-15,
        borderRadius: 50,
    },
    signInText: {
        color: '#fff',
        fontSize: responsiveFontSize(2), // Ajustez selon vos besoins
    },
});
