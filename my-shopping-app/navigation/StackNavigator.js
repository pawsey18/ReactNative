import React from "react";
import ProductOverviewScreen from "../screens/shop/ProductOverviewScreen";
import Colors from "../constants/Colors";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import CartScreen from "../screens/shop/CartScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OrdersScreen from "../screens/shop/OrdersScreen";
import Home from "../components/UI/Home";

//const Drawer = createDrawerNavigator();
const stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primary,
          fontFamily: "OpenSansBold"
        },
        headerTitleStyle: {
          fontFamily: "OpenSansBold",
          color: "white"
        }
      }}
    >
      <stack.Group>
        <stack.Screen name="Home" component={Home} />
        <stack.Screen
          name="Product Overview"
          component={ProductOverviewScreen}
        />
      </stack.Group>

      <stack.Screen name="Product Detail" component={ProductDetailScreen} />
      <stack.Screen name="Cart" component={CartScreen} />
      <stack.Screen name="order" component={OrdersScreen} />
    </stack.Navigator>
  );
};

export default StackNavigator;
