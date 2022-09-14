import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [developerGoal, setDeveloperGoal] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
    console.log(enteredGoal);
  };

  const addGoalHandler = () => {
    setDeveloperGoal((currentGoals) => [...currentGoals, enteredGoal]);
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
        <Button
          title="click me"
          style={{ marginTop: "50" }}
          onPress={addGoalHandler}
        />
      </View>
      <View>
        {developerGoal.map((goal) => (
          <View key={goal} style={styles.listItem}>
            <Text>{goal}</Text>
          </View>
        ))}
      </View>
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
  },
  listItem: {
    padding: 10,
    margin: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1
  }
});
