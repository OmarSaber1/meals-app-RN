import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
// import { useNavigation } from "@react-navigation/native";

import { CATEGORIES } from "../data/dummy-data";

function CategoriesScreen({ navigation }) {
  // const navigate = useNavigation();

  const renderCategoryItem = (itemData) => {
    return (
      <CategoryGridTile
        // onPress={() => navigate.navigate("MealOverView")}
        onPress={() =>
          navigation.navigate("MealsOverView", { category: itemData.item })
        }
        title={itemData.item.title}
        color={itemData.item.color}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
