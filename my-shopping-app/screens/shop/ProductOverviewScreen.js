import { View, Text, FlatList } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import ProductItem from "../../components/shop/ProductItem";

const ProductOverviewScreen = ({ navigation }) => {
  const products = useSelector((state) => state.products.availableProducts);
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onViewDetail={() => navigation.navigate("Profile", { name: "Jane" })}
          onAddToCart={() => {}}
        />
      )}
    />
  );
};

export default ProductOverviewScreen;
