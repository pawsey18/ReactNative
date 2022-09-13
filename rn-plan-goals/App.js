import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    console.log(enteredGoal);
    setEnteredGoal(enteredText);
    console.log(enteredGoal);
  };

  const addGoalHandler = () => {
    return "Hello it is " + enteredGoal;
  };

  return (
    <View style={styles.screen}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <TextInput
          placeholder="Enter Goal"
          style={styles.inputContainer}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="click me" style={{ marginTop: "50" }} />
      </View>
      <Text>{addGoalHandler()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    width: "80%",
    borderBottomColor: "black",
    borderWidth: 2,
    padding: 10
  }
});
