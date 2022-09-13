import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [outputText, setOutputText] = useState(
    "I am an application running on your phone, connected to Expo."
  );
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button
        title="Click me!"
        onPress={() => setOutputText("The text changed")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
