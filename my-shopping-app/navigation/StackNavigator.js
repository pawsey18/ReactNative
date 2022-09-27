import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductOverviewScreen from "../screens/shop/ProductOverviewScreen";
import Colors from "../constants/Colors";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";

const stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primary,
          fontFamily: "OpenSansBold"
        }
      }}
    >
      <stack.Group>
        <stack.Screen name="All products" component={ProductOverviewScreen} />
      </stack.Group>
      <stack.Screen name="Product Detail" component={ProductDetailScreen} />
    </stack.Navigator>
  );
};

export default StackNavigator;
