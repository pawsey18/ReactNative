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

const MovieDetailScreen = (props) => {
  const movieId = props.route.params.movieId;
  // selecting a single product.
  const selectedProduct = useSelector((state) =>
    state.movies.availableMovies.find((p) => p.id === movieId)
  );

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{ uri: selectedProduct.poster }}
          />
        </View>

        <View style={styles.actions}>
          <Button title="Add to Movies to Watch" onPress={() => {}} />
          <Button title="Add to Watched Movies" onPress={() => {}} />
        </View>
        <Text style={styles.price}>{selectedProduct.title}</Text>
        <Text style={styles.description}>{selectedProduct.overview}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    height: 500,
    margin: 10
  },
  imageContainer: {
    width: "100%",
    height: "60%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden"
  },
  image: {
    width: "100%",
    height: "100%"
  },
  price: {
    fontSize: 20,
    color: "#888",
    textAlign: "center",
    marginVertical: 20
  },
  description: {
    height: "20%",
    fontSize: 14,
    textAlign: "center"
  },
  actions: {
    
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "20%",
    paddingHorizontal: 20
  }
});

export default MovieDetailScreen;
