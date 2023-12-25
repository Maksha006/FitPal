import React, {createContext, useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const FitnessItems = createContext();

const FitnessContext = ({ children }) => {
    const [completed, setCompleted] = useState([]);
    const [workout, setWorkout] = useState(0);
    const [calories, setCalories] = useState(0);
    const [minutes, setMinutes] = useState(0);

    useEffect(() => {
        const now = new Date();
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).toLocaleDateString ('fr-FR').split('/').reverse().join('-');
        console.log('Date actuelle:', today);
        const loadCompleted = async () => {
            try {
                const savedCompleted = await AsyncStorage.getItem('CompletedExercises');
                if (savedCompleted !== null) {
                    setCompleted(JSON.parse(savedCompleted));
                }
            } catch (error) {
                console.error('Erreur lors du chargement des données :', error);
            }
        };

        const loadData = async () => {
            try {
                const savedWorkout = await AsyncStorage.getItem('Workout');
                const savedCalories = await AsyncStorage.getItem('Calories');
                const savedMinutes = await AsyncStorage.getItem('Minutes');

                if (savedWorkout !== null) {
                    setWorkout(JSON.parse(savedWorkout));
                }
                if (savedCalories !== null) {
                    setCalories(JSON.parse(savedCalories));
                }
                if (savedMinutes !== null) {
                    setMinutes(JSON.parse(savedMinutes));
                }
            } catch (error) {
                console.error('Erreur lors du chargement des données :', error);
            }
        };

        const checkDateAndReset = async () => {
            try {
                const lastResetDate = await AsyncStorage.getItem('LastResetDate');
                if (lastResetDate !== today) {
                    // Réinitialiser les données
                    setCompleted([]);
                    setWorkout(0);
                    setCalories(0);
                    setMinutes(0);

                    // Enregistrer la nouvelle date de réinitialisation
                    await AsyncStorage.setItem('LastResetDate', today);
                    await AsyncStorage.removeItem('CompletedExercises');
                    await AsyncStorage.removeItem('Workout');
                    await AsyncStorage.removeItem('Calories');
                    await AsyncStorage.removeItem('Minutes');
                }
            } catch (error) {
                console.error('Erreur lors de la vérification de la date :', error);
            }
        };

        loadCompleted();
        loadData();
        checkDateAndReset();
    }, []);


    return (
        <FitnessItems.Provider 
        value={{ 
            completed, 
            setCompleted, 
            workout, 
            setWorkout, 
            calories, 
            setCalories, 
            minutes, 
            setMinutes, }}
        >
            {children}
        </FitnessItems.Provider>
    )
}

export {FitnessContext,FitnessItems}

