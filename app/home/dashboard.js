import { StyleSheet, Text, View } from "react-native";
import { Link, Redirect, Stack,Tabs, useRouter } from "expo-router";
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

export default function Page() {
  
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.main}>
      {/* <Tabs.Screen 
            options={{
                    headerRight: () => (
                        <MaterialCommunityIcons onPress={()=> router.push('')} name="face-woman-profile" size={24} color="black"/>
                    )
                }} /> */}
        <Text style={styles.title}>Hello World</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
        <Link href="/Shaya">Open Shaya's profile</Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
