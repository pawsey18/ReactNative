import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform
} from "react-native";
import Colors from "../constants/Colors";
import React from "react";

const MovieItem = (props) => {
  let TouchableComponent = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  }
  return (
    <TouchableComponent onPress={props.onViewDetail}>
      <View style={styles.product}>
        <Image style={styles.image} source={{ uri: props.poster }} />
        <View style={styles.details}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.price}>{props.overview}</Text>
        </View>

        <View style={styles.actions}>
          <Button
            color={Colors.primary}
            title="View Details"
            onPress={props.onViewDetail}
          />
          <Button
            color={Colors.primary}
            title="Add To Cart"
            onPress={props.onAddToCart}
          />
        </View>
      </View>
    </TouchableComponent>
  );
};
const styles = StyleSheet.create({
  product: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    height: 300,
    margin: 20
  },
  image: {
    width: "100%",
    height: "60%"
  },
  details: {
    alignItems: "center",
    height: "20%",
    padding: 10
  },
  title: {
    fontSize: 18,
    marginVertical: 4
  },
  price: {
    fontSize: 14,
    color: "#888"
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "20%",
    paddingHorizontal: 20
  }
});

export default MovieItem;
