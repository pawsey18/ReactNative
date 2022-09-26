import {
  View,
  Text,
  ScrollView,
  Image,
  Button,
  StyleSheet
} from "react-native";
import React from "react";
import { useSelector } from "react-redux";

const ProductDetailScreen = (props) => {
  const productId = props.route.params.productId;
  // selecting a single product.
  const selectedProduct = useSelector((state) =>
    state.products.availableProducts.find((p) => p.id === productId)
  );

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectedProduct.imageUrl }} />
      <Button title="Add to Cart" onPress={() => {}} />
      <Text style={styles.price}>${selectedProduct.price.toFixed(2)}</Text>
      <Text style={styles.description}>{selectedProduct.description}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300
  },
  price: {
    fontSize: 20,
    color: "#888",
    textAlign: "center",
    marginVertical: 20
  },
  description: { 
    fontSize: 14,
    textAlign: 'center'
  }
});

export default ProductDetailScreen;
