import React from "react";
import { StyleSheet, View, Text } from "react-native";

function MealOverView() {
  return (
    <View style={styles.container}>
      <Text>MealOverView</Text>
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
