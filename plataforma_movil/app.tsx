import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./app/login";
import HomeScreen from "./app/Home";
import { initDB } from "./database";

const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    initDB(); // Inicializa la base de datos al iniciar
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}