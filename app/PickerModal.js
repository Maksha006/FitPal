import React, { useState } from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Calendar } from 'react-native-calendars';
// les 2 premiers prorps sont pour l'ouverture du modal
// 

const PickerModal = ({ modalOpen, setModalOpen, markedDates, onDayPress }) => {

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
            onPress={() => setModalOpen(!modalOpen)}>
            <Text>Annuler</Text>
          </TouchableOpacity>
          <Calendar
            // Ajoute des props au calendrier si nécessaire, comme marquer des dates
            markedDates={markedDates}
            onDayPress={onDayPress}
            // Tu peux ajouter plus de styles ou de logique ici
            style={styles.calendarStyle}
            theme={{
              textDayFontWeight: '300',
              textMonthFontWeight: 'bold',
              textDayHeaderFontWeight: '300',
              textDayFontSize: 16,
              textMonthFontSize: 16,
              textDayHeaderFontSize: 16,
              'stylesheet.calendar.header': {
                week: {
                  marginTop: 5,
                  flexDirection: 'row',
                  justifyContent: 'space-around'
                },
              },
              'stylesheet.day.basic': {
                base: {
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 32,
                  height: 32,
                },
              },
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pickerContainer: {
    backgroundColor: 'white',
    width: '100%',
    height: '40%',
    position: 'absolute',
    bottom: 0,
  },
  closeButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  calendarStyle: {
    borderColor: 'gray',
    borderRadius: 8,
  }
});

export default PickerModal;
