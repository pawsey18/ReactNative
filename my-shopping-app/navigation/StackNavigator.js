import React from "react";
import ProductOverviewScreen from "../screens/shop/ProductOverviewScreen";
import Colors from "../constants/Colors";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/UI/HeaderButton";
import CartScreen from "../screens/shop/CartScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
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
        // ,
        // headerRight: () => (
        //   <HeaderButtons HeaderButtonComponent={HeaderButton}>
        //     <Item title="Cart" iconName={"md-cart"} />
        //   </HeaderButtons>
        // )
      }}
    >
      <stack.Group>
        <stack.Screen name="All products" component={ProductOverviewScreen} />
      </stack.Group>

      <stack.Screen name="Product Detail" component={ProductDetailScreen} />
      <stack.Screen
        name="Cart"
        component={CartScreen}
        onPress={() => console.log("hello")}
      />
    </stack.Navigator>
  );
};

export default StackNavigator;
