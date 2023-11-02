import { ScrollView, StyleSheet, Text, Image, Pressable, View } from 'react-native'
import { useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, useNavigation } from 'expo-router';

const WorkoutSerie = () => {

    const route = useRoute();
    //console.log(route.params)
    const navigation = useRouter();
    const navigate = useNavigation();

    return (
        <>
            <ScrollView style={{ marginTop: 20, backgroundColor: "white" }}>
                <Image style={styles.serieImg} source={{ uri: route.params.image }} />
                <Ionicons onPress={() => navigation.back()} style={styles.icon} name="arrow-back-outline" size={24} color="white" />

                {route.params.exersises.map((item, index) => (
                    <Pressable onPress={() => navigate.navigate('FitExercices', {
                        exersises: route.params.exersises,
                        id: index,
                    })}
                        style={styles.pressableSerie} key={index}>
                        <Image style={{ width: 150, height: 150, marginLeft: 5 }} source={{ uri: item.image }}></Image>

                        <View style={{ margin: 10 }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.name}</Text>

                            <Text style={{ marginTop: 4, fontSize: 18, color: "gray" }}>x{item.sets}</Text>
                        </View>
                    </Pressable>
                ))}
            </ScrollView>
            <Pressable onPress={() => navigate.navigate('FitExercices', { exersises: route.params.exersises, id: 0 })} style={styles.pressableStart}>
                <Text style={styles.textStart}>START</Text>
            </Pressable>

        </>

    )
}

export default WorkoutSerie

const styles = StyleSheet.create({
    serieImg: {
        width: "100%",
        height: 170
    },
    icon: {
        position: "absolute",
        top: 30,
        left: 20
    },
    pressableSerie: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    pressableStart: {
        backgroundColor: "#A7C7E7",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 5,
        borderRadius: 20,
        padding: 10,
        width: 120
    },
    textStart: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 20,
        color: "white"
    },
})