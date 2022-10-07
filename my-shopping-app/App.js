import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigation/StackNavigator";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import ordersReducer from "./store/reducers/order";
import cartReducer from "./store/reducers/cart";
import productsReducer from "./store/reducers/products";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import Home from "./components/UI/Home";
import * as Font from "expo-font";

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  orders: ordersReducer
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
