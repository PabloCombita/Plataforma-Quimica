import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import { insertUsuario } from "../database";

export default function LoginScreen({ navigation }: any) {
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");

  const handleLogin = () => {
    if (correo && contraseña) {
      insertUsuario(correo, contraseña);
      navigation.navigate("Home", { correo });
    } else {
      Alert.alert("Error", "Por favor completa todos los campos");
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <Text>Correo electrónico</Text>
      <TextInput value={correo} onChangeText={setCorreo} style={{ borderWidth: 1, marginBottom: 10, padding: 5 }} />
      <Text>Contraseña</Text>
      <TextInput value={contraseña} onChangeText={setContraseña} secureTextEntry style={{ borderWidth: 1, marginBottom: 20, padding: 5 }} />
      <Button title="Iniciar sesión" onPress={handleLogin} />
    </View>
  );
}