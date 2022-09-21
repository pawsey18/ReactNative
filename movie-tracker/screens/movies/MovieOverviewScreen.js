import { View, Text, FlatList } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

const MovieOverviewScreen = (props) => {
  const movies = useSelector((state) => state.movies.availableMovies);
  return (
    <FlatList
      data={movies}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => <Text>{itemData.item.title}</Text>}
    />
  );
};

export default MovieOverviewScreen;
