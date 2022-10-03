import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
//import { TouchableOpacity } from "react-native-gesture-handler";
const CartItem = (props) => {
  return (
    <View style={styles.cartItem}>
      <View style={styles.itemData}>
        <Text style={styles.qty}>{props.quantity} </Text>
        <Text style={styles.title}>{props.title} </Text>
      </View>
      <View style={styles.itemData}>
        <Text style={styles.amount}>${props.amount.toFixed(2)} </Text>
        <TouchableOpacity onPress={props.onPress} style={styles.deleteButton}>
          <Ionicons name="md-trash" size={23} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartItem: {
    padding: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20
  },
  itemData: {
    flexDirection: "row",
    alignItems: "center"
  },
  quantity: {
    fontFamily: "OpenSansBold",
    color: "#888",
    fontSize: 16
  },
  title: {
    fontFamily: "OpenSansBold",
    fontSize: 16
  },
  amount: {
    fontFamily: "OpenSansBold",
    fontSize: 16
  },
  deleteButton: {
    marginLeft: 20
  }
});

export default CartItem;
