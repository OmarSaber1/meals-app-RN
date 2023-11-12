import React, { useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";

// function MealOverView({ navigation, route, options, back }) {
function MealsOverView({ navigation, options, back }) {
  const route = useRoute();
  const category = route.params.category;

  const meals = MEALS.filter((meal) =>
    meal.categoryIds.some((categoryId) => categoryId == category.id)
  );

  useEffect(() => {
    const currentCategory = CATEGORIES.find(
      (category) => category.id === route.params.category.id
    );

    navigation.setOptions(currentCategory);
  }, [navigation, route]);

  return (
    <View style={styles.container}>
      <FlatList
        data={meals}
        renderItem={MealItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default MealsOverView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
