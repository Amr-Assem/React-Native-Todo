import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackNavigator from "./StackNavigator";
import CompletedTasks from "../screens/CompletedTasks";
import Ionicons from "@expo/vector-icons/Ionicons";

const { Navigator, Screen } = createBottomTabNavigator();

export default function BottomNavigator() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "grey",
          tabBarStyle: {
            bottom: 16,
            borderRadius: 16,
            width: "96%",
            height: 56,
            marginHorizontal: "auto",
            borderTopWidth: 0,
            backgroundColor: "black",
            elevation: 0,
          },
        }}
      >
        <Screen
          name="Main"
          component={StackNavigator}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="home" size={24} color="white" />
              ) : (
                <Ionicons name="home-outline" size={24} color="grey" />
              ),
          }}
        />

        <Screen
          name="Completed Tasks"
          component={CompletedTasks}
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="checkmark-circle" size={24} color="white" />
              ) : (
                <Ionicons
                  name="checkmark-circle-outline"
                  size={24}
                  color="grey"
                />
              ),
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
