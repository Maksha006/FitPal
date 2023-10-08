import { View, Text, Button } from 'react-native'
import React from 'react'
import { useRouter, useGlobalSearchParams, Stack } from 'expo-router'

const profile = () => {
    const router = useRouter(); // ça sert a nous rediriger vers la page qu'on a créer

    const { name, username} = useGlobalSearchParams();


  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Stack.Screen
      options={{
        title: username
      }}/>
      <Text>Hello {name}(@{username})</Text>
      <Button onPress={()=> router.back()} title="Go back"/>
    </View>
  )
}

export default profile