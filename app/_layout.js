import { Stack, useRouter } from "expo-router";
import { AntDesign } from '@expo/vector-icons';

export default () => {
    const router = useRouter(); // ça sert a nous rediriger vers la page qu'on a créer

    return <Stack screenOptions={{
        headerTintColor: 'red',
        headerRight: () => (
            <AntDesign name="questioncircle" size={24} color="black" />
        )}}>

        <Stack.Screen  name="index" options={{
            title: 'Home' }}/>

        <Stack.Screen name="home" options={{ headerShown: false}} />
        <Stack.Screen name="Welcome" options={{ headerShown: false}} />
    </Stack>

    /*
    quand on utilise des données statiques c'est mieux de mettre le code ici pour que tout 
    la logique du layout se retrouve au même endroit 
    
    mais pour ce qui est du dynamique il faut le faire dans la page(fichier) même*/
}