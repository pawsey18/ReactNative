import { View, Text, FlatList } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import MovieItem from "../../components/MovieItem";

const MovieOverviewScreen = (props) => {
  const movies = useSelector((state) => state.movies.availableMovies);
  return (
    <FlatList
      data={movies}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <MovieItem
          poster={itemData.item.poster}
          title={itemData.item.title}
          overview={itemData.item.overview}
          onViewDetail={() => {}}
          onAddToCart={() => {}}
        />
      )}
    />
  );
};

export default MovieOverviewScreen;
