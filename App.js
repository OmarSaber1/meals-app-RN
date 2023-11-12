import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import MealOverView from "./screens/MealsOverView";
import MealScreen from "./screens/MealScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='dark' />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            // for all screens
            headerTintColor: "black",
            cardStyle: { backgroundColor: "#a45f5f" },
          }}
        >
          <Stack.Screen
            options={{
              title: "Meals Categories",
            }}
            name='MealsCategories'
            component={CategoriesScreen}
          />
          <Stack.Screen
            // options={({ route }) => {
            //   const catId = route.params.category.title;
            //   return {
            //     title: catId,
            //   };
            // }}
            name='MealsOverView'
            component={MealOverView}
          />
          <Stack.Screen
            // options={({ route }) => {
            //   const catId = route.params.category.title;
            //   return {
            //     title: catId,
            //   };
            // }}
            name='MealScreen'
            component={MealScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
