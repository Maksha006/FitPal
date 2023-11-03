import { StyleSheet, Text, ScrollView, View, Image, Pressable, Button } from 'react-native'
import { useRoute } from '@react-navigation/native'
import React, { useState } from 'react'
import { useNavigation } from 'expo-router';

const FitExercices = () => {
    const route = useRoute();
    // console.log(route.params)
    const navigation = useNavigation();

    const [index, setIndex] = useState(route.params.id);
    const excersises = route.params.exersises;
    const current = excersises[index];
    console.log(current, "first excercises")

    return (
        <ScrollView style={{ marginTop: 35, backgroundColor: "white" }}>
            <Image style={{ width: "100%", height: 350 }} source={{ uri: current.image }}></Image>
            <Text style={styles.textFit}>{current.name}</Text>
            <Text style={styles.textFit}>x{current.sets}</Text>

            <Pressable onPress={() => navigation.goBack()} style={styles.pressableDone}>
                <Text style={styles.textDone}>DONE</Text>
            </Pressable>

            {index + 1 >= excersises.length ? (
                <Pressable onPress={() => {
                    navigation.navigate('workout')
                }}>
                    <Text>serie finished</Text>
                </Pressable>
            ) : (
                <Pressable onPress={() => {
                    navigation.navigate('Break')
                    setTimeout(() => {
                        setIndex(index + 1)
                    }, 2000)
                }}>
                    <Text>Take a break</Text>
                </Pressable>
            )}
            <Pressable style={styles.pressableBt}>
                <Pressable
                disabled={index===0}
                onPress={() => {
                        navigation.navigate('Break')
                        setTimeout(() => {
                            setIndex(index - 1)
                        }, 2000)
                    }} 
                    style={styles.pressPrevSkip}>
                    <Text style={styles.prevSkipTxt}>PREV</Text>
                </Pressable>

                {index + 1 >= excersises.length ? (
                    <Pressable onPress={() => {
                        navigation.navigate('workout')
                    }} style={styles.pressPrevSkip}>
                        <Text style={styles.prevSkipTxt}>SKIP</Text>
                    </Pressable>
                ) : (
                    <Pressable onPress={() => {
                        navigation.navigate('Break')
                        setTimeout(() => {
                            setIndex(index + 1)
                        }, 2000)
                    }} style={styles.pressPrevSkip}>
                        <Text style={styles.prevSkipTxt}>SKIP</Text>
                    </Pressable>
                )}

            </Pressable>
        </ScrollView>
    )
}

export default FitExercices

const styles = StyleSheet.create({
    textFit: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 30
    },
    textDone: {
        textAlign: "center",
        fontWeight: 'bold',
        fontSize: 20,
        color: "white"
    },
    pressableDone: {
        backgroundColor: "#A7C7E7",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 30,
        borderRadius: 20,
        padding: 10,
        width: 120
    },
    pressPrevSkip: {
        backgroundColor: "#A7D489",
        marginHorizontal: 20,
        borderRadius: 20,
        padding: 10,
        width: 120
    },
    pressableBt: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 50,
    },
    prevSkipTxt: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 16
    }
})