import React, { useEffect } from "react";
import { Button, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import OrdersScreen from "../../screens/shop/OrdersScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CartScreen from "../../screens/shop/CartScreen";
import ProductOverviewScreen from "../../screens/shop/ProductOverviewScreen";
import HeaderButton from "../../components/UI/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useRoute } from "@react-navigation/native";

const Home = () => {
 // const route = useRoute();
  const Tab = createBottomTabNavigator();

  var cartRoute = () => {
    return navigation.navigate("Cart");
  };

//   useEffect(() => {
//     navigation.setOptions({
//       headerRight: () => (
//         <HeaderButtons HeaderButtonComponent={HeaderButton}>
//           <Item title="Cart" iconName={"md-cart"} onPress={() => cartRoute()} />
//         </HeaderButtons>
//       ),
//       title: "hello world"
//     });
//   }, []);

  //   {
  //     navigation.setOptions({
  //       headerRight: () => (
  //         <HeaderButtons HeaderButtonComponent={HeaderButton}>
  //           <Item title="Cart" iconName={"md-cart"} onPress={() => cartRoute()} />
  //         </HeaderButtons>
  //       )
  //     });
  //   }r

  return (
    <Tab.Navigator screenOptions={{ headerShown: true }}>
      <Tab.Screen name="order iii" component={OrdersScreen} />
      <Tab.Screen name="cart" component={CartScreen} />
      <Tab.Screen name="Product Overview" component={ProductOverviewScreen} />
    </Tab.Navigator>
  );
};

export default Home;
