import React from "react";
import { StyleSheet, Text, View } from "react-native";

function MealItem({ item }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );
}

export default MealItem;
const styles = StyleSheet.create({
  item: {
    backgroundColor: "#f9ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
