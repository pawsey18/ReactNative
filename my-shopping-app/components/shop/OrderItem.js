import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import CartItem from "./CartItem";

const OrderItem = (props) => {
  return (
    <View style={styles.orderItem}>
      <View style={styles.summary}>
        <Text style={styles.amount}>${props.amount.toFixed(2)}</Text>
        <Text style={styles.date}>{props.date}</Text>
      </View>
      <Button title="Show Details" />
    </View>
  );
};

const styles = StyleSheet.create({
  orderItem: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    height: 100,
    margin: 20,
    padding: 10
  },
  summary: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%"
  },
  amount: {
    fontFamily: "OpenSansBold",
    fontSize: 16
  },
  date: {
    fontSize: 16
  }
});

export default OrderItem;
