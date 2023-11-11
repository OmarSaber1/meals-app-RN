import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";

import { CATEGORIES } from "../data/dummy-data";

function CategoriesScreen({ navigation }) {
  const renderCategoryItem = (itemData) => {
    return (
      <CategoryGridTile
        onPress={() => navigation.navigate("MealOverView")}
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
