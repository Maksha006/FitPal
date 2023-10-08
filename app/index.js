import { StyleSheet, Text, View } from "react-native";
import { Link, Redirect, Stack } from "expo-router";
import registerNNPushToken from "native-notify";

export default function Page() {
  registerNNPushToken(13181, 'xfqy7wBj8mN1C2yDdETKdL');
  
  return <Redirect href={'/home'}/>
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
