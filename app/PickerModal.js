import React, { useState } from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

  // les 2 premiers prorps sont pour l'ouverture du modal
  // 

const PickerModal = ({modalOpen, setModalOpen, value, setValue, items}) => {


  const pickerData = (data) => {
    return (data?.length>0) && (
      data.map((val,index) => <Picker.Item label={val} value={val} key={index} />) 
    );
  };

  return (
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalOpen}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>

        <View style={styles.container}>
          <View style={styles.pickerContainer}>
            <TouchableOpacity
            style={styles.closeButton} 
            onPress={()=> setModalOpen(!modalOpen)}>
              <Text>Annuler</Text>
            </TouchableOpacity>
            <Picker
              selectedValue={value}
              onValueChange={(itemValue, itemIndex) => {
                setValue(itemValue);             
              }}>
              {pickerData(items)}
            </Picker>
          </View>
        </View>

      </Modal>
  );
};

const styles=StyleSheet.create({
  container: {
    flex: 1,
  },
  pickerContainer: {
    backgroundColor: 'white',
    width: '100%' ,
    height: '40%',
    position: 'absolute',
    bottom: 0,
  },
  closeButton: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default PickerModal;
