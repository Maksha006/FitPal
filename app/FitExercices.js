import { StyleSheet, Text, ScrollView, View, Image, Pressable } from 'react-native'
import { useRoute } from '@react-navigation/native'
import React, { useState } from 'react'

const FitExercices = () => {
    const route = useRoute();
    console.log(route.params)

    const [index, setIndex] = useState(route.params.id);
    const excersises = route.params.exersises;
    const current = excersises[index];
    console.log(current, "first excercises")

    return (
        <ScrollView style={{ marginTop: 35, backgroundColor: "white" }}>
            <Image style={{ width: "100%", height: 350 }} source={{ uri: current.image }}></Image>
            <Text style={styles.textFit}>{current.name}</Text>
            <Text style={styles.textFit}>x{current.sets}</Text>
            <Pressable style={styles.pressable}>
                <Text style={styles.textDone}>DONE</Text>
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
    textDone:{
        textAlign:"center",
        fontWeight:'bold',
        fontSize:20,
        color:"white"
    },
    pressable:{
        backgroundColor:"#A7C7E7",
        marginLeft:"auto",
        marginRight:"auto",
        marginTop:30,
        borderRadius:20,
        padding:10,
        width:120
    }
})