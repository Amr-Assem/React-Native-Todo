import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import TodoDetails from "../screens/TodoDetails";

const { Navigator, Screen } = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Navigator>
      <Screen name="HOME" component={Home} />
      <Screen name="TODO DETAILS" component={TodoDetails} />
    </Navigator>
  );
}
