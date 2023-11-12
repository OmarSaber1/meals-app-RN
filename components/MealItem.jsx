import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";

const MealCard = ({ item, onSelect }) => {
  console.log({ onSelect });
  return (
    <View>
      <Pressable android_ripple={{ color: "#CCC" }} onPress={onSelect}>
        <View style={styles.card}>
          <Image source={{ uri: item.imageUrl }} style={styles.image} />
          <View style={styles.details}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>Duration: {item.duration}m</Text>
            <Text>Complexity: {item.complexity}</Text>
            <Text>Affordability: {item.affordability}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    marginBottom: 30,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
  },
  details: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    marginBottom: 5,
  },
});

export default MealCard;
