import React, {createContext, useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const FitnessItems = createContext();

const FitnessContext = ({ children }) => {
    const [completed, setCompleted] = useState([]);
    const [workout, setWorkout] = useState(0);
    const [calories, setCalories] = useState(0);
    const [minutes, setMinutes] = useState(0);

    useEffect(() => {
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
        loadCompleted();
        loadData();
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

