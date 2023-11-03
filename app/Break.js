import { SafeAreaView, StyleSheet, Text, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from 'expo-router';

const Break = () => {
    let timer = 0;
    const [timeleft, setTimeLeft] = useState(3);
    const navigate = useNavigation();

    const startTime = () => {
        setTimeout(() => {
            if (timeleft <= 0) {
                navigate.goBack();
                clearTimeout(timer)
            }
            setTimeLeft(timeleft - 1)
        }, 1000)
    }
    useEffect(() => {
        startTime();
        // clean up 
        return () => clearTimeout(timer)
    },)
    return (
        <SafeAreaView style={{ marginTop: 25 }}>
            <Image
                source={{
                    uri: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_500:300,c_fit/dpr_2/image/carefit/bundle/CF01032_magazine_2.png",
                }}
                style={{ width: "100%", height: 420 }}
            />
            <Text
                style={{
                    fontSize: 30,
                    fontWeight: "900",
                    marginTop: 50,
                    textAlign: "center",
                }}
            >
                TAKE A BREAK!
            </Text>
            <Text style={{
                fontSize: 45,
                fontWeight: "900",
                marginTop: 50,
                textAlign: "center",
            }}>{timeleft}</Text>
        </SafeAreaView>
    )
}

export default Break

const styles = StyleSheet.create({})