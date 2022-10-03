import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigation/StackNavigator";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import cartReducer from "./store/reducers/cart";
import productsReducer from "./store/reducers/products";
import * as Font from "expo-font";

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer
});

const store = createStore(rootReducer);

// const fetchFonts = async () => {
//   await Font.loadAsync({
//     "open-sans": require("./assets/fonts/OpenSans-Bold.ttf"),
//     "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf")
//   });
// };

export default function App(props) {
  const [loaded] = Font.useFonts({
    OpenSansBold: require("./assets/fonts/OpenSans-Bold.ttf")
  });

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  );
}
