import { useRoute } from "@react-navigation/native";
import React from "react";
import { Image, ScrollView, StyleSheet, Text } from "react-native";

function MealScreen() {
  const meal = useRoute().params.meal;

  console.log({ meal });
  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: meal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{meal.title}</Text>
      <Text style={styles.text}>Duration: {meal.duration} minutes</Text>
      <Text style={styles.text}>Complexity: {meal.complexity}</Text>
      <Text style={styles.text}>Affordability: {meal.affordability}</Text>
      <Text style={styles.text}>Ingredients:</Text>
      {meal.ingredients.map((ingredient, index) => (
        <Text key={index} style={styles.text}>
          - {ingredient}
        </Text>
      ))}
      <Text style={styles.text}>Steps:</Text>
      {meal.steps.map((step, index) => (
        <Text key={index} style={styles.text}>
          {index + 1}. {step}
        </Text>
      ))}
    </ScrollView>
  );
}

export default MealScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    marginVertical: 2,
  },
});
