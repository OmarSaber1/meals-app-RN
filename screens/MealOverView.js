import React from "react";
import { useRoute } from "@react-navigation/native";
import { StyleSheet, View, Text } from "react-native";

// function MealOverView({ navigation, route, options, back }) {
function MealOverView({ navigation, options, back }) {
  const route = useRoute();
  const meal = route.params.meal;
  console.log({ route });
  console.log({ meal });
  return (
    <View style={styles.container}>
      <Text>MealOverView - {meal.id}</Text>
    </View>
  );
}

export default MealOverView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    padding: 20,
  },
});
