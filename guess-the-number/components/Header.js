import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../theme/constants/colors";
const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: Colors.primary,
    alignContent: "center",
    justifyContent: "center"
  },

  headerTitle: {
    color: "black",
    fontSize: 18,
    textAlign: "center"
  }
});

export default Header;
