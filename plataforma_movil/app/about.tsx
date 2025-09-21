import { View, Text } from "react-native";

export default function About() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Pantalla About</Text>
      <Text>¡Bienvenido a la segunda pantalla! 🎉</Text>
    </View>
  );
}