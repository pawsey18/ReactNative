import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MovieOverviewScreen from "../screens/movies/MovieOverviewScreen";
import Colors from "../constants/Colors";

const stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primary
        }
      }}
    >
      <stack.Group>
        <stack.Screen
          name="MovieOverviewScreen"
          component={MovieOverviewScreen}
        />
      </stack.Group>
    </stack.Navigator>
  );
};

export default StackNavigator;
