import { View, Text, FlatList } from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductItem from "../../components/shop/ProductItem";
import * as cartActions from "../../store/actions/cart";
const ProductOverviewScreen = ({ navigation }) => {
  const products = useSelector((state) => state.products.availableProducts);
  const dispatch = useDispatch();

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
          onAddToCart={() => {
            dispatch(cartActions.addToCart(itemData.item));
          }}
        />
      )}
    />
  );
};

// ProductOverviewScreen.navigationOptions = {
//   headerRight: (
//     <HeaderButtons HeaderButtonComponent={HeaderButton}>
//       <Item title="Cart" iconName={"md-cart"} onPress={() => {}} />
//     </HeaderButtons>
//   )
// };

export default ProductOverviewScreen;
