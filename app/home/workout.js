import { View, Text, ScrollView} from 'react-native';
import { Image } from "expo-image";
import FitnessCards from '../FitnessCards';
import {FitnessItems} from '../../Context';
import { useContext } from "react";

const workout = () => {

  const { completed, setCompleted, workout, setWorkout, calories, setCalories, minutes, setMinutes } = useContext(FitnessItems)

  return (
    <ScrollView style={{marginTop:40}}>
      <View>
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>HOME WORKOUT</Text>

        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 20 }}>
          <View>
            <Text style={{ color: "white", fontWeight: "bold", textAlign: "center", fontSize: 18 }}>{workout}</Text>
            <Text style={{ color: "#D0D0D0", textAlign: "center", fontSize: 18, marginTop: 6 }}>WORKOUTS</Text>
          </View>
          <View>
            <Text style={{ color: "white", fontWeight: "bold", textAlign: "center", fontSize: 18 }}>{calories}</Text>
            <Text style={{ color: "#D0D0D0", textAlign: "center", fontSize: 18, marginTop: 6 }}>KCAL</Text>
          </View>
          <View>
            <Text style={{ color: "white", fontWeight: "bold", textAlign: "center", fontSize: 18 }}>{minutes}</Text>
            <Text style={{ color: "#D0D0D0", textAlign: "center", fontSize: 18, marginTop: 6 }}>MINS</Text>
          </View>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            style={{
              width: "90%",
              height: 120,
              marginTop: 20,
              borderRadius: 7,
            }}
            source={{
              uri: "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_842,ar_1.2,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/sku-card-widget/gold2.png",
            }}
          />
        </View>
        <FitnessCards/>
      </View>
    </ScrollView>
  )
}

export default workout