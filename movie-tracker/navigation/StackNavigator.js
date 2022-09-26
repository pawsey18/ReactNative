import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MovieOverviewScreen from "../screens/movies/MovieOverviewScreen";
import Colors from "../constants/Colors";
import MovieDetailScreen from "../screens/movies/MovieDetailScreen";
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
      <stack.Screen name="MovieDetail" component={MovieDetailScreen} />
    </stack.Navigator>
  );
};

export default StackNavigator;
