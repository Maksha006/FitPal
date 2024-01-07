import {Stack, Tabs, router, useRouter } from 'expo-router'
import { FontAwesome, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

export default()=>{

    const router = useRouter();

    return (
        <Tabs screenOptions={{tabBarShowLabel: false, tabBarActiveTintColor: 'brown'}}>
            <Tabs.Screen name="dashboard"
            options={{
                tabBarIcon: ({color}) => (
                    <FontAwesome name="dashboard" size={24} color={color}/>),
                    headerShown: false
                }} />
            
            <Tabs.Screen name="water" 
            options={{
                tabBarIcon: ({color}) => (
                    <MaterialCommunityIcons name="cup-water" size={24} color={color}/>),
                    title: "Water Reminder",
                    headerTitleAlign: 'center'
                }} />
                
                <Tabs.Screen name="workout" 
            options={{
                tabBarIcon: ({color}) => (
                    <Ionicons name="fitness" size={24} color={color}/>),
                    headerShown: false
                }} />
        </Tabs>

    )
}