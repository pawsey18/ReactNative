import { View, Text, FlatList, Button } from "react-native";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductItem from "../../components/shop/ProductItem";
import * as cartActions from "../../store/actions/cart";
import HeaderButton from "../../components/UI/HeaderButton";
const ProductOverviewScreen = ({ navigation }) => {
  const products = useSelector((state) => state.products.availableProducts);
  const dispatch = useDispatch();
  var cartRoute = () => {
    return navigation.navigate("Cart");
  };

  // refactor this
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item title="Cart" iconName={"md-cart"} onPress={() => cartRoute()} />
        </HeaderButtons>
      )
    });
  }, []);

  // Work around to navigate - still have to test dispatch
  const addToCartThenNavigateToCartScreen = (itemData) => {
    // pass in the object itemData.item
    dispatch(cartActions.addToCart(itemData));
    // then navigate to cart screen
    cartRoute();
  };

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onViewDetail={() =>
            navigation.navigate("Product Detail", {
              productId: itemData.item.id
            })
          }
          onAddToCart={() => addToCartThenNavigateToCartScreen(itemData.item)}
        />
      )}
    />
  );
};

import { HeaderButtons, Item } from "react-navigation-header-buttons";
// ProductOverviewScreen.screenOptions = {
//   headerRight: () => (
//     <HeaderButtons HeaderButtonComponent={HeaderButton}>
//       <Item title="Cart" iconName={"md-cart"} onPress={() => {}} />
//     </HeaderButtons>
//   )
// };

// ProductOverviewScreen.screenOptions={
//   headerTitleStyle: {
//     fontFamily: "OpenSansBold",
//     color: "white"
//    },
//   headerRight: () => (
//     <HeaderButtons HeaderButtonComponent={HeaderButton}>
//       <Item
//         title="Cart"
//         iconName={"md-cart"}
//         onPress={() => {
//           props.navigation.navigate("Cart");
//         }}
//       />
//     </HeaderButtons>
//   )
// }

export default ProductOverviewScreen;
