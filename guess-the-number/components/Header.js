import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../theme/constants/colors";
import TitleText from "./TitleText";
const Header = (props) => {
  return (
    <View style={styles.header}>
      <TitleText style={styles.headerTitle}>{props.title}</TitleText>
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
    justifyContent: "center",
    textAlign: "center"
  },

  headerTitle: {
    textAlign: "center"
  }
});

export default Header;
