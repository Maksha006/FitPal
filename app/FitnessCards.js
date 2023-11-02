import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Image } from "expo-image";
import fitness from './data/FitnessData';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from "expo-router";

const FitnessCards = () => {

  const FitnessData = fitness;
  const navigation = useNavigation();

  return (
    <View>
      {FitnessData.map((item, key) => (
        <Pressable onPress={() => navigation.navigate('WorkoutSerie', {
          image: item.image,
          exersises: item.excersises,
          id: item.id,
        })} 
        style={styles.CardPress} key={key}>
          <Image style={styles.ImageFitness} source={{ uri: item.image }} />
          <Text style={styles.CardText}>{item.name}</Text>
          <MaterialCommunityIcons style={{
            position: "absolute",
            color: "white", bottom: 15, left: 20
          }} name="lightning-bolt" size={24} color="black" />
        </Pressable>
      ))}
    </View>
  )
}

export default FitnessCards

const styles = StyleSheet.create({
  ImageFitness: {
    width: "90%",
    height: 140,
    borderRadius: 7
  },
  CardPress: {
    alignItems: "center",
    justifyContent: "center",
    margin: 10
  },
  CardText: {
    position: "absolute",
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    left: 25,
    top: 25
  },
});