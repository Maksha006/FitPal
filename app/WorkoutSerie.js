import { ScrollView, StyleSheet, Text, Image, Pressable, View } from 'react-native'
import { useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const WorkoutSerie = () => {

    const route = useRoute();
    console.log(route.params)
    const navigation = useRouter();

    return (
        <ScrollView style={{ marginTop: 20, backgroundColor: "white" }}>
            <Image style={styles.serieImg} source={{ uri: route.params.image }} />
            <Ionicons onPress={() => navigation.back()} style={styles.icon} name="arrow-back-outline" size={24} color="white" />

            {route.params.exersises.map((item, index) => (
                <Pressable style={{ marginTop: 10, flexDirection:'row', alignItems:'center' }} key={index}>
                    <Image style={{ width: 150, height: 150, marginLeft: 5 }} source={{ uri: item.image }}></Image>

                    <View style={{margin:10}}>
                        <Text style={{fontSize:16, fontWeight:'bold'}}>{item.name}</Text>

                        <Text style={{marginTop:4,fontSize:18, color:"gray"}}>{item.sets}</Text>
                    </View>
                </Pressable>
            ))}
        </ScrollView>
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
    }
})