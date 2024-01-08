import React, { useState } from 'react';
import { View, Text, Button, ScrollView, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { sex as dataSex, weight as dataWeight, age as dataAge } from './profileData';
import { useNavigation } from '@react-navigation/native';

const BMIScreen = () => {
  const [selectedSex, setSelectedSex] = useState('');
  const [selectedWeight, setSelectedWeight] = useState(0);
  const [selectedAge, setSelectedAge] = useState(0);
  const [waterIntake, setWaterIntake] = useState(null);

  const navigation = useNavigation();

  const calculateWaterIntake = () => {

    if (selectedAge >= 4 && selectedAge <= 8) {
      setWaterIntake(1.6);
    } else if (selectedAge >= 9 && selectedAge <= 13) {
      if (selectedSex === 'Female') {
        setWaterIntake(1.9);
      } else if (selectedSex === 'Male') {
        setWaterIntake(2.1);
      }
    } else if (selectedAge >= 14 && selectedAge <= 18) {
      if (selectedSex === 'Female') {
        setWaterIntake(2);
      } else if (selectedSex === 'Male') {
        setWaterIntake(2.5);
      }
    } else {  // Adulte
      const calculatedWaterIntake = ((selectedWeight - 20) * 15) + 1500;
      setWaterIntake(calculatedWaterIntake / 1000); // Divisé par 1000 pour convertir millilitres en litres
      navigation.navigate('water', { waterIntake: calculatedWaterIntake / 1000 });
    }
  };

  return (
    <ScrollView>
        <View style={styles.container}>

          <Text>Set Sex</Text>
          <Picker
            selectedValue={selectedSex}
            onValueChange={(itemValue) => setSelectedSex(itemValue)}>
            {dataSex.map((item, index) => (
              <Picker.Item key={index} label={item} value={item} />
            ))}
          </Picker>

          <Text>Set Weight</Text>
          <Picker
            selectedValue={selectedWeight}
            onValueChange={(itemValue) => setSelectedWeight(itemValue)}>
            {dataWeight.map((item, index) => (
              <Picker.Item key={index} label={item} value={item} />
            ))}
          </Picker>

          <Text>Set Age</Text>
          <Picker
            selectedValue={selectedAge}
            onValueChange={(itemValue) => setSelectedAge(itemValue)}>
            {dataAge.map((item, index) => (
              <Picker.Item key={index} label={item} value={item} />
            ))}
          </Picker>

          <Button title="Calculer l'apport en eau" onPress={() => calculateWaterIntake()} />
        </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default BMIScreen;