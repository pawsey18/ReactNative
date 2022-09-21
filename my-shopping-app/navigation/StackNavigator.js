import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import ProductOverviewScreen from "../screens/shop/ProductOverviewScreen";
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
          name="ProductOverviewScreen"
          component={ProductOverviewScreen}
        />
      </stack.Group>
    </stack.Navigator>
  );
};

export default StackNavigator;
