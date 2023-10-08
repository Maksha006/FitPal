import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Modal, TouchableOpacity, Alert, Keyboard } from 'react-native';
import {useNavigation } from "expo-router";
import PickerModal from './PickerModal';
import { sex as dataSex, weight as dataWeight, height as dataHeight, age as dataAge } from './profileData';
import WaterScreen from './home/water'; 

const WaterIntakeCalculator = ({ objectif }) => {

   const navigation = useNavigation();

  // //Modal
  const [sexModal, setSexModal] = useState(false);
  const [weightModal, setWeightModal] = useState(false);
  const [ageModal, setAgeModal] = useState(false);
  const [heightModal, setHeightModal] = useState(false);

  //values
  const [sex, setSex] = useState(''); // 'male' ou 'female'
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [waterIntake, setWaterIntake] = useState('');

  const calculateWaterIntake = () => {
    if (sex === 'Male') {
      setWaterIntake(((parseFloat(weight) * 0.6) + (parseFloat(height) * 0.1) - (parseFloat(age) * 0.5) + 1.5).toFixed(2));
    } else if (sex === 'Female') {
      setWaterIntake(((parseFloat(weight) * 0.6) + (parseFloat(height) * 0.1) - (parseFloat(age) * 0.5) + 1.9).toFixed(2));
    }
    navigation.navigate('water', { objectif: parseFloat(objectif) })
    console.log("Valeur de l'objectif :", waterIntake);
  };

  const handleInputChange = (inputValue, setInputValue) => {
    setInputValue(inputValue);
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setSexModal(!sexModal)}>
        <Text style={styles.label}>Sexe :</Text>
        <TextInput
          style={styles.input}
          placeholder="sexe"
          value={sex}
          onChangeText={(text) => handleInputChange(text, setSex)}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setWeightModal(!weightModal)}>
        <Text style={styles.label}>Poids (en kg) :</Text>
        <TextInput
          style={styles.input}
          placeholder="poids"
          value={weight}
          onChangeText={(text) => handleInputChange(text, setWeight)}
          keyboardType="numeric"
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setHeightModal(!heightModal)}>
        <Text style={styles.label}>Taille (en cm) :</Text>
        <TextInput
          style={styles.input}
          placeholder="Taille"
          value={height}
          onChangeText={(text) => handleInputChange(text, setHeight)}
          keyboardType="numeric"
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setAgeModal(!ageModal)}>
        <Text style={styles.label}>Âge :</Text>
        <TextInput
          style={styles.input}
          placeholder="Âge"
          value={age}
          onChangeText={(text) => handleInputChange(text, setAge)}
          keyboardType="numeric"
        />
      </TouchableOpacity>
      <PickerModal setModalOpen={setSexModal} modalOpen={sexModal} value={sex} items={dataSex} setValue={setSex} onSexChange={(itemValue) => setSex(itemValue)} />
      <PickerModal setModalOpen={setWeightModal} modalOpen={weightModal} value={weight} items={dataWeight} setValue={setWeight} onWeightChange={(itemValue) => setWeight(itemValue)} />
      <PickerModal setModalOpen={setHeightModal} modalOpen={heightModal} value={height} items={dataHeight} setValue={setHeight} onWeightChange={(itemValue) => setHeight(itemValue)} />
      <PickerModal setModalOpen={setAgeModal} modalOpen={ageModal} value={age} items={dataAge} setValue={setAge} onAgeChange={(itemValue) => setAge(itemValue)} />
      <Button title="Calculer l'objectif" onPress={() => calculateWaterIntake()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  result: {
    fontSize: 18,
    marginTop: 16,
    textAlign: 'center',
  },
});

export default WaterIntakeCalculator;