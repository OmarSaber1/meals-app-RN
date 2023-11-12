import { useRoute } from "@react-navigation/native";
import React from "react";
import { Text } from "react-native";

function MealScreen() {
  const meal = useRoute().params.meal;

  console.log({ meal });
  return <Text>Meal {meal?.id}</Text>;
}

export default MealScreen;
